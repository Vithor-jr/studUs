import { 
	View,
	Text,
	ScrollView,
	Image,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function Robinson(){
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<View style={{height:Dimensions.get('screen').height * 0.05}}/>

			<Subtitle title='O que é o método Ronbison?'/>

			<Text style={{...styles.text_body, marginVertical:10}}>
			O método de estudo Robinson vem sendo considerado útil em muitas universidades americanas por considerar várias etapas para o estudo. Especialistas o definem através da sigla EPL2R, que abrange os momentos fundamentais do aprendizado:
				<Text style={{...styles.text_body, color: '#6048AC' }}> explorar</Text>,
				<Text style={{...styles.text_body, color: '#6048AC' }}> perguntar</Text>,
				<Text style={{...styles.text_body, color: '#6048AC' }}> ler</Text>,
				<Text style={{...styles.text_body, color: '#6048AC' }}> rememorar </Text>e
				<Text style={{...styles.text_body, color: '#6048AC' }}> repassar</Text>.
			</Text>

			<Image
				style={styles.image_robinson}
				source={require('../../../../../assets/images/GirlStudyingRobinson.png')}
			/>

			<Text style={styles.text_subtitle}>1. Explorar:</Text>
			<Text style={{...styles.text_body}}>O primeiro passo se refere mais ao estudo de um livro-texto, seja um didático ou um romance (como da lista de obras obrigatórias, por exemplo). Consiste realmente em explorar aquela obra: quais são as finalidades do autor? O que ele quis passar com aquele conteúdo? O método considera também que se deve observar a obra como um todo. Em resumo, o mais importante na primeira etapa é descobrir o livro e o seu conteúdo, o assunto que você estiver estudando, deixando a curiosidade levar.</Text>

			<Text style={styles.text_subtitle}>2. Perguntar:</Text>
			<Text style={{...styles.text_body}}>Após a leitura geral do texto, deve-se elencar dúvidas e perguntas que não ficaram claras. É este o momento de dialogar com a obra ou com o conteúdo que se está estudando, elaborando questões que ficam suspensas. Teve dúvidas sobre algum tópico da matéria? É essa a hora de anotar tudo e levar ao professor na próxima aula. O importante é não receber passivamente as informações: deve-se questionar tudo que for possível, desenvolva senso crítico.</Text>

			<Text style={styles.text_subtitle}>3. Ler:</Text>
			<Text style={{...styles.text_body}}>No caso, ler consiste em analisar e resumir. Trata-se de uma leitura aprofundada e atenta, com finalidade de produzir pensamento crítico. O estudante deve saber identificar as partes fundamentais do texto e saber diferenciá-las das complementares. O modo ideal de seguir este passo é fazendo anotações, sublinhando e grifando partes importantes do texto e elaborar esquemas que possam ser usados na revisão.</Text>

			<Text style={styles.text_subtitle}>4. Rememorar:</Text>
			<Text style={{...styles.text_body}}>A quarta etapa deve ser aplicada ao fim de cada sessão de estudo, ou de cada mudança de capítulo. O estudante deve relembrar tudo que foi estudado, fazendo um pequeno resumo mental e anotando-o no papel. A intenção é fixar o que está solidificado e identificar pequenas lacunas que ainda estejam evidentes, como algum detalhe que não ficou totalmente esclarecido e dúvidas que ainda precisem ser sanadas.</Text>

			<Text style={styles.text_subtitle}>5. Repassar:</Text>
			<Text style={{...styles.text_body}}>Repassar consiste em uma análise mais completa do que foi estudado. Vale pegar todos os resumos, anotações e mapas mentais produzidos, para checar se está tudo em ordem. Procure a ajuda de colegas nessa etapa, dicutindo com eles os temas para fazer uma verificação do que foi aprendido e, possivelmente, levantando mais tópicos para discussão.</Text>

			<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}