import { useState, useEffect } from "react";
import { 
	View, 
	TouchableOpacity,
	Text,
	ScrollView
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import svgs  from "../../../../assets/svg";

import { styles } from "./styles";

import ListTest from "./checkList";
import ProcessSelect from "../components/PSC_SIS";
import EnemDisciplines from "../components/ENEM";

export default function CheckList(){
	const navigate = useNavigation()
	const route = useRoute();
	const vestibularName = route.params?.vestibular; 
	
	return(
		<View style={styles.screen_container}>
			<View style={styles.container_top}>
				<TouchableOpacity onPress={() => navigate.goBack()}>
          <SvgXml xml={svgs.svgBack} style={{transform:[{rotate:'180deg'}]}} width={25} height={20} />
        </TouchableOpacity>
			</View>

			<View>
				<View style={styles.container_title_header}>
					<SvgXml xml={svgs.svgCheckList} width={25} height={25}/>
					<Text style={styles.text_title}>Editais</Text>
				</View>
				<Text style={styles.text_subtitle}>Assuntos</Text>
			</View>




				<View style={styles.container_body}>
				<ScrollView
					showsVerticalScrollIndicator={true}
				>
				<Text style={styles.text_title_vestibular}>{vestibularName}</Text>
						{ vestibularName === 'SIS' && <ProcessSelect vestibular={'SIS'}/> }

						{ vestibularName === 'PSC' && <ProcessSelect vestibular={'PSC'}/> }
				</ScrollView>
			</View>

		</View>
	)
}