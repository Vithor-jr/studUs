import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomIndicator from './indicator';
import styles from './style';
import ChatMind from "./Chats/ChatMind";
import ChatStuds from "./Chats/ChatStuds";

const Tab = createMaterialTopTabNavigator()

export default function ChatBar(){
	const navigate = useNavigation()

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: styles.text_bar,
				tabBarStyle: styles.bar,
				tabBarActiveTintColor: '#17A1FA',
				tabBarInactiveTintColor: '#B3B3B3',
				tabBarPressColor: 'transparent',
				tabBarPressOpacity: 1,
			}}
		>
			<Tab.Screen
				name="TeacherChat"
				component={ChatStuds}
				options={{
					tabBarLabel:({focused}) => (
						<View style={{marginBottom:-10}}>
							<Text style={{color: focused ? '#17A1FA' : '#7F7F7F', fontFamily:"Varela-Round"}}>Professor</Text>
						</View>
					),

					tabBarIndicator: () => <CustomIndicator order={1}/>
				}}
			/>

			<Tab.Screen
				name="StudentChat"
				component={ChatMind}
				options={{
					tabBarLabel:({focused}) => (
						<View style={{marginBottom:-10}}>
							<Text style={{color: focused ? '#17A1FA' : '#7F7F7F', fontFamily:"Varela-Round"}}>Amigo</Text>
						</View>
					),	
					tabBarIndicator: () => <CustomIndicator order={2}/>
				}}
			/>
		</Tab.Navigator>
	)
}