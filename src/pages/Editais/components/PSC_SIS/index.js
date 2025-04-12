import { 
	Image,
	View,
	Dimensions,
	Text,
	TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('window').width - 20
const proporcionr = 85/317
const height = width * proporcionr + 10

export default function ProcessSelect({vestibular}){
	const navigation = useNavigation()
	


	return(
		<View style={styles.container}>
			<View style={{width:'100%', alignItems:'flex-start', paddingHorizontal:20}}>
				<Text style={styles.text_pergunta}>Qual fase você irá fazer?</Text>
				<Text style={styles.text_description}>Confira os editais da sua fase!</Text>
			</View>

			<TouchableOpacity
				onPress={()=> navigation.navigate('PDF', {vestibular: vestibular === 'PSC' ? 'PSC - 1° Fase' : (vestibular === 'SIS' && 'SIS - 1° Fase') })}
			>
				<Image
					source={require('../../../../../assets/Editais/primeira_etapa.png')}
					style={{resizeMode:'stretch', height:height, width:width}}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={()=> navigation.navigate('PDF', {vestibular: vestibular === 'PSC' ? 'PSC - 2° Fase' : (vestibular === 'SIS' && 'SIS - 2° Fase') })}
			>
				<Image
					source={require('../../../../../assets/Editais/segunda_etapa.png')}
					style={{resizeMode:'stretch', height:height, width:width}}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={()=> navigation.navigate('PDF', {vestibular: vestibular === 'PSC' ? 'PSC - 3° Fase' : (vestibular === 'SIS' && 'SIS - 3° Fase') })}
			>
				<Image
					source={require('../../../../../assets/Editais/terceira_etapa.png')}
					style={{resizeMode:'stretch', height:height, width:width}}
				/>
			</TouchableOpacity>
			
		</View>
	)
}