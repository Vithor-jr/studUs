import React, { useEffect, useState } from "react";
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    Dimensions,
    ScrollView,
    Alert
} from "react-native";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { SvgXml, err } from "react-native-svg";

import FavoriteCard from "../../components/Favoritos";
import TodayCard from "../../components/TodayCard";
import FellinfCard from "../../components/FellingCard";
import Header from "../../components/Header/header";
import ModalMessage from '../../../Home/Components/ModalMessage'

import ActivityIndicator from "../../../Components/ActivityIndicator";
import { today_data } from "../../data/today";
import { fellings } from "../../data/fellings";
import { styles } from "./styles";
import { useUserContext } from "../../../../context/UserContext";
import { svg_mind } from "../../../../../assets/Mind_Images/Svg/svgs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ip from "../../../../values/ip";

const width = Dimensions.get('screen').width - 20
const height = width * (100/339)

export default function Main() {
    const { userData } = useUserContext();
    const navigate = useNavigation();
    const [saudacao, setSaudacao] = useState();
	const valueIp = Ip()
	const [loading, setLoading] = useState(false)
    const [canDefineMood, setCanDefineMood] = useState(true);
	const [message, setMessage] = useState('')
	const [type, setType] = useState('')

    const width = Dimensions.get('window').width;

    useEffect(() => {
				setLoading(true)
        const horaAtual = new Date().getHours();
        if (horaAtual >= 6 && horaAtual < 12) {
            setSaudacao("Bom dia,");
        } else if (horaAtual >= 12 && horaAtual < 18) {
            setSaudacao("Boa tarde,");
        } else {
            setSaudacao("Boa noite,");
        }

        checkMoodDefinition();
    }, [userData]);

		const checkMoodDefinition = async () => {
			try {
			 if(userData){
					const token = await AsyncStorage.getItem('access_token');
					const userId = userData.id;
					const response = await axios.get(`https://${valueIp}/mood/${userId}/mood-week`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					const moodHistory = response.data;
                    const today = new Date();

                    today.setHours(today.getHours() - 4);

                    const hasDefinedMoodToday = moodHistory.some(mood => {
                    const moodDate = new Date(mood.date);
                    return moodDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];
                    });
                    
                    console.log(today, moodHistory)
					
					if (hasDefinedMoodToday) {
						setCanDefineMood(false);
					}
					setLoading(false)
				}
			} catch (error) {
				console.error("Erro ao verificar a definição de humor:", error);
				setLoading(false)
			}
		};

				
		const defineMood = async (mood) => {
			try {
				setLoading(true)
				const token = await AsyncStorage.getItem('access_token');
				const userId = userData.id;

				if (!canDefineMood) {
					Alert.alert("Aviso", "Você já definiu seu humor hoje.");
					return;
				}

				await axios.post(`https://${valueIp}/mood/set-mood`, { userId, modd: mood }, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setCanDefineMood(false);
				setType('sucess')
				setLoading(false)
				setMessage('Obrigada por compartilhar seus sentimentos')			
			} catch (error) {
				console.error("Erro ao definir humor:", error);
				setType('')
				setMessage('Erro: ', error)
			}
		};

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        source={require('../../../../../assets/Mind_Images/background/main_background.png')}
                        style={styles.image}
                    />

                    <Header isDrawer={true} navigate={navigate} />

                    <View style={styles.container_text}>
                        <Text style={styles.text_subtitle}>{saudacao}</Text>
                        <Text numberOfLines={1} style={styles.text_title}>{userData && userData.username}!</Text>
                    </View>

                    <View style={styles.container_top_message}>
                        <Image
                            source={require('../../../../../assets/Mind_Images/emojis/smiling.png')}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={styles.text_top_message}>Relaxar também é importante</Text>
                    </View>

                    {
                        canDefineMood &&  <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.text_topic}>Como está se sentindo hoje?</Text>
                        <View style={styles.container_emojis}>
                            <TouchableOpacity onPress={() => defineMood('TRISTE')}>
                                    <Image
                                            source={require('../../../../../assets/Mind_Images/emojis/frowning.png')}
                                            style={styles.emojis}
                                    />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => defineMood('RAIVA')}>
                                    <Image
                                            source={require('../../../../../assets/Mind_Images/emojis/angry.png')}
                                            style={styles.emojis}
                                    />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => defineMood('NEUTRO')}>
                                    <Image
                                            source={require('../../../../../assets/Mind_Images/emojis/neutral.png')}
                                            style={styles.emojis}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => defineMood('FELIZ')}>
                                    <Image
                                            source={require('../../../../../assets/Mind_Images/emojis/beaming.png')}
                                            style={styles.emojis}
                                    />
                            </TouchableOpacity>
                         </View>
                        </View>
                    }

                    <View>
                        <Text style={styles.text_topic}>O que você está sentindo?</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
                                {
                                    fellings.map((item, index) => (
                                        <FellinfCard color={item.color} index={index} title={item.title} url={item.url} key={index} />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>

                    <View>
                        <Text style={styles.text_topic}>O que você precisa hoje?</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
                                {
                                    today_data.map((item, index) => (
                                        <TodayCard
                                            title={item.title}
                                            subtitle_1={item.subtitle_1}
                                            subtitle_2={item.subtitle_2}
                                            svg={item.svg}
                                            url={item.url}
                                            svg_title={item.image_title}
                                            key={index}
                                        />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>

                   {
                    /*
                    <View>
                        <Text style={styles.text_topic}>Seus favoritos</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
                                {
                                    fellings.map((item, index) => (
                                        <FavoriteCard title={item.title} url={item.url} key={index} />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                    */
                   }

                    <Text style={styles.text_topic}>Inteligência emocional - Dicas</Text>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>navigate.navigate('Dicas')}>
                            <SvgXml width={width} height={height} xml={svg_mind.button} />
                            <View style={styles.container_text_button}>
                                <Text style={styles.title_button}>Dicas valiosas</Text>
                                <Text style={styles.subtitle_button}>que irão ajudar você a gerenciar suas emoções!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {message !== '' && <ModalMessage onClose={()=>{setMessage('')}} text={message} type={type}/>}
                {loading && <ActivityIndicator message='Aguarde'/>}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}
