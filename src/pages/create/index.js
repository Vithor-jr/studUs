import { useState, useRef, useEffect } from 'react'
import {
	View,
	Text,
	Animated,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

import InputPassword from './components/inputPassword'
import Input from './components/Input'
import ModalMessage from '../Home/Components/ModalMessage'
import ActivityIndicator from '../Components/ActivityIndicator'

import { useUserContext } from '../../context/UserContext'
import axios from 'axios'
import Ip from '../../values/ip'

export default function Create() {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [cellphone, setCellphone] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const {setUserData} = useUserContext()
	const [modalError, setModalError] = useState('')
	const [modalSucess, setModalSucess] = useState('')
	const [errors, setErrors] = useState({})

	const [isLoading, setIsLoading] = useState(false)

	const valueIp = Ip()
	const navigation = useNavigation()
	const riseAnim = useRef(new Animated.Value(500)).current;

	const [passwordValidation, setPasswordValidation] = useState({
		minLength: false,
		specialChar: false,
		upperCase: false,
		lowerCase: false,
		numeric: false,
		requirementsMet: 0
	})
	
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

	function Validar() {
		setIsLoading(true)
		const newErrors = {}
		
		if (!name) newErrors.name = "Nome é obrigatório"

		if (!username) newErrors.username = "Nome de usuário é obrigatório"

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!email) newErrors.email = "E-mail é obrigatório"
		else if (!emailRegex.test(email)) newErrors.email = "E-mail inválido"

		if (!cellphone) newErrors.cellphone = "Telefone é obrigatório"
		else if (cellphone.length < 11) newErrors.cellphone = "Telefone inválido"

		if (!password) newErrors.password = "Senha é obrigatória"
		else if (passwordValidation.requirementsMet !== 5) newErrors.password = "A senha não atende a todos os requisitos"

		if (password !== confirmPassword) newErrors.confirmPassword = "As senhas não conferem"
		
		if (Object.keys(newErrors).length === 0) {
			createUser()
		} else {
			setIsLoading(false)
		}

		setErrors(newErrors)
	}

	const createUser = async () => {
			try {
				console.log(name, username, cellphone, email, password)
					const response = await axios.post(`https://${valueIp}/user`, {
							name: name,
							username: username,
							phone: cellphone,
							email: email,
							password: password,
					});
					setUserData(response.data)
					setIsLoading(false)
					setModalSucess('Cadastro efetuado com sucesso!!')
			} catch (error) {
				console.log(error)
				if (error.response) {
					if (error.response && error.response.status === 409) {
								const duplicatedFields = error.response.data.fields;

								if (duplicatedFields.includes('E-mail')) {
										setModalError('E-mail já cadastrado. Por favor, escolha outro.');
										setIsLoading(false)
								} else if (duplicatedFields.includes('Telefone')) {
										setModalError('Telefone já cadastrado. Por favor, escolha outro.');
										setIsLoading(false)
								} else {
										setModalError('Erro ao cadastrar usuário. Por favor, tente novamente.');
										setIsLoading(false)
								}
						} else {
								setModalError('Erro ao cadastrar usuário. Por favor, tente novamente.');
								setIsLoading(false)
						}
				} else {
						if (error.message && error.message.includes('Network Error')) {
							setModalError('Erro de conexão. Verifique sua conexão com a internet.');
							setIsLoading(false)
						}	else {
							setModalError('Erro ao cadastrar usuário.');
							setIsLoading(false)
						}
				}
		}
};


	return (
		<View style={styles.container_screen}>
			<Animated.View style={{ ...styles.container_body, transform: [{ translateY: riseAnim }] }}>
				<ScrollView
					style={{ width: '100%', paddingTop: '10%' }}
					showsVerticalScrollIndicator={false}
				>
					<View style={{ width: '100%', alignItems: 'center', paddingBottom: '10%' }}>
						<Text style={styles.title}>Crie sua conta</Text>
						<Text style={styles.subtitle}>Cadastre-se</Text>

						<Input
							title='Nome: '
							placeholder=''
							keyboardType=''
							value={name}
							titleVisible={true}
							setValue={(value) => setName(value)}
							error={errors.name}
						/>

						<Input
							title='Nome de Usuário: '
							placeholder=''
							titleVisible={true}
							keyboardType=''
							value={username}
							setValue={(value) => setUsername(value)}
							error={errors.username}
						/>

						<Input
							title='E-mail: '
							titleVisible={true}
							placeholder='xxxx123@gmail.com'
							keyboardType='email-address'
							value={email}
							setValue={(value) => setEmail(value)}
							error={errors.email}
						/>

						<Input
							title='Telefone: '
							placeholder=''
							titleVisible={true}
							keyboardType='phone-pad'
							value={cellphone}
							setValue={(value) => setCellphone(value)}
							error={errors.cellphone}
						/>

						<InputPassword
							title='Senha: '
							placeholder='⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤'
							value={password}
							onValidationChange={(validation) => setPasswordValidation(validation)}
							setValue={(value) => setPassword(value)}
							error={errors.password}
						/>

						<Input
							title='Confirmar senha: '
							placeholder='⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤'
							value={confirmPassword}
							titleVisible={true}
							setValue={(value) => setConfirmPassword(value)}
							error={errors.confirmPassword}
						/>

						<TouchableOpacity style={styles.container_button} onPress={Validar}>
							<Text style={styles.button_label}>Confirmar</Text>
						</TouchableOpacity>

						<View style={{ flexDirection: 'row', marginTop: 10 }}>
							<Text style={{ fontFamily: 'Varela-Round', fontSize: 12, color: '#3B267B' }}>Já possui uma conta? </Text>
							<TouchableOpacity onPress={() => navigation.navigate('Login')}>
								<Text style={styles.font_button_login}>entre aqui</Text>
							</TouchableOpacity>
						</View>
					</View>
					
					{modalError !== '' && <ModalMessage  text={modalError} onClose={()=>setModalError('')}/>}
					{modalSucess !== '' && <ModalMessage  text={modalSucess} type='sucess' onClose={()=>{setModalSucess(''), navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}}/>}
					{isLoading && <ActivityIndicator message='Carregando dados...'/>}
					<View style={{height:20}}/>
				</ScrollView>
			</Animated.View>
		</View>
	)
}