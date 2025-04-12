import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import { View, Animated } from 'react-native';
import svgs from '../../assets/svg';
import { SvgXml } from 'react-native-svg';

import Chat from '../pages/Home/Chat';
import Cronograma from '../pages/Home/Cronograma';
import HomeScreen from '../pages/Home/HomeScreen';
import Main from '../pages/MInd/screens/Main';
import { useState } from 'react';
const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarActiveTintColor: 'white',
			tabBarInactiveTintColor: 'purple',
			tabBarStyle: {
				backgroundColor: '#F3F3F3',
				borderTopLeftRadius: 30, 
				borderTopRightRadius: 30,
				height: 75,
				position: 'absolute',
			},
			tabBarHideOnKeyboard: true
		}}
	>

	<Tab.Screen
		name="HomeScreen"
		component={HomeScreen}
		options={{
			headerShown: false,
			tabBarLabel: () => null,
			tabBarIcon: ({ focused }) => (
				<View style={{ 
					alignItems:'center',
					justifyContent: 'center',
					backgroundColor: focused ? '#6048AC' : 'transparent', 
					borderRadius: 50,
					padding:10,
				}}>
					<SvgXml xml={focused ? svgs.svgIconHomeActive : svgs.svgIconHomeInactive} width="30" height="30" />
				</View>
			),
		}}
		/>

		<Tab.Screen
			name="Chat"
			component={Chat}
			options={{
				headerShown: false,
				tabBarLabel: () => null,
				tabBarIcon: ({ focused }) => (
					<View style={{ 
						alignItems:'center',
						justifyContent: 'center',
						backgroundColor: focused ? '#6048AC' : 'transparent',
						paddingTop: 13, 
						borderRadius: 50,
						padding:12,
						
					}}>
						<SvgXml xml={focused ? svgs.svgIconChatActive : svgs.svgIconChatInactive} width="25" height="25" />
					</View>
				),
			}}
		/>

		<Tab.Screen 
			name="Cronograma"
			component={Cronograma}	
			options={{
				headerShown: false,
				tabBarLabel: () => null,
				tabBarIcon: ({ focused }) => (
					<View style={{ 
						alignItems:'center',
						justifyContent: 'center',
						backgroundColor: focused ? '#6048AC' : 'transparent', 
						borderRadius: 50,
						padding:12,
					}}>
						<SvgXml xml={focused ? svgs.svgIconCronogramaActive : svgs.svgIconCronogramaInactive} width="25" height="25" />
					</View>
				),
			}}
		/>

		<Tab.Screen
			name="Mind"
			component={Main}
			options={{ 
				headerShown: false,
				tabBarLabel: () => null,
				tabBarIcon: ({ focused }) => (
					<View style={{ 
						alignItems:'center',
						justifyContent: 'center',
						backgroundColor: focused ? '#6048AC' : 'transparent', 
						borderRadius: 50,
						padding:12,
					}}>
						<SvgXml xml={focused ? svgs.svgIconMindActive : svgs.svgIconMindInactive} width="27" height="27" />
					</View>
				),
			}}
		/>
	</Tab.Navigator>
);