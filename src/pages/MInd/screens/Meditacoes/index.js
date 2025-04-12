import { 
	View,
	Text,
	Dimensions,
	Image, 
	TextInput,
	TouchableOpacity,
	ScrollView
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

import { styles } from "./styles";
import svgs from "../../../../../assets/svg";
import { svg } from "../../data/svg";
import TicketToday from "../../components/TicketToday";

import { meditacoes as today } from "../../data/data_today";

const {width, heigth} = Dimensions.get('window')

export default function Meditacoes(){
	const navigate = useNavigation()
	const [inputFocus, setInputFocus] = useState(false)
	const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(today);

    const searchCategories = (term) => {
			setSearchTerm(term);
			if (term) {
				setFilteredCategories(today.filter(category => 
					category.title.toLowerCase().includes(term.toLowerCase())
				));
			} else {
				setFilteredCategories(today);
			}
		};

	return(
		<ScrollView>
			<View style={styles.container}>
				<Image
					style={styles.image_top}
					source={require('../../../../../assets/Mind_Images/background/meditacoes.png')}
				/>

				<View style={styles.container_header}>
						<TouchableOpacity onPress={() => navigate.goBack()}>
							<SvgXml xml={svg.svgArrowWhite} />
						</TouchableOpacity>
				</View>

				<View style={styles.container_icon}>
					<SvgXml width={width *0.13} height={width * 0.13 * (29/43)} xml={svg.meditacao}/>
				</View>

				<View style={styles.container_input}>
						<TextInput
								value={searchTerm}
								onFocus={()=>setInputFocus(true)}
								onBlur={()=>setInputFocus(false)}
								onChangeText={searchCategories}
								style={styles.text_input_search}
						/>

						{searchTerm === '' && !inputFocus &&
								<View style={{ position: 'absolute', flexDirection: 'row', gap: 5}}>
										<SvgXml xml={svgs.svgLupa} color='#999999' />
										<Text style={styles.placeholder_input_search}>Procurar Meditação</Text>
								</View>
						}
				</View>

				<View style={{paddingHorizontal:20, marginBottom:20}}>
					<Text style={styles.title}>Meditações</Text>
					<Text style={styles.paragraph}>
						Meditar é definido como a condição ou atitude de voltar-se para o centro no sentido de desligar-se do mundo exterior e voltar a atenção para dentro de si ou concentrar-se intensamente em algo
					</Text>
				</View>

				{
					filteredCategories.map((item, index) => (
						<TicketToday
							key={index}
							ytUrl={item.ytUrl}
							index={index}
							name={item.name}
							type='Meditação'
							size={filteredCategories.length}
							url={item.url}
							title={item.title}
						/>
					))
					}
			</View>
			
		</ScrollView>
	)
}