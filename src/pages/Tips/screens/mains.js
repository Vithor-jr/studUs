import React, { useState } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import CardMethod from "../components/card_methods";
import svgs from "../../../../assets/svg";
import { iconsActivitys } from "../../../../assets/svg/iconsMethods";
import { styles } from "../styles";

const screenWidth = Dimensions.get('window').width + 10;
const heightTop = screenWidth * (171 / 360)

export default function Main() {
    const navigate = useNavigation();
    const [methodSearch, setMethodSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const data = [
        { background: '#C7D7F8', icon: iconsActivitys.iconClock, title: 'Método Pomodoro' },
        { background: '#E3C1F2', icon: iconsActivitys.iconBlocks, title: 'Método de estudo intercalado' },
        { background: '#9888E5', icon: iconsActivitys.iconExplain, title: 'Método Auto-explicação' },
        { background: '#F3B2DD', icon: iconsActivitys.iconSvgRead, title: 'Método Robinson' },
        { background: '#C7D7F8', icon: iconsActivitys.iconCresc, title: 'Método teste prático' },
        { background: '#9888E5', icon: iconsActivitys.iconBlocks, title: 'Método mapa mental' },
        { background: '#F3B2DD', icon: iconsActivitys.iconExplain, title: 'Método Feynman' },
    ];

    const handleSearch = (value) => {
        const filteredMethods = data.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filteredMethods);
    };

    const handleInputChange = (value) => {
        setMethodSearch(value);
        if (value === '') {
            setFilteredData([]);
        } else {
            handleSearch(value);
        }
    };

    return (
			<View style={styles.container}>
					<View style={{ position: 'absolute', zIndex:1, bottom:'82%'}}>
						<SvgXml xml={iconsActivitys.conatinerTopTips} width={screenWidth} height={heightTop}/>
					</View>

					<View style={styles.container_header}>
							<TouchableOpacity>
									<SvgXml xml={iconsActivitys.svgBack} onPress={() => navigate.goBack()} />
							</TouchableOpacity>

							<Text style={styles.title}>
									Vamos evoluir nossos estudos!
							</Text>

							<View style={styles.container_input}>
									<TextInput
											onChangeText={handleInputChange}
											style={styles.text_input_search}
									/>

									{methodSearch === '' &&
											<View style={{ position: 'absolute', flexDirection: 'row', gap: 5 }}>
													<SvgXml xml={svgs.svgLupa} color='#999999' />
													<Text style={styles.placeholder_input_search}>Procurar métodos</Text>
											</View>
									}
							</View>
					</View>

					<ScrollView
							showsVerticalScrollIndicator={false}
					>
						<View style={styles.conatiner_body}>
								<TouchableOpacity 
									style={styles.container_dicas_estudos}
									onPress={()=>navigate.navigate('Tips')}	
								>
										<View style={styles.sub_container_text_dicas_estudos}>
												<Text style={styles.text_title_dicas_estudos}>Dicas de estudo</Text>
												<Text style={styles.text_message_dicas_estudos}>Toque para conhecer as melhores dicas para elevar suas sessões de estudo.</Text>
										</View>

										<View style={styles.sub_container_image_dicas_estudos}>
												<SvgXml xml={iconsActivitys.iconMethos} />
										</View>
								</TouchableOpacity>

								<Text style={styles.text_title_methods}>Métodos de Estudo</Text>
								
								{methodSearch !== '' && filteredData.length === 0 && (
										<Text style={styles.text_sem_resul}>Nenhum resultado encontrado</Text>
								)}

								<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
										{(methodSearch === '' ? data : filteredData).map((item, index) => (
												<CardMethod key={index} background={item.background} icon={item.icon} title1={item.title} />
										))}
								</View>
						</View>
					</ScrollView>
			</View>

    );
}
