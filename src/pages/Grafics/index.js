import React, {useState, useEffect} from "react";
import {
	View, 
	Text, 
	TouchableOpacity,
	Image,
	Platform,
	TextInput,
	ScrollView
} from "react-native";

import { icons_grafics } from "../../../assets/svg/grafic_icons";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import CustomBarChart from "./grafics/Gifted";
import Header from "../MInd/components/Header/header";
import { SvgXml } from "react-native-svg";
import LineChart from "./grafics/LineChart";
import { useUserContext } from "../../context/UserContext";
import Ip from "../../values/ip";

export default function Grafics(){
	const navigate = useNavigation()
	const valueIp =Ip()
	const {userData} = useUserContext()
	const [moodWeek, setMoodWeek] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		checkMoodDefinition();
}, [userData]);

const checkMoodDefinition = async () => {
	try {
	 if(userData){
			setLoading(true)
			const token = await AsyncStorage.getItem('access_token');
			const userId = userData.id;
			const response = await axios.get(`https://${valueIp}/mood/${userId}/mood-week`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const moodHistory = response.data;
			setMoodWeek(moodHistory)
			console.log(moodHistory);
			setLoading(false)
		}
	} catch (error) {
		console.error("Erro ao verificar a definição de humor:", error);
	}
};

	return(
		<View style={styles.container}>
			 <Header isDrawer={true} navigate={navigate}/>

			 <View style={{marginStart:20}}>
				<Text style={styles.subtitle}>Acompanhe seu</Text>
				<Text style={styles.title}>Desempenho</Text>
			 </View>

			 <View style={styles.container_body}>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<View style={{margin:20}}>
						<View style={styles.container_topic}>
							<SvgXml xml={icons_grafics.icon_academic}/>
							<Text style={styles.text__topic}>Acadêmico</Text>
						</View>
						<Text style={styles.text_subtopic}>Confira o seu desempenho baseado nas suas sessões de estudos!</Text>
					</View>

					<CustomBarChart/>

					<View style={{margin:20}}>
						<View style={styles.container_topic}>
							<SvgXml xml={icons_grafics.icon_emotional}/>
							<Text style={styles.text__topic}>Emocional</Text>
						</View>
						<Text style={styles.text_subtopic}>Confira o a sua caminhada emocional durante sua semana!</Text>
					</View>

					<LineChart data={moodWeek}/>

					<View style={{height:50}}/>
				</ScrollView>
			</View>
		</View>
	);
}