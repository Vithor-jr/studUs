import { 
	Touchable,
	TouchableOpacity,
	View,
	Dimensions,
	Text,
	Image
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";


const width = Dimensions.get('window').width - 20

export default function TicketEdital({name, color, subititle}){
	const navigate = useNavigation()

	return(
		<TouchableOpacity
			onPress={() => {
				if(name === 'ENEM'){
					navigate.navigate('PDF', {vestibular: 'ENEM'})
				} else if(name === 'FUVEST'){
					navigate.navigate('PDF', {vestibular: 'FUVEST'})
				} else {
					navigate.navigate('CheckList', { vestibular: name })
				}
			}}
			style={{...styles.container_ticket, backgroundColor:color}}
		>
			<View style={{position:'absolute', paddingStart:15}}>
				<View>
					<Text style={styles.text_title}>{name}</Text>
					<Text style={styles.text_subtitle}>{subititle}</Text>
				</View>

				<View style={styles.container_bottom_description}>
					<Text style={styles.text_descripton}>Clique para Conferir os Editais'</Text>
				</View>
			</View>

			<View style={{paddingTop:30}}>
				<Image 
					style={{width:width, resizeMode:'stretch', margin:-5, marginVertical:-8}}
					source={require('../../../../../assets/Editais/ondas.png')}
				/>
			</View>
		</TouchableOpacity>
	)
}