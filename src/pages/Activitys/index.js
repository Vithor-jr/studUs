import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import ActiitysAtribuias from './screens/atribuidas';
import ActiitysConcluidas from './screens/concluidas';
import ActiitysPendentes from './screens/pendentes';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../assets/svg';
import { useNavigation } from '@react-navigation/native';
import CustomIndicator from './components/indicator';

const Tab = createMaterialTopTabNavigator();

export default function ActivitysBar() {
	const navigate = useNavigation();

  return (
			<View style={styles.container_bar}>
			<View style={styles.container_top}>
				<TouchableOpacity style={{position:'absolute', padding:15}} onPress={() => navigate.goBack()}>
					<SvgXml xml={svgs.svgBack} height={25} width={40} style={{transform: [{rotateY: '180deg'}]}}/>
				</TouchableOpacity>

				<View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
					<Text style={styles.text_title}>Atividades</Text>
				</View>
			</View>

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
					name="atribuidas"
					component={ActiitysAtribuias}
					options={{
						tabBarLabel:({focused}) => (
							<View style={{gap:4}}>
								<Text style={{color: focused ? '#17A1FA' : '#7F7F7F', fontFamily:"Varela-Round"}}>atribuída</Text>
								{/*{focused && <View style={{borderBottomWidth: 2, borderBottomColor: '#17A1FA', borderRadius:10}} />}*/}
							</View>
						),
						tabBarIndicator: () => <CustomIndicator order={1}/>
					}}/>

				<Tab.Screen
					name="pendentes"
					component={ActiitysPendentes}
					options={{
						tabBarLabel:({focused}) => (
							<View style={{gap:4}}>
								<Text style={{color: focused ? '#17A1FA' : '#7F7F7F', fontFamily:'Varela-Round'}}>pendente</Text>
								{/*{focused && <View style={{borderBottomWidth: 2, borderBottomColor: '#17A1FA', borderRadius:10}} />}*/}
							</View>
						),
						tabBarIndicator: () => <CustomIndicator order={2}/>
					}}/>

				<Tab.Screen
					name="concluidas"
					component={ActiitysConcluidas}
					options={{
						tabBarLabel:({focused}) => (
							<View style={{gap:4}}>
								<Text style={{color: focused ? '#17A1FA' : '#7F7F7F', fontFamily:'Varela-Round'}}>concluída</Text>
								{/*{focused && <View style={{borderBottomWidth: 2, borderBottomColor: '#17A1FA', borderRadius:10}} />}*/}
							</View>
						),
						tabBarIndicator: () => <CustomIndicator order={3}/>
					}}/>

			</Tab.Navigator>
		</View>
  );
}