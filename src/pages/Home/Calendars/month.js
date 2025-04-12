import React, { useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { 
	View, 
	Text
} from 'react-native';
import { styles } from './style';
import Ip from '../../../values/ip';
import { useActivityContext } from '../../../context/ActivitysContext';
import { useUserContext } from '../../../context/UserContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CalendarMonth(){
	const {userData} = useUserContext()
	const valueIp = Ip()
	const {atribuidas, setAtribuidas} = useActivityContext();

	const now = new Date();
	const year = now.getFullYear();		
	const month = now.getMonth() + 1;
	const day = now.getDate(); 
	const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; // formata a data como AAAA-MM-DD


	LocaleConfig.locales['br'] = {
		monthNames: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],
		monthNames: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],
		monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
		dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		today: 'Hoje'
	};
	
	LocaleConfig.defaultLocale = 'br';

	useEffect(() => {
    async function getActivies() {
      const token = await AsyncStorage.getItem('access_token');
      if (userData) {
        const response = await axios.get(`https://${valueIp}/activities/${userData.id}/atribuidas`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
				
        setAtribuidas(response.data);
      }
		}
  
    getActivies();
  }, [userData]);

	const markedDates = atribuidas!==null ? atribuidas.reduce((acc, activity) => {
		const date = activity.dueDate.split('T')[0];
    let backgroundColor = 'gray';

    if (activity.type === 'Vestibular') {
        backgroundColor = '#17A1FA'; 
    } else if (activity.type === 'Escola') {
        backgroundColor = '#17A1FA';
    }

    return { 
      ...acc, 
      [date]: { 
        customStyles: {
          container: {
            backgroundColor: backgroundColor,
            borderRadius: 4,
            width:25,
						height:25,
						alignItems:'center',
						justifyContent:'center',
						marginVertical:-3
          },
          text: {
            color: 'white',
						fontSize:11,
						fontFamily:'Varela-Round'
          },
        },
      },
    };
  }, {}) : {};

const renderDay = (day) => {
    const date = day.dateString;
		
		const isPastDate = new Date(day.dateString) < new Date(today);
    
		if(isPastDate){
			return (
        <View style={{width:25, height:25, alignItems:'center', justifyContent:'center', marginVertical:-3}}>
          <Text style={{fontFamily:'Varela-Round', fontSize:11, color:'rgba(0, 0, 0, 0.2)'}}>{day.day}</Text>
        </View>
      );
		}
		else if (markedDates[date]) {
      return (
        <View style={markedDates[date].customStyles.container}>
          <Text style={markedDates[date].customStyles.text}>{day.day}</Text>
        </View>
      );
    } else {
      return (
        <View style={{width:25, height:25,alignItems:'center', justifyContent:'center', marginVertical:-3}}>
          <Text style={{fontFamily:'Varela-Round', fontSize:11}}>{day.day}</Text>
        </View>
      );
    }
  };


	return(
		<View>
			<Calendar
				dayComponent={({date, state}) => renderDay(date)}
				hideArrows={true}
				markedDates={markedDates}
				markingType={'custom'}
				enableSwipeMonths={true}
				style={styles.container_calendar}
				onDayPress={day => {
					console.log('selected day', day);
				}}
				renderHeader={(date) => {
					const headerDate = date.toString('MMMM - yyyy');
					return (
						<View>
							<Text style={styles.text_month}>{headerDate}</Text>
						</View>
					);
				}}
				theme={{
					'stylesheet.calendar.header': {
						dayHeader: {
							fontFamily: 'Varela-Round',
							color: '#B3B3B3', 
							fontSize: 11
						},
						week: {
							marginTop: 10,
							borderBottomWidth: 2,
							borderBottomColor: '#E0DFDF',
							paddingBottom: 2,
							flexDirection: 'row',
							justifyContent: 'space-around'
						},
					},
				}}
			/>
		</View>
	);
}
