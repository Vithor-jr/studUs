import {
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../styles'
import { useState } from 'react'

export default function Input({titleVisible, error, keyboardType, placeholder, value, setValue, title}){
	const [visiblePassword, setVisiblePassword] = useState(false)

	return(
		<View style={styles.container_input}>
			{
				titleVisible && <Text style={{...styles.label_input, color:error ? "#E84D35" : "black"}}>{title}</Text>
			}
			
			{
				title === 'Confirmar senha: ' ?
					<View style={{...styles.input, borderColor: error ? "#E84D35" : "#3B267B"}}>
						<TextInput
							secureTextEntry={visiblePassword}
							placeholder={placeholder}
							placeholderTextColor='rgba(0, 0,0, 0.4)'
							value={value}
							onChangeText={(value)=>setValue(value)}
							style={{flex:1, fontFamily:'Varela-Round', fontSize:12}}
						/>
						<TouchableOpacity 
							style={{alignItems:'center', marginStart:5, justifyContent:'center'}}
							onPress={()=>setVisiblePassword(!visiblePassword)}>
							<Icon name={visiblePassword ? 'eye' : 'eye-slash'} size={20} color="rgba(0, 0, 0, 0.5)"/>
						</TouchableOpacity>
					</View> :
					
				keyboardType !== 'phone-pad' ? 
					<TextInput
						style={{...styles.input, borderColor: error ? "#E84D35" : "#3B267B"}}
						placeholderTextColor='rgba(0,0,0,0.4)'
						placeholder={placeholder}
						keyboardType={keyboardType}
						value={value}
						onChangeText={(value)=>setValue(value)}
					/>
				: 
					<MaskedTextInput
						mask="(99) 99999-9999"
						keyboardType="phone-pad"
						onChangeText={(text, rawText) => {
							setValue(rawText)
						}}
						value={value}
						style={{...styles.input, borderColor: error ? "#E84D35" : "#3B267B"}}
					/>
			}

			{error && <Text style={styles.error_text}>{error}</Text>}
		</View>
	)
}