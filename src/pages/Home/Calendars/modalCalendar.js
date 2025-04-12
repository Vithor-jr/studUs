import React, { useState, useEffect, useCallback} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { 
	View, 
	Text,
	TouchableOpacity
} from 'react-native';
import { styles } from './style';
import svgs from '../../../../assets/svg';
import { SvgXml } from 'react-native-svg';
import { useUserContext } from '../../../context/UserContext';

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

export default function ModalCalendar(){
	const [selectedDate, setSelectedDate] = useState(null);
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const day = now.getDate(); 

	const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; // formata a data como AAAA-MM-DD

	const {setSelectedDates} = useUserContext()

	const onDayPress = (day) => {
		setSelectedDates(day.dateString);
		setSelectedDate(day.dateString);
	};

	const renderDay = useCallback((day) => {
		const isToday = day.dateString === today;
    const isSelected = day.dateString === selectedDate;
    const isPastDate = new Date(day.dateString) < new Date(today);
		
    let backgroundColor;
    let fontColor;

    if (isToday) {
        backgroundColor = '#6048AC';
        fontColor = 'white';
    } else if (isSelected) {
        backgroundColor = '#17A1FA';
        fontColor = 'white';
    } else {
        backgroundColor = 'transparent';
        fontColor = 'black';
    }

    if (isPastDate) {
        return (
            <View style={styles.day_modal_calendar}>
                <Text style={{fontFamily: 'Varela-Round', fontSize: 11, color: '#B3B3B3'}}>{day.day}</Text>
            </View>
        );
    }
    return (
        <TouchableOpacity
            style={{...styles.day_modal_calendar, backgroundColor: backgroundColor}}
            onPress={() => onDayPress(day)}>
            <Text style={{fontFamily: 'Quicksand-Bold', fontSize: 11, color: fontColor}}>{day.day}</Text>
        </TouchableOpacity>
    );
	}, [selectedDate, today, onDayPress]);



	return(
		<View>
			<Calendar
				dayComponent={({date, state}) => renderDay(date)}
				//markingType={'custom'}
				renderArrow={(direction) => 
					<SvgXml xml={svgs.svgArrowPurple} width={23} height={23} style={{ transform: direction === 'right' ? [] : [{ rotate: '180deg' }] }} />
				}
				//enableSwipeMonths={true}
				style={{...styles.container_calendar, width:'100%', borderRadius:30}}
				markedDates={{
					[selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}
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
