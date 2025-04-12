import { 
	View, 
	TouchableOpacity,
	Text,
	ScrollView
} from "react-native";
import { SvgXml } from "react-native-svg";
import svgs  from "../../../../assets/svg";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import TicketEdital from "../components/TicketEdital";

export default function Editais(){
	const navigate = useNavigation()
	const data_editais = [
		{name: 'ENEM', suubtitle:'Exame Nacional do Ensino Médio', color:'#4A5CFF'},
		{name: 'SIS', suubtitle:'Sistema de Ingresso Seriado', color:'#4320D1' },
		{name: 'PSC', suubtitle:'Processo Seletivo Contínuo', color:'#3D58E7' },
		{name: 'FUVEST', suubtitle:'Fundação Universitária para o Vestibular', color:'#403DE7'},
	]
	return(
		<View style={styles.screen_container}>
			<View style={styles.container_top}>
				<TouchableOpacity onPress={() => navigate.openDrawer()}>
          <SvgXml xml={svgs.svgDrawer} width={20} height={15} />
        </TouchableOpacity>
			</View>

			<View>
				<View style={styles.container_title_header}>
					<SvgXml xml={svgs.svgEditais} width={22} height={22}/>
					<Text style={styles.text_title}>Editais</Text>
				</View>
				<Text style={styles.text_subtitle}>Vestibulares</Text>
			</View>

			<View style={styles.container_body}>
				<View style={styles.container_list_vestibular}>
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={{paddingHorizontal:20}}>
								<Text style={styles.text_title_editais}>Vestibulares</Text>
								<Text style={styles.subtitle}>Confira os Editais dos vestibulares!</Text>
							</View>

							<View style={{alignItems:'center', gap:15, marginTop:30}}>
								{
									data_editais.map((item, index) => (
										<TicketEdital name={item.name} color={item.color} subititle={item.suubtitle} key={index}/>
									))
								}
							</View>
						</ScrollView>
				</View>
			</View>
		</View>
	)
}