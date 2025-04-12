import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function EnemDisciplines(){
	return(
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					source={require('../../../../../assets/Editais/card_matematica.png')}
					style={styles.image}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					source={require('../../../../../assets/Editais/card_natureza.png')}
					style={styles.image}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					source={require('../../../../../assets/Editais/card_humanas.png')}
					style={styles.image}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					source={require('../../../../../assets/Editais/card_linguagens.png')}
					style={styles.image}
				/>
			</TouchableOpacity>
		</View>
	)
}