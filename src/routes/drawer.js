import { BottomTabNavigator } from './bottom';
import Grafics from '../pages/Grafics';
import Timer from '../pages/timer';
import RoutesEditais from '../pages/Editais/routes';
import Categories from '../pages/Categories';
import UpdateUser from '../pages/Update';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, useDrawerStatus} from '@react-navigation/drawer';
import { SvgXml } from 'react-native-svg';
import { View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, { useState, useEffect} from 'react';

import Ip from '../values/ip';
import axios from 'axios';
import svgs from '../../assets/svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import { useUserContext } from '../context/UserContext';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#6048AC',
          width: '60%',
          borderTopRightRadius: 70,
          borderBottomRightRadius: 70,
          marginBottom: 10,
          marginTop: 10,
        },
				swipeEnabled: false
      }}
      drawerContent={(props) => <DrawerContent {...props}/>}
			initialRouteName='Home'
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Drawer.Screen name="UpdateUser" component={UpdateUser} options={{ headerShown: false }} />
			<Drawer.Screen name="Grafics" component={Grafics} options={{ headerShown: false }} />
			<Drawer.Screen name="Timer" component={Timer} options={{ headerShown: false }} />
			<Drawer.Screen name="Editais" component={RoutesEditais} options={{ headerShown: false }} />
			<Drawer.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
		</Drawer.Navigator>
  );
};


const DrawerContent = ({navigation}) => {
	const { userData, setUserData } = useUserContext();
	const [imageUrl, setImageUrl] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const isDrawerOpen = useDrawerStatus() === 'open';
	const valueIp = Ip()

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
	
	useEffect(() => {
		if (isDrawerOpen && userData && userData.id) {
			getUserPhoto();
		}
	}, [isDrawerOpen, userData]);
	
	const handleLogout = async () => {
		await AsyncStorage.removeItem('access_token');
		setModalVisible(false);
		setUserData(null);
		navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
	};
	

  return (
    <DrawerContentScrollView>
			<View style={{marginVertical:20, borderRadius:50}}>
				<View>
					<View style={{ width: "100%", alignItems: 'center', justifyContent: 'center', gap:5, borderBottomColor: 'rgba(255, 255, 255, 0.18)', borderBottomWidth: 1, paddingBottom:20}}>
						<View style={{width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}>
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
								source={{uri: imageUrl}}
								style={{
									width: '95%',
									height: '95%',
									borderRadius: 50,
									position: 'absolute',
								}}
							/>)}
						</View>

						<Text style={{color: '#FFF', fontFamily: 'Varela-Round', fontSize: 15, width:'80%', textAlign:'center'}}>
							{userData ? `${userData.name}` : 'Carregando...'}
						</Text>

						<TouchableOpacity>
							<Text 
								style={{color: '#FFF', fontFamily: 'Varela-Round', fontSize: 10, borderWidth: 1, borderColor: 'white', borderRadius:20, paddingHorizontal:7}}
								onPress={() => navigation.navigate('UpdateUser')}
							>
								editar perfil
							</Text>
						</TouchableOpacity>
					</View>
					
					<View style={{paddingEnd:20, marginTop:30}}>
							<DrawerItem
								label={() => (
									<View style={styles.button_drawer}>
										<SvgXml xml={svgs.svgIconHomeActive} width={20} height={20}/>
										<Text style={{ color: 'white', fontFamily: 'Varela-Round', fontSize: 15, marginStart:10 }}>Home</Text>
									</View>
								)}
								onPress={() => navigation.navigate('Home')}
							/>

							<DrawerItem
								label={() => (
									<View style={styles.button_drawer}>
										<SvgXml xml={svgs.svgIconGrafics}/>
										<Text style={{ color: 'white', fontFamily: 'Varela-Round', fontSize: 15, marginStart:10 }}>Gráficos</Text>
									</View>
								)}
								onPress={() => navigation.navigate('Grafics')}
							/>

							<DrawerItem
								label={() => (
									<View style={styles.button_drawer}>
										<SvgXml xml={svgs.svgIconTemporizador}/>
										<Text style={{ color: 'white', fontFamily: 'Varela-Round', fontSize: 15, marginStart:10 }}>Temporizador</Text>
									</View>
								)}
								onPress={() => navigation.navigate('Timer')} 
							/>

							<DrawerItem
								label={() => (
									<View style={styles.button_drawer}>
										<SvgXml xml={svgs.svgIconCategorias}/>
										<Text style={{ color: 'white', fontFamily: 'Varela-Round', fontSize: 15, marginStart:10 }}>Categoria</Text>
									</View>
								)}
								onPress={() => navigation.navigate('Categories')}
							/>

							<DrawerItem
								label={() => (
									<View style={styles.button_drawer}>
										<SvgXml xml={svgs.svgEditais}/>
										<Text style={{ color: 'white', fontFamily: 'Varela-Round', fontSize: 15, marginStart:10 }}>Edital e assuntos</Text>
									</View>
								)}
								onPress={() => navigation.navigate('Editais')}
							/>
					</View>
				</View>

				<View style={{marginTop:'80%'}}>
					<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								setModalVisible(!modalVisible);
								console.log(modalVisible)
							}}
						>
							<View style={styles.modalContainer}>
								<View style={styles.modalContent}>
									<View style={styles.errorIconContainer}>
										<Icon name="exclamation-circle" size={30} color="red" />
									</View>
									<Text style={styles.modalText}>Deseja sair de sua conta?</Text>

									<View style={{...styles.container_button, justifyContent:"space-between", paddingHorizontal:'10%'}}>
										<TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button_canceled}>
											<Text style={styles.modalButton}>Cancelar</Text>
										</TouchableOpacity>
					
										<TouchableOpacity onPress={handleLogout} style={styles.button_logout}>
											<Text style={styles.modalButton}>Sair</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
					</Modal>

					<TouchableOpacity 
						style={{flexDirection:'row', gap:5, alignItems:'center', marginStart:20}}
						onPress={() => setModalVisible(true)}
					>
						<SvgXml xml={svgs.svgLogout} width={25} height={25}/>
						<Text style={{color:'white', fontFamily:'Varela-Round', fontSize: 15}}>Sair do app</Text>
					</TouchableOpacity>
			</View>
		</View>
	 </DrawerContentScrollView>
  );
};