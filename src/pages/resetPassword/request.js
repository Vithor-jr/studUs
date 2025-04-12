import React, {useState, useEffect, useRef} from "react";
import { View, 
	Text, 
	TouchableOpacity,
	Image,
	TextInput,
	Platform,
	Modal,
	Animated
} from "react-native";
import ActivityIndicator from "../Components/ActivityIndicator";
import Svg, { Path } from 'react-native-svg';
import { styles as estilos } from '../resetPassword/styles'; // Renomeando para evitar conflito
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from '@react-navigation/native'
import axios from "axios";
import ModalMessage from "../Home/Components/ModalMessage";
import Ip from "../../values/ip";

const valueIp = Ip()

export default function Request({ navigation }) {
	const navegacao = useNavigation();
	const [email, setEmail] = useState("");
  const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false)
	const riseAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(
      riseAnim,
      {
        toValue: 0, 
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  }, [riseAnim]);

  const validarEmail = () => {
		const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let isValid = true; 

    if (!regexEmail.test(email)) {
      setError('Por favor, insira um email válido');
      isValid = false;
    } else {
      setError('');
    }

    return isValid;
  };

	const enviarEmail = async () => {
		setIsLoading(true)
		if (validarEmail()) {
			try {
				console.log('Enviando requisição para redefinir senha...');
				const response = await axios.post(`https://${valueIp}/request-password-reset`, {
					email: email,
				});
	
				console.log(response.status);
				console.log(response.data.error)
	
				if (response.data.error === undefined) {
					setIsLoading(false)
					navegacao.navigate('UpdatePassword', { email });
				} else {
					setIsLoading(false)
					setError(response.data.error);
				}
			} catch (error) {
				setIsLoading(false)
				setError('Erro ao enviar o email:', error.message);
			}
		}
	};
	
  return (
    <View style={estilos.container}>
      {/* Cabeçalho personalizado */}
      <View style={estilos.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
					<Svg xmlns="http://www.w3.org/2000/svg" fill="#6048AC" viewBox="0 0 24 24" strokeWidth="2" stroke="white" width="30" height="30" style={{ paddingHorizontal: 10 }}>
          	<Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        	</Svg>
        </TouchableOpacity>
      </View>

			<Animated.View style={{...estilos.subcontainer, transform: [{translateY: riseAnim}]}}>
				<KeyboardAwareScrollView behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<View style={{alignItems:'center', width: '100%', paddingHorizontal:'15%'}}>
						<Text style={estilos.title}>Esqueceu a senha?</Text>
						<Image
							style={{width: 250, height: 166}}
							source={require("../../../assets/images/resetimage.png")}
						/>
						<Text style={estilos.paragraph}>
							Digite seu e-mail no campo abaixo e lhe enviaremos uma nova senha.
						</Text>

						<TextInput
							style={estilos.input}
							placeholder='E-mail'
							keyboardType='email-address'
							placeholderTextColor="rgba(0, 0, 0, 0.4)"
							onChangeText={text => setEmail(text)}
              value={email}
						/>
						{error && <ModalMessage text={error} onClose={()=> setError('')}/>}
						{isLoading && <ActivityIndicator message='Aguarde...'/>}
						<TouchableOpacity style={estilos.button} onPress={() => {enviarEmail()}}>
							<Text style={estilos.textButton}>Redefinir Senha</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</Animated.View>
    </View>
  );
}
