import { 
	View,
	Image,
	Text,
	TouchableOpacity
} from "react-native";
import { styles } from "./styles";

export default function CardPDF({onPress, type,url, setUri, year}){
	return(
		<TouchableOpacity 
			onPress={onPress}
			style={styles.container}
		>
			<Image 
				source={require('../../../../../assets/Editais/card_pdf.png')}
				style={styles.image}
			/>
			<View style={{position:'absolute', alignSelf:'center'}}>
				<Image 
					source={url}
					style={styles.image_vestibular}
				/>
				<Text style={styles.text_type}>{type && type}</Text>
			</View>
			<Text style={styles.text_year}>{year}</Text>
		</TouchableOpacity>
	)
}