import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Felling from '../screens/felling';
import Respiracao from '../screens/Respiracao';
import Today from '../screens/Today';

const Stack = createNativeStackNavigator();

const RoutesMind = () => (
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Respiracao" component={Respiracao} options={{headerShown:false}}/>
			<Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
			<Stack.Screen name="Today" component={Today} options={{headerShown:false}}/>
			<Stack.Screen name="Felling" component={Felling} options={{headerShown:false}}/>
		</Stack.Navigator>
);

export default RoutesMind;