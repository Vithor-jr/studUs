import React, { useState, useEffect } from 'react';
import { GiftedChat, InputToolbar, Bubble, MessageText} from 'react-native-gifted-chat';
import { 
	View, 
	TouchableOpacity,
	ImageBackground,
	Image,
	Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml} from 'react-native-svg';
import { styles as estilos, styles } from '../../styles';
import svgs from '../../../../../assets/svg';
import axios from 'axios';
import CircleAnimation from '../../circleAnimation';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';

export default function ChatMind(){
	const [messages, setMessages] = useState([]);
	const [isSending, setIsSending] = useState(false);
	const [actualMessage, setActualMessage] = useState('')

	const token = process.env.ACCESS_TOKEN
	const api = axios.create({
		baseURL: 'https://api.openai.com/v1',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

const onSend = (newMessages = []) => {
    if (isSending) return;
    setIsSending(true);

    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages[0]));
    setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: 'loading',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Assistant',
        },
    }));

    const userMessage = newMessages[0].text;
    const prompt = `O usuário disse: "${userMessage}"`;

    api.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Você é um assistente que fornece respostas focadas apenas nos aspectos emocionais das mensagens dos usuários.'
            },
            {
                role: 'user',
                content: prompt
            }
        ]
    })
    .then(response => {
        if (response && response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
            setActualMessage(response.data.choices[0].message.content);
        }
        setMessages(previousMessages => GiftedChat.append(previousMessages.filter(message => message._id !== 'loading'), {
            _id: Math.random(),
            text: response.data.choices[0].message.content,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Assistant',
            },
        }));
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        setIsSending(false);
    });
};
	
	const renderBubble = props => {
		if (props.currentMessage._id === 'loading') {
			return (
				<View style={{ gap: 5, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
					<Image source={require('../../../../../assets/images/eva.png')} style={{ width: 30, height: 30 }} />
					<View style={styles.bublle_loading}>
						<CircleAnimation />
					</View>
				</View>
			);
		}

		if (props.currentMessage.text.includes('```')) {
			return (
				<Bubble
					{...props}
					textStyle={{
						left:{
							fontSize:14,
							fontFamily:'Varela-Round'
						},
						right:{
							fontSize:14,
							fontFamily:'Varela-Round'
						}
					}}
					wrapperStyle={{
						left: {
							backgroundColor: '#E9E8E8',
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 15,
							borderTopRightRadius: 15,
							borderTopLeftRadius: 15,
							marginVertical: 10, 
							padding:7
						},
						right: {
							borderBottomLeftRadius: 15,
							borderTopRightRadius: 15,
							borderTopLeftRadius: 15,
							borderBottomRightRadius: 0,
							backgroundColor: '#6048AC',
							marginVertical: 10,
						},
					}}
					renderMessageText={props => {
						if (props.currentMessage.text.includes('```')) {
						const messageParts = props.currentMessage.text.split('```');
						const messageComponents = messageParts.map((part, index) => {
							if (index % 2 === 1) {
								const numberOfLines = part.split('\n').length;
								const numberOfCharacters = part.length;
								const charactersPerLine = 65;
								const additionalLines = Math.ceil(numberOfCharacters / charactersPerLine);

								var regex = /(\w+)/;
								var match = part.match(regex);
								var language = match ? match[1] : null;

								if (language) {
									part = part.replace(language, '').trim();
									console.log(part)
								}
								console.log(language);
								const totalLines = numberOfLines + additionalLines;
								const lineHeight = 15;
								const padding = 20; // ajuste este valor conforme necessário para contabilizar o preenchimento ou margem
	
								return (
									<View style={{borderRadius:20}} key={index}>
										<View style={{backgroundColor:'#6048AC', borderColor:'#6048AC', borderWidth:1, padding:10, borderTopEndRadius:20, borderTopStartRadius:20}}>
											<Text style={{fontFamily:'Varela-Round', color:'white'}}>{language}</Text>
										</View>
										<CodeEditor
											style={{
												width:260,
												fontSize: 12,
												inputLineHeight: lineHeight,
												highlighterLineHeight: lineHeight,
												height: totalLines * lineHeight + padding
											}}
											initialValue={part}
											readOnly={true}
											language={language}
											syntaxStyle={CodeEditorSyntaxStyles.a11yLight}
										/>
										<View style={{padding:10, backgroundColor:'#6048AC', borderColor:'#6048AC', borderWidth:1, borderBottomEndRadius:20, borderBottomStartRadius:20}}/>
									</View>
								);
							} else {
								return (
									<Text key={index} style={{fontSize:14, fontFamily:'Varela-Round', width:240}}>{part}</Text>
								);
							}
						});
						
						return <View>{messageComponents}</View>;
						}else {
							return <MessageText {...props}/>
						}
					}}
				/>
			);
		}

		return (
			<Bubble
				{...props}
				textStyle={{
					left:{
						fontSize:14,
						fontFamily:'Varela-Round'
					},
					right:{
						fontSize:14,
						fontFamily:'Varela-Round'
					}
				}}
				wrapperStyle={{
					left: {
						backgroundColor: '#E9E8E8',
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 15,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
						marginVertical: 10
					},
					right: {
						borderBottomLeftRadius: 15,
						borderTopRightRadius: 15,
						borderTopLeftRadius: 15,
						borderBottomRightRadius: 0,
						backgroundColor: '#6048AC',
						marginVertical: 10,
					},
				}}
				/>
		);
	};
	

	return (
		<View style={{flex:1, backgroundColor:'white'}}>
			<ImageBackground source={require('../../../../../assets/images/backgroundChatMind.jpeg')} opacity={0.7} resizeMode='contain' style={{flex:1}}>
					<GiftedChat
						renderAvatar={() => null}						
						messages={messages || []}
						onSend={newMessages => onSend(newMessages)}
						user={{
							_id: 1,
						}}
						textInputProps={{
							placeholder: 'Digite sua mensagem aqui...',
							placeholderTextColor: 'rgba(255, 255, 255, 0.60)',
							style: { color: 'white', width:'90%'},
						}}

						renderInputToolbar={props => (
								<InputToolbar
									{...props}
									containerStyle={{
										marginBottom:10,
										backgroundColor: '#6048AC',
										borderRadius: 20,
										paddingStart: 25,
										paddingEnd: 20,
										paddingVertical:7,
									}}			
								/>
						)}

						renderBubble={renderBubble}
						
						renderSend={(props) => {
							const {text, user, onSend} = props;
							return (
								<TouchableOpacity
									style={{height:'100%', justifyContent:'center', paddingStart:10}}
									disabled={isSending}
									onPress={() => {
										if (text && onSend) {
											onSend([{ text: text.trim(), user: user }], true);
										}
								}}>
									<SvgXml xml={svgs.svgSend} width={30}/>
								</TouchableOpacity>
							);
						}}
						listViewProps={{
							showsVerticalScrollIndicator: false,
							style: { backgroundColor: 'transparent'}
						}}
					/>
		</ImageBackground>

		</View>
	);
}