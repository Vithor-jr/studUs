import { 
	TouchableOpacity,
	View,
	Text,
	Image
} from "react-native";

import { styles } from "./styles";

export default function FavoriteCard({title, type, subtitle, url}){
	return(
		<TouchableOpacity style={styles.container_card}>
				<Image style={styles.image} source={url}/>

				<View style={{alignItems:'center', gap:5, width:'50%', height:'100%'}}>
					<View style={{width:'80%'}}>
						<Text style={styles.text_title}>{title}</Text>
						<Text style={styles.text_subtitle}>{title}</Text>
					</View>
					<Text style={styles.text_type}>{title}</Text>
				</View>
		</TouchableOpacity>
	)
}