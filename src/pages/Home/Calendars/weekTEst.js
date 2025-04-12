import React, {useState, useEffect} from 'react';
import { 
	View, 
	Text
} from 'react-native';
import moment from 'moment';
import Ip from '../../../values/ip';
import { useActivityContext } from '../../../context/ActivitysContext';
import { useUserContext } from '../../../context/UserContext';
import { styles } from './style';
import CalendarStrip from 'react-native-calendar-strip';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CalendarWeek(){
	const {userData} = useUserContext()
	const valueIp = Ip()

	const [customDatesStyles, setCustomDatesStyles] = useState([]);
	const {atribuidas, setAtribuidas} = useActivityContext();

	useEffect(() => {
		async function getActivies() {
			const token = await AsyncStorage.getItem('access_token');
			if (userData) {
				const response = await axios.get(`https://${valueIp}/activities/${userData.id}/atribuidas`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				
				const today = moment();
				const startOfWeek = today.clone().startOf('isoWeek');
				const endOfWeek = today.clone().endOf('isoWeek');
				const atribuidasSemanaAtual = response.data.filter(activity => {
					const activityDate = moment(activity.dueDate);
					return activityDate.isBetween(startOfWeek, endOfWeek, null, '[]');
				});
	
				setAtribuidas(atribuidasSemanaAtual);
			}
		}
	
		getActivies();
	}, [userData]);
	
	// Função para obter o índice do dia da semana (segunda-feira = 0, terça-feira = 1, ..., domingo = 6)
	const getDayIndex = (date) => {
		return moment(date).isoWeekday() - 1;
	};
	
	// Array para armazenar as views vermelhas visíveis
	const redViews = Array(7).fill(false);
	
	// Marcar as views vermelhas correspondentes aos dias das atividades atribuídas
	atribuidas.forEach(activity => {
		const dayIndex = getDayIndex(activity.date); // Supondo que a data da atividade seja um atributo 'date'
		redViews[dayIndex] = true;
	});
	

	

	const locale = {
		name: 'pt',
		config: {
			months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
			monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
			weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
			weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
		}
	};

	let startDate = moment();

	for (let i = -7; i <= 7; i++) {
		let date = startDate.clone().add(i, 'days');
		customDatesStyles.push({
			startDate: date,
			dateContainerStyle: {height:'100%', justifyContent:'space-between'},
		});
	}
	


	return(
		<View style={{width:'100%', height:'70%'}}>
			<CalendarStrip
				leftSelector={[]}
				rightSelector={[]}
				calendarHeaderFormat='MMMM - yyyy'
				locale={locale}
				
				calendarHeaderContainerStyle={styles.header_week_names}
				style={styles.container_calendar_week}
				calendarHeaderStyle={styles.text_month_year}
				calendarColor={'white'}
				customDatesStyles={customDatesStyles}
				dateNumberStyle={styles.text_calendar_week}
				dateNameStyle={styles.text_calendar_week}
				highlightDateNumberStyle={[styles.text_calendar_week]}
				highlightDateNameStyle={[styles.text_calendar_week]}
			/>
			<View style={styles.line_calendar_week}/>
		</View>
	);
}

