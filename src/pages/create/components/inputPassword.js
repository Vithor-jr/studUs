import { useState, useEffect } from 'react'
import {
	View,
	TextInput,
	Text,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../styles'

export default function InputPassword({  placeholder, value, setValue, title, error, onValidationChange}) {
	const [focus, setFocus] = useState(false)
	const [visiblePassword, setVisiblePassword] = useState(false)
	const [passwordChanged, setPasswordChanged] = useState(false)

	const [minValue, setMinValue] = useState(false)
	const [minSpecialCaracter, setMinSpecialCaracter] = useState(false)
	const [minUpperCaseCaracter, setMinUpperCaseCaracter] = useState(false)
	const [minLowerCaseCaracter, setMinLowerCaseCaracter] = useState(false)
	const [minNumericCaracter, setMinNumericCaracter] = useState(false)
	const [requirementsMet, setRequirementsMet] = useState(0)

	useEffect(() => {
		if (onValidationChange) {
			onValidationChange({
				minLength: minValue,
				specialChar: minSpecialCaracter,
				upperCase: minUpperCaseCaracter,
				lowerCase: minLowerCaseCaracter,
				numeric: minNumericCaracter,
				requirementsMet: requirementsMet
			})
		}
	}, [minValue, minSpecialCaracter, minUpperCaseCaracter, minLowerCaseCaracter, minNumericCaracter, requirementsMet])

	function Validation(password) {
		const minLength = password.length > 7;
		const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		const upperCase = /[A-Z]/.test(password);
		const lowerCase = /[a-z]/.test(password);
		const numeric = /[0-9]/.test(password);

		setMinValue(minLength);
		setMinSpecialCaracter(specialChar);
		setMinUpperCaseCaracter(upperCase);
		setMinLowerCaseCaracter(lowerCase);
		setMinNumericCaracter(numeric);

		let metCount = 0;
		if (minLength) metCount++;
		if (specialChar) metCount++;
		if (upperCase) metCount++;
		if (lowerCase) metCount++;
		if (numeric) metCount++;

		setRequirementsMet(metCount);
	}

	return (
		<View style={styles.container_input}>
			{title && 
				<Text 
					style={{...styles.label_input, color: error || (passwordChanged && !focus && requirementsMet !== 5) ? "#E84D35" : "black"}}>
						{title}
				</Text>}

			<View
				style={{
					...styles.input,
					borderColor: error || (passwordChanged && !focus && requirementsMet !== 5) ? "#E84D35" : "#3B267B",
				}}>
				<TextInput
					style={{ flex: 1, fontFamily: 'Varela-Round', fontSize: 12 }}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					secureTextEntry={!visiblePassword}
					placeholderTextColor='rgba(0,0,0,0.4)'
					placeholder={placeholder}
					value={value}
					onChangeText={(value) => {
						setValue(value)
						setPasswordChanged(true)
						Validation(value)
					}}
				/>

				<TouchableOpacity
					style={{ alignItems: 'center', marginStart: 5, justifyContent: 'center' }}
					onPress={() => setVisiblePassword(!visiblePassword)}>
					<Icon name={visiblePassword ? 'eye' : 'eye-slash'} size={20} color="rgba(0, 0, 0, 0.5)" />
				</TouchableOpacity>
			</View>

			{error && <Text style={styles.error_text}>{error}</Text>}

			{focus &&
				<View style={styles.container_instructions}>
					<View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
						{minValue ? <Icon name='check' color='#47AF39' /> : <Icon name='times' color='#E84D35' />}
						<Text
							style={{
								...styles.text_instructions_password,
								color: minValue ? "#47AF39" : "#E84D35"
							}}>Pelo menos 8 caracteres</Text>
					</View>

					<View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
						{minSpecialCaracter ? <Icon name='check' color='#47AF39' /> : <Icon name='times' color='#E84D35' />}
						<Text
							style={{
								...styles.text_instructions_password,
								color: minSpecialCaracter ? "#47AF39" : "#E84D35"
							}}>Pelo menos 1 caractere especial</Text>
					</View>

					<View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
						{minUpperCaseCaracter ? <Icon name='check' color='#47AF39' /> : <Icon name='times' color='#E84D35' />}
						<Text
							style={{
								...styles.text_instructions_password,
								color: minUpperCaseCaracter ? "#47AF39" : "#E84D35"
							}}>Pelo menos 1 caractere maiúsculo</Text>
					</View>

					<View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
						{minLowerCaseCaracter ? <Icon name='check' color='#47AF39' /> : <Icon name='times' color='#E84D35' />}
						<Text
							style={{
								...styles.text_instructions_password,
								color: minLowerCaseCaracter ? "#47AF39" : "#E84D35"
							}}>Pelo menos 1 caractere minúsculo</Text>
					</View>

					<View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
						{minNumericCaracter ? <Icon name='check' color='#47AF39' /> : <Icon name='times' color='#E84D35' />}
						<Text
							style={{
								...styles.text_instructions_password,
								color: minNumericCaracter ? "#47AF39" : "#E84D35"
							}}>Pelo menos 1 caractere numérico</Text>
					</View>
				</View>
			}
		</View>
	)
}
