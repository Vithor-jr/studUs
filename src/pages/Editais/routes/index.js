import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PdfEdital from '../PDFs';
import Editais from '../Editais';
import CheckList from '../CheckList';

const Stack = createNativeStackNavigator();

const RoutesEditais = () => (
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Main" component={Editais} options={{headerShown:false}}/>
			<Stack.Screen name="PDF" component={PdfEdital} options={{headerShown:false}}/>
			<Stack.Screen name="CheckList" component={CheckList} options={{headerShown:false}}/>
		</Stack.Navigator>
);

export default RoutesEditais;