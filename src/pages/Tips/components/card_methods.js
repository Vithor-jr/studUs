import {
	View,
	TouchableOpacity,
	Text
} from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'

export default function CardMethod({background, icon, title1}){
	const navigate = useNavigation()

	return(
		<TouchableOpacity
			onPress={()=>navigate.navigate('Methods', {title:title1, icon:icon})} 
			style={{...styles.cardMethod, backgroundColor:background}}>
			<SvgXml xml={icon}/>
			<Text style={styles.text_title_car_method}>{title1}</Text>
		</TouchableOpacity>
	)
}