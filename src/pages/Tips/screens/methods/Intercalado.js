import { 
	View,
	Text,
	ScrollView,
	Image,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

const firtParagraph = `Basicamente, ele consiste em você estudar diferentes tópicos, em vez de ficar várias horas em apenas um. O objetivo de aplicar essa técnica é maximizar o foco, por meio do reinício do ciclo de atenção. Assim, o rendimento é maior.
Afinal, segundo dados mostrados na reportagem, o cérebro leva 23 minutos para voltar a atenção ao que estava fazendo, depois de uma distração. Aliás, como elas são muitas, especialmente nas redes sociais, aplicar uma técnica de concentração pode fazer a diferença no Enem.
Tornando-se bastante útil na hora de estudar muitos conteúdos.`

export default function Intercalado(){
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<View style={{height:Dimensions.get('screen').height * 0.05}}/>
			
			<Subtitle title='O que é e como funciona?'/>

			<Image
				style={styles.image_intercaldo}
				source={require('../../../../../assets/images/groupIntercalado.png')}
			/>

			<Text style={{...styles.text_body, marginVertical:15}}>{firtParagraph}</Text>
			<Subtitle title='Quais as vantagens desse método?'/>

			<Text style={styles.text_subtitle}>
				1. Produtividade
			</Text>

			<Text style={styles.text_body}>	Como produzir mais é uma questão discutida em todos os lugares hoje em dia, seja na escola, no trabalho ou em um projeto pessoal.</Text>
			<Text style={{...styles.text_body}}>
				Com o <Text style={{...styles.text_body, color:'#6048AC'}}>estudo intercalado</Text>, ela pode ser otimizada, já que você direciona o cérebro para renovar a atenção. Dessa forma, e com força de vontade, é possível resistir às distrações e dar conta de tudo o que planejou em seu calendário.
			</Text>

			<Text style={styles.text_subtitle}>
				2. Economia de tempo:
			</Text>

			<Text style={styles.text_body}>Você viu acima quanto tempo se perde para retomar o foco. Somando cada paradinha no Instagram a cada hora, vai notar que poderia ter terminado de estudar bem mais cedo.
			Portanto, uma das vantagens do estudo intercalado é economizar tempo com o que não é importante para aquele momento</Text>

			<Text style={styles.text_subtitle}>
				3. Fixação de conteúdo
			</Text>

			<Text style={styles.text_body}>Você vai precisar aprender e fixar diferentes conteúdos para o Enem. Nesse caso, o estudo intercalado ajuda porque o cérebro focado memoriza melhor o que está vendo ali. Afinal, se estiver lendo um texto, mas com a cabeça em outro lugar, nada vai adiantar passar horas com um mesmo material.</Text>


			<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}