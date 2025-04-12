import { 
	View,
	Text,
	ScrollView,
	Image,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function Feynman(){
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<View style={{height:Dimensions.get('screen').height * 0.05}}/>
			<Subtitle title='Oque é e como funciona?'/>

			<Image
				style={styles.image_feynman}
				source={require('../../../../../assets/images/Feynman_image.png')}
			/>

			<Text style={{...styles.text_body, marginTop:10}}>
			A Técnica Feynman é um método de aprendizado de 4 etapas criada pelo físico e Prêmio Nobel americano Richard Feynman, cuja ideia principal é pegar um conteúdo difícil de entender e tentar esclarecê-lo em sua mente, explicando-o como se estivesse conversando com uma criança. 
			</Text>

			<Text style={{...styles.text_body, marginVertical:10}}>
			Ao fazer isso, a pessoa é forçada a simplificar as ideias em sua mente e usar uma linguagem clara e concisa para fazer com que o assunto escolhido seja mais simples de entender.
			</Text>

			<Text style={{...styles.text_body, marginBottom:10}}>
			De acordo com Feynman, o segredo para dominar qualquer assunto complexo é muito simples: aprenda para que você possa explicá-lo a uma criança.
			</Text>

			<Subtitle title='Como funciona o Método?'/>

			<Text style={styles.text_subtitle}>1. Escolha um conceito</Text>
			<Text style={styles.text_body}>O primeiro passo é identificar um conceito que você deseja entender. Pode ser qualquer coisa, desde a teoria da relatividade até o Teorema de Pitágoras. Depois de escolher o tema, estude-o a fundo, usando recursos como livros didáticos, ferramentas on-line ou palestras. Nesse ponto, você não precisa dominar o tema completamente, apenas reunir informações suficientes para formar um entendimento básico.</Text>

			<Text style={styles.text_subtitle}>2. Ensine para uma criança imaginária</Text>
			<Text style={styles.text_body}>A segunda etapa é a parte mais importante: é hora de articular o que você aprendeu. Você precisa explicar o tópico escolhido como se estivesse ensinando a uma criança. Esse exercício força você a desmembrar as ideias complexas em partes mais simples e elementares. </Text>
			<Text style={styles.text_body}>Aqui não estamos falando para você simplificar o assunto, mas, sim, pensar se você pode explicar o conceito escolhido para uma criança de 12 anos, por exemplo. </Text>
			<Text style={styles.text_body}>Para isso, elimine o jargão técnico e a linguagem complexa, usando apenas palavras que uma criança compreenderia.  </Text>
			
			<Text style={styles.text_subtitle}>3. Identifique as lacunas e leia de novo.</Text>
			<Text style={styles.text_body}>Ao tentar simplificar o conceito, você inevitavelmente encontrará lacunas em seu entendimento — aquelas áreas em que você trava ou acaba usando uma linguagem complexa, porque seu conhecimento não é tão claro ou sólido. Isso é uma parte fundamental do processo. </Text>
			<Text style={styles.text_body}>Ao tentar explicar um conceito em termos simples, você verá rapidamente onde tem um bom entendimento dele. Você também será capaz de identificar instantaneamente suas áreas problemáticas, porque serão as áreas em que você trava ou acaba recorrendo ao uso de linguagem e terminologia complexas. </Text>
			<Text style={styles.text_body}>A Técnica Feynman trata tanto de identificar o que você não sabe quanto de consolidar o que você sabe. Quando essas lacunas de compreensão surgirem, volte e releia, pesquise e reaprenda o material original até se sentir mais ou menos confiante em sua explicação e puder corrigir essas lacunas de conhecimento. Em seguida, tente ensinar o conceito ao seu “filho” mais uma vez. </Text>
			<Text style={styles.text_body}>Conforme você se acostuma com a técnica, pode desenvolver um instinto melhor para perceber onde estão suas maiores dificuldades de compreensão, o que é mais importante estudar e onde você deve focar seus esforços da próxima vez.</Text>
			
			<Text style={styles.text_subtitle}>4. Reveja e Simplifique</Text>
			<Text style={styles.text_body}>Nessa etapa, você já entendeu o assunto bem o suficiente para explicá-lo de forma simples. Mas ainda é possível simplificar a sua explicação ainda mais, traçando paralelos com algo familiar ou introduzindo uma analogia que torne o conceito mais fácil de associar.  </Text>
			<Text style={styles.text_body}>Essa fase consolida sua compreensão e permite que você se conecte com o conteúdo em um nível mais profundo. Aqui você pode perceber a diferença entre o aprendizado mecânico, quando você lê a matéria e decora os conceitos, e a verdadeira compreensão do que foi estudado, usando a Técnica Feynman.  </Text>
			<Text style={styles.text_body}>Por meio dessas etapas, essa técnica incentiva o aprendizado ativo em vez da absorção passiva de informações. Sua força está em sua simplicidade. </Text>
			<Text style={styles.text_body}>Ao ensinar um conceito a outras pessoas, você reforça sua compreensão, consolida seu conhecimento e desenvolve um senso intuitivo do assunto. </Text>
			

			<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}