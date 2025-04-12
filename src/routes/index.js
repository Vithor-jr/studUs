import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

import { ActivitysProvider } from '../context/ActivitysContext';


import Respiracao from '../pages/MInd/screens/Respiracao';
import Felling from '../pages/MInd/screens/felling';
import Chat from '../pages/Home/Chat';
import Create from '../pages/create';
import Login from '../pages/login';
import Request from '../pages/resetPassword/request';
import SplashScreen from '../pages/splash';
import UpdatePassword from '../pages/resetPassword/update';
import CalendarMonth from '../pages/Home/Calendars/month';
import CalendarWeek from '../pages/Home/Calendars/week';
import ActivitysBar from '../pages/Activitys';
import RoutesTips from '../pages/Tips/routes';
import ChatFriend from '../pages/ChatMind';
import { AppDrawerNavigator } from './drawer';
import MethodScreen from '../pages/MInd/screens/Methods';
import Sons from '../pages/MInd/screens/Sons';
import Meditacoes from '../pages/MInd/screens/Meditacoes';
import Dicas from '../pages/MInd/screens/Dicas';

const Stack = createNativeStackNavigator();



const Routes = () => (
  <ActivitysProvider>
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen name="Amigo" component={ChatFriend} options={{headerShown:false}}/>
			<Stack.Screen name="Dicas" component={Dicas} options={{headerShown:false}}/>
			<Stack.Screen name="Meditacoes" component={Meditacoes} options={{headerShown:false}}/>
			<Stack.Screen name="Sons" component={Sons} options={{headerShown:false}}/>
			<Stack.Screen name="RoutesTips" component={RoutesTips} options={{headerShown:false}}/>
			<Stack.Screen name="MethodScreen" component={MethodScreen} options={{headerShown:false}}/>
			<Stack.Screen name="activitysBar" component={ActivitysBar} options={{headerShown:false}}/>
			<Stack.Screen name="Felling" component={Felling} options={{headerShown:false}}/>
			<Stack.Screen name="Respiracao" component={Respiracao} options={{headerShown:false}}/>
			<Stack.Screen name="Month" component={CalendarMonth} options={{ headerShown: false }} />
			<Stack.Screen name="Week" component={CalendarWeek} options={{ headerShown: false }} />
			<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Menu" component={AppDrawerNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="Chat"	component={Chat} options={{headerShown: false}} />
			<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
			<Stack.Screen name="Create" component={Create} options={{headerShown: false}} />
			<Stack.Screen	name="Request" component={Request} options={{headerShown: false}} />
			<Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{headerShown: false}} />
		</Stack.Navigator>
	</ActivitysProvider>
);

export default Routes;