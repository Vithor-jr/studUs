import { 
	View,
	Text,
	ScrollView,
	Dimensions,
	Image,
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function AutoExplicativo(){
	const passos = [
		{
			label:'escolha o material:',
			information:' pegue o conteúdo que você quer estudar;'
		},
		{
			label:'leia ou assista:',
			information:' dê uma boa lida no material ou assista ao vídeo, prestando atenção nos detalhes;'
		},
		{
			label:'explique com suas palavras:',
			information:' agora, se imagine ensinando o que aprendeu para alguém que não sabe nada do assunto. Fale em voz alta ou escreva suas explicações;'
		},
		{
			label:'detalhes importantes:',
			information:' enquanto se explica, foque nos detalhes mais importantes. Isso ajuda a fixar o conhecimento na sua cabeça.'
		},
	]
	
	const renderInformationsList = (items) => {
		return items.map((item, index) => (
				<View key={index} style={styles.container_list}>
						<Text style={{...styles.text_list, color:'#6048AC'}}>•</Text>
						<Text style={{...styles.text_list, width:Dimensions.get('window').width - 75}}>
							<Text style={{...styles.text_list, color:'#6048AC'}}>{item.label}</Text>
							{item.information}
						</Text>
				</View>
		));
	}
	
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
				<View style={{height:Dimensions.get('screen').height * 0.05}}/>
		
				<Subtitle title='O que é e como funciona?'/>

				<Image
					style={styles.image_explicativo}
					source={require('../../../../../assets/images/VectorComunication.png')}
				/>

				<Text style={{...styles.text_body, marginTop:10}}>
					A técnica de autoexplicação é uma maneira muito boa de estudar que vai além daquela repetição chata. É quando você explica as coisas que está aprendendo com suas próprias palavras. Isso ajuda você a entender melhor e lembrar mais das coisas.
				</Text>

				<Text style={{...styles.text_body, marginTop:10}}>
					Imagine que você está ensinando algo para um amigo. Quando você faz isso, precisa entender direitinho o assunto, não é? É exatamente isso que a autoexplicação faz com você. Você se torna um professor de você mesmo!
				</Text>

				<Text style={{...styles.text_body, marginVertical:10}}>
					O mais interessante é que, ao explicar para si, você percebe o que já sabe e também o que precisa aprender mais. Isso faz o seu cérebro trabalhar mais e ajuda você a aprender de verdade.
				</Text>

				<Subtitle title='Quais as vantagens desse método?'/>

				<Text style={styles.text_subtitle}>1. Entender de verdade</Text>
				<Text style={{...styles.text_body}}>
					Quando você explica algo com suas palavras, você realmente entende o assunto. Não é só decorar, é entender mesmo, e ao mais importante: aprender o conteúdo.
				</Text>

				<Text style={styles.text_subtitle}>2. Memória forte</Text>
				<Text style={{...styles.text_body}}>
					Como você está fazendo seu cérebro trabalhar para explicar, as informações ficam gravadas na sua memória de um jeito mais firme.
				</Text>

				<Text style={styles.text_subtitle}>3. Identificar dúvidas</Text>
				<Text style={{...styles.text_body}}>
					Ao aplicar a técnica, você vai perceber onde ainda tem dúvidas. E isso é ótimo porque mostra o que você precisa revisar e aprender melhor, adquirindo um parâmetro para oque priorizar mais na hora de revisar.
				</Text>

				<Text style={styles.text_subtitle}>4. Aprender mais rápido</Text>
				<Text style={{...styles.text_body}}>
					A autoexplicação faz você aprender mais rápido e com mais qualidade. Ou seja, você aproveita melhor o seu tempo de estudo.
				</Text>

				<Text style={styles.text_subtitle}>5. Confiança</Text>
				<Text style={{...styles.text_body, marginBottom:10}}>
					Quando você percebe que consegue explicar algo, sua confiança aumenta. Isso é ótimo para enfrentar a prova sem medo.
				</Text>

				<Subtitle title='Como aplicar esse método?'/>
				
				<View style={{marginTop:10}}>
					{renderInformationsList(passos)}
				</View>
				
				<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}