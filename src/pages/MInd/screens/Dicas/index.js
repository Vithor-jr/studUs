import { 
	View,
	Image,
	Text,
	TouchableOpacity,
	ScrollView
} from "react-native"
import svgs from "../../../../../assets/svg"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { SvgXml } from "react-native-svg"
import { stringsDicas } from "../../data/dicas;"
import TicketTips from "../../../Tips/components/ticket_tips"
import TicketDicas from "../../components/TicketDicas"

export default function Dicas(){
	const navigate = useNavigation()

	return(
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={{padding:20}}
			>
				<Image
					style={styles.image} 
					source={require('../../../../../assets/Mind_Images/background/dicas.png')}
				/>

				<View>
					<TouchableOpacity onPress={() => navigate.goBack()}>
					<SvgXml xml={svgs.svgArrowWhite}/>
					</TouchableOpacity>
					<View style={{flexDirection:'row',	marginTop:10, gap:10, alignItems:'center'}}>
						<SvgXml xml={svgs.svgHearth}/>
						<Text style={styles.title}>Dicas de IE</Text>
					</View>

					<Text style={styles.subtitle}>Dicas de Inteligência emocional (IE)</Text>
					<Text style={[styles.subtitle, {fontSize:18, marginTop:50, marginBottom:20}]}>Dicas para ajudar você a evoluir!</Text>
				
					{
						stringsDicas.map((item, index) => (
							<TicketDicas 
								index={index}
								key={index}
								title={item.title}
								body={item.body}
								backgroundFrame={item.backgroundFrame}
								background={item.background}  />
						))
					}
				</View>
			</ScrollView>
		</View>
	)
}