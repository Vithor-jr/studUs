import { 
	View,
	Text,
	ScrollView,
	Image,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function MapaMental(){
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<View style={{height:Dimensions.get('screen').height * 0.05}}/>
			<Subtitle title='O que é um mapa mental?'/>

			<Image
				style={styles.image_mapa_mental}
				source={require('../../../../../assets/images/MapaMental.png')}
			/>

			<Text style={{...styles.text_body, marginTop:10}}>
				O mapa mental é um método de organização e memorização que auxilia diretamente na melhora da performance nos estudos. A técnica foi desenvolvida para potencializar a capacidade do cérebro de armazenar diferentes conhecimentos e elaborar um sequenciamento das ideias.
			</Text>
			<Text style={{...styles.text_body, marginBottom:10}}>
				Em geral, o mapa mental é feito a partir de palavras-chave relacionadas ao tema central dos conteúdos que estão sendo estudados. Atualmente, há inúmeros aplicativos para montar um mapa mental online, mas ele também pode ser feito em papel.
			</Text>

			<Subtitle title='Como criar um mapa mental?'/>

			<Text style={styles.text_subtitle}>1. Defina o tema central</Text>
			<Text style={styles.text_body}>Antes de mais nada, você precisa entender quais são os seus objetivos com o mapa.
			A partir de seu objetivo, você já pode construir a sua ideia central. Ela vai ser o ponto central. Uma dica é utilizar conceitos simples e assertivos, para não desviar o foco do mapa.
			Você deve escrever o tema principal em letras grandes no centro do mapa. Para defini-lo, leve em consideração:
			<Text style={{...styles.text_body, color:'#6048AC'}}>sobre o que deve ser o mapa? qual é a sua finalidade? qual é o problema que você quer resolver?</Text>
			</Text>

			<Text style={styles.text_subtitle}>2. Defina a ferramenta que irá usar</Text>
			<Text style={styles.text_body}>Existem várias formas de fazer um mapa. Você pode usar ferramentas tecnológicas ou usar apenas uma caneta e um papel. se tiver canetas coloridas, também pode ficar organizado. Afinal, o mais importante é que o conteúdo fique firme.</Text>
			
			<Text style={styles.text_subtitle}>3. Escolha os subtópicos principais</Text>
			<Text style={styles.text_body}>Em seguida, comece a elencar os pontos mais importantes sobre o seu tema. Eles serão os subtópicos do mapa. Eles devem ajudar a começar a organizar as informações.</Text>
			<Text style={styles.text_body}>Escreva cada subtópico nas laterais do papel e puxe uma seta a partir do tema central. Se puder, utilize cores diferentes.</Text>
			
			<Text style={styles.text_subtitle}>4. Escreva tópicos que relacionem-se</Text>
			<Text style={{...styles.text_body}}>Agora é hora de explorar os subtópicos. Vá anotando todas as informações que se relacionam aos subtópicos. Utilize cores e setas para indicar os setores das informações. Você pode incluir quantas palavras-chave quiser. Não há limites na quantidade de tópicos e subtópicos.</Text>
			
			<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}