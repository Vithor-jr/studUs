import React, {useState, useEffect} from "react";
import {
	View, 
	Text, 
	TouchableOpacity,
	Image,
	Platform,
	TextInput,
	Modal
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MaskedTextInput } from 'react-native-mask-text';

import ModalMessage from '../Home/Components/ModalMessage'
import ModalConfirm from '../Home/Components/ModalConfirm'
import ActivityIndicator from "../Components/ActivityIndicator";
import { useUserContext } from "../../context/UserContext";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";
import svgs from "../../../assets/svg";
import Ip from "../../values/ip";

export default function UpdateUser(){
	const navigate = useNavigation()
	const valueIp = Ip()
	const {userData, setUserData} = useUserContext()
	const [imageDatabase, setImageDatabase] = useState('')
	const [imageUrl, setImageUrl] = useState(null);

	const [modalVisible, setModalVisible] = useState(false)
	const [modalError, setModalError] = useState('')
	const [modalSuccess, setModalSuccess] = useState(false)

  const [nomeValue, setNomeValue] = useState(userData ? userData.nome : '');
	const [emailValue, setEmailValue] = useState(userData ? userData.email : '');
	const [phoneValue, setPhoneValue] = useState(userData ? userData.phone : '');
	const [loading, setLoading] = useState(false);

	const [erroEmail, setErroEmail] = useState(null)
  const [erroNome, setErroNome] = useState(null)
	const [erroTelefone, setErroTelefone] = useState(null)
	const [erroModalEquals, setModalErroEquals] = useState(false)

	const openImage = async () => {
		const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
	
		if (permissionResult.granted === false) {
			alert('Permissão para acessar a galeria de imagens é necessária!');
			return;
		}
	
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
	
		if (pickerResult.canceled) {
			return;
		} else {
			const imageUri = pickerResult.assets[0].uri;
			setImageUrl(imageUri);
		}

		const originalConsoleWarn = console.warn;
		console.warn = function(message, ...args) {
			if (message.includes('Key "cancelled" in the image picker result is deprecated')) {
				console.log('AVISO REDIRECIONADO PARA O CONSOLE:', message);
			} else {
				originalConsoleWarn.apply(console, [message, ...args]);
			}
		};
	};

	const uploadImage = async (userId, imageUri) => {
		const token = await AsyncStorage.getItem('access_token');

		const formData = new FormData();
		formData.append('file', {
			uri: imageUri,
			type: 'image/jpeg',
			name: 'photo.jpg',
		});
		formData.append('userId', userId);

		try {
			// Fazer o upload usando o Axios
			const axiosResponse = await axios.post(`https://${valueIp}/user/upload-photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});

			getUserPhoto();
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
			console.error('Erro ao fazer upload da imagem:', error);
		}
	};

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
			setImageDatabase(url)
		} catch (error) {
			console.log('Erro ao buscar a foto do usuário:', error);
		}
	};

	const validar = () => {
		setLoading(true)
		let nameEquals = false;
		let phoneEquals = false;
		let emailEquals = false;
		let urlEquals = false;
		const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	
		setModalVisible(false);
	
		if(imageUrl === imageDatabase) console.log('são igauis')

		if (!emailValue || emailValue.trim() === '' || !regexEmail.test(emailValue)) {
			setErroEmail('Preencha seu email corretamente');
			setLoading(false)
			return false;
		} else {
			setErroEmail('')
			if (emailValue === userData.email) emailEquals = true;
		}
	
		if (!nomeValue || nomeValue.trim() === '') {
			setErroNome('Preencha seu nome corretamente');
			setLoading(false)
			return false;
		} else {
			setErroNome('');
			if (nomeValue === userData.name) nameEquals = true;
		}

	
		if (!phoneValue || phoneValue.trim() === '' || !(phoneValue.length === 11)) {
			setErroTelefone('Preencha seu telefone corretamente')
			setLoading(false)
			return false;
		} else {
			setErroTelefone('');
			if (phoneValue === userData.phone) phoneEquals = true;
		}

		if(imageDatabase === imageUrl) urlEquals = true

		if (nameEquals && phoneEquals && emailEquals && urlEquals) {
			setModalErroEquals(true);
			setLoading(false)
			return false;
		}


	
		updateUser();
	};
	
	const updateUser = async () => {
		try {
			if(userData!==null){
				const id = userData.id;
				const token = await AsyncStorage.getItem('access_token');

				let newUserData = {
					name: nomeValue,
					username: "Vetor",
					email: emailValue,
					phone: phoneValue
				};

				const response = await axios.put(`https://${valueIp}/user/${id}/update-user`, newUserData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				await uploadImage(id, imageUrl);
				setUserData(response.data)
				setLoading(false)
				setModalSuccess(true);
			}
		} catch (error) {
			setLoading(false)
			if (error.response) {
				if (error.response && error.response.status === 409) {
							const duplicatedFields = error.response.data.fields;
							console.log(duplicatedFields)
							if (duplicatedFields.includes('E-mail')) {
									setModalError('E-mail já cadastrado. Por favor, escolha outro.');
							} else if (duplicatedFields.includes('Telefone')) {
									setModalError('Telefone já cadastrado. Por favor, escolha outro.');
							} else {
									console.log('Erro ao enviar dados:', error);
									setModalError('Erro ao atualizar usuário. Por favor, tente novamente.');
							}
					} else {
							console.log('Erro ao enviar dados:', error);
							setModalError('Erro ao atualizar usuário. Por favor, tente novamente.');
					}
			} else {
					if (error.message && error.message.includes('Network Error')) {
						setModalError('Erro de conexão. Verifique sua conexão com a internet.');
					}	else {
						console.log('Erro ao enviar dados:', error);
						setModalError('Erro ao cadastrar usuário.');
					}
			}
		}
	}
	
	useEffect(() => {
		if (userData) {
			setNomeValue(userData.name);
			setEmailValue(userData.email);
			setPhoneValue(userData.phone);
			getUserPhoto();
		}
	}, [userData]);

	

	return(
		<View style={styles.container}>
			<View style={styles.container_top}>
				<TouchableOpacity onPress={() => navigate.openDrawer()}>
          <SvgXml xml={svgs.svgDrawer} width={30} height={23} />
        </TouchableOpacity>

				<TouchableOpacity onPress={() => navigate.goBack()}>
          <SvgXml xml={svgs.svgBack} width={41} height={33} />
        </TouchableOpacity>
			</View>

			<View style={styles.container_user}>
				<View style={styles.container_input_image}>
					<View style={styles.container_image}>
						<SvgXml xml={svgs.svgGradient} width="100%" height="100%" />
						{imageUrl === null && (
							<Image
								source={{uri: 'https://www.emath.be/uploads/7/3/9/1/73911267/published/no-profil.png?1608697745'}}
								style={{
									width: '95%',
									height: '95%',
									borderRadius: 50,
									position: 'absolute',
								}}
						/>)}


						{imageUrl !== null && (
							<Image
								source={{ uri: imageUrl}}
								style={{
									width: '95%',
									height: '95%',
									borderRadius: 50,
									position: 'absolute',
								}}
							/>)}
					</View>

					<TouchableOpacity style={styles.button_image} onPress={() => openImage()}>
						<SvgXml xml={svgs.svgImageButton} width={15} height={15}/>
					</TouchableOpacity>
				</View>

				<View style={{width:'55%'}}>
					<Text numberOfLines={3} style={styles.text_user}>{userData ? userData.name : 'Carregando...'}</Text>
				</View>
			</View>

			{loading && <ActivityIndicator message='Analisando os dados...'/>}
			{modalError && <ModalMessage text={modalError} onClose={()=>setModalError('')}/>}
			{modalSuccess && <ModalMessage text='Atualização feita com sucesso!!' onClose={()=>setModalSuccess(false)} type='sucess'/>}
			{modalVisible && <ModalConfirm text='Deseja atualizar os dados?' onClose={(confirm)=>{if(confirm){validar()}else setModalVisible(false) }}/>}
			{erroModalEquals && <ModalMessage text='Nenhum dado foi alterado' onClose={()=>setModalErroEquals(false)}/>}

			<View style={styles.container_form}>
				<View style={{width:'60%', paddingTop: '10%'}}>
					<KeyboardAwareScrollView 
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					showsVerticalScrollIndicator={false}
					>	
						<View style={styles.container_input}>
							<Text style={styles.label_input}>Seu nome: </Text>
							<TextInput 
								style={styles.input} 
								value={nomeValue}
								onChangeText={(value) => setNomeValue(value)}
								onFocus={()=>setErroNome('')}/>
						</View>
						{erroNome ? <Text style={styles.erroMessage}>{erroNome}</Text> : null}
						
						<View style={styles.container_input}>
							<Text style={styles.label_input} >Seu email: </Text>
							<TextInput 
								keyboardType='email-address'
								style={styles.input}
								value={emailValue}
								onChangeText={(value) => setEmailValue(value)}
								onFocus={()=>setErroEmail('')}/>
						</View>
						{erroEmail ? <Text style={styles.erroMessage}>{erroEmail}</Text> : null}

						<View style={styles.container_input}>
							<Text 
								style={styles.label_input}>Seu telefone: </Text>
							
							<MaskedTextInput
								mask="(99) 99999-9999"
								keyboardType="phone-pad"
								onChangeText={(text, rawText) => {
									setPhoneValue(rawText)
								}}
								value={phoneValue}
								style={styles.input}
								onFocus={()=>setErroTelefone('')}
							/>
						</View>
						{erroTelefone ? <Text style={styles.erroMessage}>{erroTelefone}</Text> : null}
						
						<View style={{width:'100%', alignItems:'center', paddingBottom:'10%'}}>
							<TouchableOpacity 
							 style={[
								styles.button,
								Platform.OS === 'android' ? styles.androidShadow: styles.iosShadow,
							]}
								onPress={() => setModalVisible(true)}>
								<Text style={styles.text_user}>Salvar</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAwareScrollView>
				</View>
			</View>
		</View>
	);
}