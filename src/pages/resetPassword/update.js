import React, {useState, useEffect, useRef} from "react";
import { 
	View, 
	Text, 
	TouchableOpacity,
	TextInput,
	Platform,
	Modal,
	Animated
} from "react-native";
import Svg, { Path } from 'react-native-svg';
import { styles as estilos } from '../resetPassword/styles';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import ModalMessage from "../Home/Components/ModalMessage";
import Ip from "../../values/ip";

import Input from "../create/components/Input";
import InputPassword from "../create/components/inputPassword";
import ActivityIndicator from "../Components/ActivityIndicator";

const valueIp = Ip();

export default function UpdatePassword({ navigation, route}) {
	const navegacao = useNavigation();
	const { email } = route.params;
	const [codigo, setCodigo] = useState("");
	const [error, setError] = useState('');
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
	const [errors, setErrors] = useState({})
	const [sucess, setSucess] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const [passwordValidation, setPasswordValidation] = useState({
		minLength: false,
		specialChar: false,
		upperCase: false,
		lowerCase: false,
		numeric: false,
		requirementsMet: 0
	})
	

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


  const validarRedefinicao = () => {
		setIsLoading(true)
		const newErrors = {}

		if (!codigo) newErrors.codigo = "Insira o código recebido por email"

		if (!novaSenha) newErrors.password = "Senha é obrigatória"
		else if (passwordValidation.requirementsMet !== 5) newErrors.password = "A senha não atende a todos os requisitos"

		if (novaSenha !== confirmarSenha) newErrors.confirmPassword = "As senhas não conferem"
		
		setErrors(newErrors)

		if (Object.keys(newErrors).length === 0) {
			return true
		} else {	
			setIsLoading(false)
			return false
		}
  };


	const redefinirSenha = async () => {
		if (validarRedefinicao()) {
			try {
				const response = await axios.post(`https://${valueIp}/reset-password`, {
					email: email,
					code: codigo,
					newPassword: novaSenha,
				});
	
				console.log(response.data)
				if (response.status === 200) {
					if (response.data.error) {
						console.log('reponse: ', response.data)
						setIsLoading(false)
						setError(response.data.error);
					} else {
						setIsLoading(false)
						setSucess('Senha redefinida com sucesso!')
					}
				} else {
					setIsLoading(false)
					console.log('Erro ao redefinir a senha:', response.data);
				}
			} catch (error) {
				setIsLoading(false)
				console.log('Erro ao redefinir a senha:', error.message);
				setError('Erro ao redefinir a senha. Tente novamente mais tarde.');
			}
		}
	};
	


  return (
    <View style={estilos.container}>
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
						<View style={{borderRadius: 10, backgroundColor: 'rgba(71, 175, 57, 0.30)', width:'100%', padding:'2%'}}>
							<Text style={estilos.paragraphTwo}>
								{`Um e-mail foi enviado para ${email} para finalizar a redefinição de senha.`}
							</Text>
							<MaterialIcons name="check-circle" size={30} color="#47AF39" />
						</View>

						<Text style={estilos.paragraphThree}>
							Por favor, insira no campo abaixo o código  de ativação que você recebeu por e-mail e redefina sua senha.
						</Text>

						<Input
							titleVisible={false}
							title=''
							placeholder='Código'
							keyboardType=''
							error={errors.codigo}
							value={codigo}
							setValue={(value)=>setCodigo(value)}
						/>

						<InputPassword
							title=''
							placeholder='Nova Senha'
							value={novaSenha}
							error={errors.password}
							onValidationChange={(validation) => setPasswordValidation(validation)}
							setValue={(value) => setNovaSenha(value)}
						/>

						
						<Input
							titleVisible={false}
							title='Confirmar senha: '
							placeholder='Repita a nova senha'
							keyboardType=''
							value={confirmarSenha}
							error={errors.confirmPassword}
							setValue={(value)=>setConfirmarSenha(value)}
						/>

						{error && <ModalMessage text={error} onClose={()=>setError('')}/>}
						{sucess && <ModalMessage text={sucess} type='sucess' onClose={()=>{setSucess(''), navegacao.navigate('Login')}}/>}
						{isLoading && <ActivityIndicator message='Analisando os dados...'/>}
						
						<TouchableOpacity style={estilos.button} onPress={redefinirSenha}>
							<Text style={estilos.textButton}>Redefinir</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</Animated.View>
    </View>
  );
}
