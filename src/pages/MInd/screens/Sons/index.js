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

import { sons as today } from "../../data/data_today";

const {width, heigth} = Dimensions.get('window')

export default function Sons(){
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
					source={require('../../../../../assets/Mind_Images/background/Sons.png')}
				/>

				<View style={styles.container_header}>
						<TouchableOpacity onPress={() => navigate.goBack()}>
							<SvgXml xml={svg.svgArrowWhite} />
						</TouchableOpacity>
				</View>

				<View style={styles.container_icon}>
					<SvgXml width={width *0.13} height={width * 0.13 * (29/43)} xml={svg.som}/>
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
										<Text style={styles.placeholder_input_search}>Procurar Som</Text>
								</View>
						}
				</View>

				<View style={{paddingHorizontal:20, marginBottom:20}}>
					<Text style={styles.title}>Sons Relaxantes</Text>
					<Text style={styles.paragraph}>
					Os sons relaxantes criam um ambiente calmante e inspirador, ideal para o pensamento criativo, eles ajudam a reduzir o estresse e a ansiedade, que são grandes inimigos da criatividade.
					</Text>
				</View>

				{
					filteredCategories.map((item, index) => (
						<TicketToday
							name={item.name}
							key={index}
							ytUrl={item.ytUrl}
							index={index}
							type='Som'
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