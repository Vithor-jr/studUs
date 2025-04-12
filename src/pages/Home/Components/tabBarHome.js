import { useEffect, useState } from "react"
import { 
	View,
	TouchableOpacity,
	Text,
	FlatList
} from "react-native"

import { useActivityContext } from "../../../context/ActivitysContext"
import { getActivtysWeek, getActivitysNotCompletedToday, getActivitysImportant} from "../../Activitys/getActivitys"
import { stylesHome } from "../Styles/stylesHome"
import Activity from "./activitys"

export default function TabBarHome({id}){
	const [focused, setFocused] = useState('Today')
	const {
		activitiesToday, setActiviesToday,
		activitysWeek, setActivitysWeek,
		activitysImportant, setActivitysImportant
	} = useActivityContext()

	useEffect(()=>{
		async function functionGetActivitysWeek(){
			try {
					if(id){
							const week = await getActivtysWeek(id);
							setActivitysWeek(week);
					}
			} catch (error) {
					console.error("Erro ao buscar atividades da semana:", error);
			}
		}

		async function functionGetActivitysNotCompletedToday(){
			try {
					if(id){
							const today = await getActivitysNotCompletedToday(id);
							setActiviesToday(today);
					}
			} catch (error) {
					console.error("Erro ao buscar atividades de hoje:", error);
			}
		}

		
		async function functionGetActivitysImportant(){
			try {
					if(id){
							const important = await getActivitysImportant(id);
							setActivitysImportant(important);
					}
			} catch (error) {
					console.error("Erro ao buscar atividades importantes:", error);
			}
		}

		functionGetActivitysImportant()
		functionGetActivitysWeek()
		functionGetActivitysNotCompletedToday()

	}, [])


	return(
		<View>
			<View style={stylesHome.container_tab_bar_activitys}>
				<TouchableOpacity
					style={
						focused === 'Today' ? stylesHome.button_actived : stylesHome.buttons_inactived
					}
					onPress={()=>setFocused('Today')}
				>
					{focused === 'Today' && <View style={stylesHome.circle_button_actived}/>}
					<Text style={stylesHome.text_tab_bar_buttons}>Hoje</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={
						focused === 'Week' ? stylesHome.button_actived : stylesHome.buttons_inactived
					}
					onPress={()=>setFocused('Week')}
				>
					{focused === 'Week' && <View style={stylesHome.circle_button_actived}/>}
					<Text style={stylesHome.text_tab_bar_buttons}>Semana</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={
						focused === 'Important' ? stylesHome.button_actived : stylesHome.buttons_inactived
					}
					onPress={()=>setFocused('Important')}
				>	
					{focused === 'Important' && <View style={stylesHome.circle_button_actived}/>}
					<Text style={stylesHome.text_tab_bar_buttons}>Importante</Text>
				</TouchableOpacity>
			</View>
			
			{
		focused === 'Today' && activitiesToday.length === 0 ? (
			<Text style={{width:'100%', textAlign:'center', fontFamily:'Varela-Round', paddingVertical:50, justifyContent:'center'}}>Nenhuma atividade para hoje.</Text>
		) : focused === 'Week' && activitysWeek.length === 0 ? (
			<Text style={{width:'100%', textAlign:'center', fontFamily:'Varela-Round', paddingVertical:50, justifyContent:'center'}}>Nenhuma atividade para esta semana.</Text>
		) : focused === 'Important' && activitysImportant.length === 0 ? (
			<Text style={{width:'100%', textAlign:'center', fontFamily:'Varela-Round', paddingVertical:50, justifyContent:'center'}}>Nenhuma atividade importante.</Text>
		) : (
    <FlatList
      scrollEnabled={
        (focused === 'Today' ? activitiesToday.length : focused === 'Week' ? activitysWeek.length : activitysImportant.length) >= 3
      }
      showsHorizontalScrollIndicator={false}
      data={
        focused === 'Today' ? [...activitiesToday].reverse() : focused === 'Week' ? [...activitysWeek].reverse() : [...activitysImportant].reverse()
      }				
      horizontal
      renderItem={({ item, index }) => {
        return <Activity type={focused} activity={item} index={index} />;
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

		
		</View>
	)
}