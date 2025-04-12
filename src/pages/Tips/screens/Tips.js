import { 
	Text, 
	View, 
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import TicketTips from "../components/ticket_tips";
import { stringsTips } from "../strings";
import { iconsActivitys } from "../../../../assets/svg/iconsMethods";
import { styles } from "../styles";

const screenWidth = Dimensions.get('window').width + 10;
const heightTop = screenWidth * (171 / 360)

export default function Tips(){
	const navigate = useNavigation()

	return(
		<View style={{...styles.container, paddingTop:25}}>
			<View style={{ position: 'absolute', zIndex:1, bottom:'80%'}}>
				<SvgXml xml={iconsActivitys.conatinerTopTips} width={screenWidth} height={heightTop}/>
			</View>

			<View style={styles.container_header}>
					<TouchableOpacity>
							<SvgXml xml={iconsActivitys.svgBack} onPress={() => navigate.goBack()} />
					</TouchableOpacity>

					<View style={styles.container_header_tips}>
						<SvgXml xml={iconsActivitys.iconChapeu}/>
						<Text style={styles.title_tips}>
								Dicas de estudo
						</Text>
					</View>
					<Text style={styles.subtitle_tips}>Seus estudos mais eficientes!</Text>
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.conatiner_body}>
					<Text style={{...styles.text_title_methods, marginTop:20}}>Aproveite!</Text>
					{
						stringsTips.map((item, index) => (
							<TicketTips index={index} key={index} texts={item} />
						))
					}
				</View>
			</ScrollView>
		</View>
	)
}