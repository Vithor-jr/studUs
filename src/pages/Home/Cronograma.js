import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { 
	View, 
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator
} from 'react-native';
import axios from 'axios';
import TicketActivity from './Components/ticketActivity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {SvgXml, Svg, Path, Rect, G} from 'react-native-svg';
import svgs from '../../../assets/svg';
import CalendarMonth from './Calendars/month';
import CalendarWeek from './Calendars/week';
import { styles as estilos } from './styles';
import { useActivityContext } from '../../context/ActivitysContext';
import { useUserContext } from '../../context/UserContext';
import Ip from '../../values/ip';

export default function Cronograma (){
	const navigate = useNavigation();
	const {atribuidas, activitysWeek} = useActivityContext();
	const [activeButton, setActiveButton] = useState('Mês');

	const buttonStyle = (buttonName) => ({
    borderBottomColor: activeButton === buttonName ? '#FF7300' : 'white',
		borderBottomWidth:1
	});

	return(
		<View style={{flex:1, backgroundColor:'#6048AC'}}>
			<View style={{ height: '10%', width: '100%', padding: 20 }}>
				<TouchableOpacity onPress={() => navigate.openDrawer()}>
          <SvgXml xml={svgs.svgDrawer} width={20} height={17} />
        </TouchableOpacity>
			</View>

			<View style={estilos.container_father_calendar}>
				<View style={{width:'100%', paddingHorizontal:'3%', marginTop:'10%'}}>
					<View style={[estilos.container_buttons_calendar]}>
						<TouchableOpacity onPress={() => setActiveButton('Semana')}  style={buttonStyle('Semana')}>
							<Text style={estilos.text_buttons_calendar}>Semana</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setActiveButton('Mês')} style={buttonStyle('Mês')}>
							<Text style={estilos.text_buttons_calendar}>Mês</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{height:'38%', backgroundColor:'white'}}>
					{activeButton === 'Mês' && <CalendarMonth/>}
					{activeButton === 'Semana' && <CalendarWeek/>}
				</View>

				<View style={[estilos.container_father_calendar, {backgroundColor:'#D6D0E7', alignItems:'center', paddingTop:20}]}>
					<View style={{paddingBottom:75, width:'80%'}}>
							<FlatList
								showsVerticalScrollIndicator={false}
								data={activeButton === 'Mês' ? atribuidas : activeButton === 'Semana' && activitysWeek}
								renderItem={({ item }) => {
									return <TicketActivity activity={item}/>;
								}}
								keyExtractor={item => item.id.toString()}
							/>
						</View>
					</View>
			</View>
  	</View>
	);
}

