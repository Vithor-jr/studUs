import { 
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropdownSearch from "../components/DropdowSearch";
import svgs from "../../../../assets/svg";
import { styles } from "./styles";
import { useState } from "react";
import ModalPdf from "../components/ModalPdf";
import CardPDF from "../components/Card_PDF";
import { 
	SIS_1_etapa, 
	SIS_2_etapa, 
	SIS_3_etapa,
	PSC_1_etapa,
	PSC_2_etapa,
	PSC_3_etapa,
	ENEM,
	Fuvest
} from "../data/card_pdf";

export default function PdfEdital(){
	const navigate = useNavigation()
	const route = useRoute();
	const vestibularName = route.params?.vestibular; 
	const [uri, setUri] = useState('')
	const [year, setYear] = useState(2024)

	const [webVisible, setWebVisible] = useState()

	const reorderCards = (cards, year) => {
		const currentYearCardIndex = cards.findIndex(card => card.year === year);
		if (currentYearCardIndex !== -1) {
			const [currentYearCard] = cards.splice(currentYearCardIndex, 1);
			cards.unshift(currentYearCard);
		}
		return cards;
	};

	const getCards = () => {
		let cards;
		console.log(vestibularName)
		switch (vestibularName) {
			case 'ENEM':
				cards = [...ENEM];
				break;
			case 'SIS - 1° Fase':
				cards = [...SIS_1_etapa];
				break;
			case 'SIS - 2° Fase':
				cards = [...SIS_2_etapa];
				break;
			case 'SIS - 3° Fase':
				cards = [...SIS_3_etapa];
				break;
			case 'PSC - 1° Fase':
				cards = [...PSC_1_etapa];
				break;
			case 'PSC - 2° Fase':
				cards = [...PSC_2_etapa];
				break;
			case 'PSC - 3° Fase':
				cards = [...PSC_3_etapa];
				break;
			case 'FUVEST':
				console.log('é isso')
				cards = [...Fuvest];
				break;
			default:
				cards = [];
				break;
		}
		return reorderCards(cards, year);
	};

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
				<ScrollView showsVerticalScrollIndicator={true}>
					<Text style={styles.text_title_vestibular}>{vestibularName}</Text>
					<Text style={styles.text_subititle}>Caso queira, selecione o ano do edital:</Text>

					{
						/*
						<DropdownSearch
							background={
								(vestibularName === 'PSC - 1° Fase' || vestibularName === 'SIS - 1° Fase') ? 
								'#47AF39' :
								(vestibularName === 'PSC - 2° Fase' || vestibularName === 'SIS - 2° Fase') ?
								'#F67103' :
								(vestibularName === 'PSC - 3° Fase' || vestibularName === 'SIS - 3° Fase') ?
								'#018CE6' : '#4A5CFF'
							}
							setYear={(value) => setYear(value)}
							year={year}
						/>  
						*/
					}
					{webVisible && <ModalPdf uri={uri} onClose={() => setWebVisible(false)} />}

					<View style={styles.container_card}>		
						{getCards().map((item, index) => (
							<CardPDF
								url={item.Image}
								key={index} 
								onPress={() => { setWebVisible(true); setUri(item.uri); }}
								year={item.year}
								type={item.type}
							/>
						))}
					</View>

					<View style={{height:50}}/>
				</ScrollView>
			</View>
		</View>
	);
}