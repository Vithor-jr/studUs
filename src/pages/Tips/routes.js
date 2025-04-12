import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Methods from './screens/Methods';
import Tips from './screens/Tips';
import Main from './screens/mains';

const Stack = createNativeStackNavigator();

const RoutesTips = () => (
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Methods" component={Methods} options={{headerShown:false}}/>
			<Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
			<Stack.Screen name="Tips" component={Tips} options={{headerShown:false}}/>
		</Stack.Navigator>
);

export default RoutesTips;