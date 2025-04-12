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

import MapaMental from "./methods/MapaMental";
import Robinson from "./methods/Robinson";
import AutoExplicativo from "./methods/AutoExplicativo";
import Intercalado from "./methods/Intercalado";
import Pomodoro from "./methods/Pomodoro";
import TestePratico from "./methods/TestPratic";

import { iconsActivitys } from "../../../../assets/svg/iconsMethods";
import { styles } from "../styles";
import Feynman from "./methods/Feynman";

const screenWidth = Dimensions.get('window').width + 10;
const heightTop = screenWidth * (171 / 360)

export default function Methods({route}){
	const navigate = useNavigation()
	const { title, icon } = route.params;


	return(
		<View style={{...styles.container, paddingTop:25, backgroundColor:'white'}}>
			<View style={{ position: 'absolute', zIndex:1, bottom:'80%'}}>
				<SvgXml xml={iconsActivitys.conatinerTopTips} width={screenWidth} height={heightTop}/>
			</View>

			<View style={styles.container_header}>
					<TouchableOpacity>
							<SvgXml xml={iconsActivitys.svgBack} onPress={() => navigate.goBack()} />
					</TouchableOpacity>

					<View style={{...styles.container_header_tips}} >
						<SvgXml width={35} xml={icon}/>
						<Text style={{...styles.title_tips, fontSize:20}}>
								{title}
						</Text>
					</View>
					<Text style={{...styles.subtitle_tips, marginTop:-5}}>Evolua seus estudos!</Text>
			</View>
			{
				title === 'Método Pomodoro' ? <Pomodoro/> 
				: title === 'Método de estudo intercalado' ? <Intercalado/> 
				: title === 'Método Auto-explicação' ? <AutoExplicativo/>
				: title === 'Método Robinson' ? <Robinson/>
				: title === 'Método teste prático' ? <TestePratico/>
				: title === 'Método mapa mental' ? <MapaMental/> 
				: title === 'Método Feynman' ? <Feynman/>
				: null
			}
		</View>
	)
}