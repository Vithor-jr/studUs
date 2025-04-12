import React, { useState, useEffect } from 'react';
import { GiftedChat, InputToolbar, Bubble, Avatar} from 'react-native-gifted-chat';
import { 
	View, 
	Text,
	TouchableOpacity,
	ImageBackground,
	Image,
	TextInput,
	ActivityIndicator,
	Keyboard,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml} from 'react-native-svg';
import axios from 'axios';
import Ip from '../../values/ip';
import { styles as estilos, styles } from './styles';
import svgs from '../../../assets/svg';
import ChatMind from './Chat/Chats/ChatMind';
import ChatStuds from './Chat/Chats/ChatStuds';
import ChatBar from './Chat/routes';


export default function Chat (){
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
					<TouchableOpacity onPress={() => navigate.openDrawer()}>
						<SvgXml xml={svgs.svgDrawer} width={20} height={17} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={estilos.containerChat}>
				<View style={estilos.container_text_top_chat}>
					<Text style={estilos.text_top_chat}>Professor</Text>
				</View>

				<View style={{flex:1, paddingHorizontal:'5%', marginBottom: isKeyboardVisible ? 0 : 100}}>
					<ChatStuds/>
				</View>
				
    </View>
  	</View>
	);
}

