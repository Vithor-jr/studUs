import React, { useState, useEffect } from 'react';
import { 
	View, 
	Text,
	TouchableOpacity,
	Image,
	Keyboard,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml} from 'react-native-svg';
import { styles as estilos, styles } from '../Home/styles'
import svgs from '../../../assets/svg';
import ChatMind from '../Home/Chat/Chats/ChatMind';


export default function ChatFriend (){
	const navigate = useNavigation();
	const [isKeyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
				setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


	return(
		<View style={{flex:1,  backgroundColor:'#6048AC'}}>
			<View style={[styles.container_top, {height: isKeyboardVisible ? '20%' : '15%'}]}>
				<View style={[styles.container_eva, {flexDirection: isKeyboardVisible ? 'row' : 'column'}, {gap: isKeyboardVisible ? 10: 0}]}>
						<Image source={require('../../../assets/images/eva.png')} style={{width:60, height:60}}/>
						<Text style={{color:'white', fontFamily:'Varela-Round', fontSize:20}}>Eva</Text>
				</View>

				<View style={{padding: 20 , flexDirection:'row',  flex:1}}>
					<TouchableOpacity onPress={() => navigate.goBack()}>
						<SvgXml xml={svgs.svgArrowWhite} width={30} height={30} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={estilos.containerChat}>
				<View style={estilos.container_text_top_chat}>
					<Text style={estilos.text_top_chat}>Amigo</Text>
				</View>

				<View style={{flex:1, paddingHorizontal:'5%'}}>
					<ChatMind/>
				</View>
				
    </View>
  	</View>
	);
}

