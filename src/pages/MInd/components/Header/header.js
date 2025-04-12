import { useEffect, useState } from 'react';
import {
	View,
	TouchableOpacity,
	Image
} from 'react-native'
import { SvgXml } from 'react-native-svg';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Ip from '../../../../values/ip';
import axios from 'axios';

import { styles } from './style'
import svgs from "../../../../../assets/svg";
import { useUserContext } from '../../../../context/UserContext';


export default function Header({navigate, isDrawer}){
	const {userData} = useUserContext()
	const valueIp = Ip()
	const [imageUrl, setImageUrl] = useState('')

	useEffect(()=>{
		const getUserPhoto = async () => {
			try {
				const id = userData.id
				
				const token = await AsyncStorage.getItem('access_token');
				const response = await axios.get(`https://${valueIp}/user/${id}/photo-url`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const url = response.data.photoUrl
				
				setImageUrl(url)
			} catch (error) {
				if (error.response) {
					if (error.response && error.response.status === 401) {
								console.log('usuário sem foto salva')
						} else {
								console.log('Erro ao byscar dados:', error);
								console.log('Erro ao byscar foto de usuário. Por favor, tente novamente.');
						}
				} else {
						if (error.message && error.message.includes('Network Error')) {
							console.log('Erro de conexão. Verifique sua conexão com a internet.');
						}	else {
							console.log('Erro ao enviar dados:', error);
						}
				}
			}
		};

		getUserPhoto()
	}, [userData])

	return(
		<View style={styles.container}>
			{
				isDrawer ?
					<TouchableOpacity onPress={() => navigate.openDrawer()}>
						<SvgXml xml={svgs.svgDrawer} width={20} height={17} />
					</TouchableOpacity> 
				: <TouchableOpacity onPress={() => navigate.goBack()}>
						<SvgXml xml={svgs.svgArrowWhite} />
					</TouchableOpacity>
			}

			{
				imageUrl !== '' && 
				<Image
					source={{uri: imageUrl}}
					style={styles.image_profile}
				/>
			}
		</View>
	)
}