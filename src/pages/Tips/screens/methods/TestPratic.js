import { 
	View,
	Text,
	ScrollView,
	Image,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function TestePratico(){
	return(
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<View style={{marginTop:50, width:'100%'}}>
				<Subtitle title='O que é o método Teste prático?'/>

				<Image
					style={{width:300, height:168, alignSelf:'center',marginTop:20}}
					source={require('../../../../../assets/images/GirlStudyingTestPratic.png')}
				/>

				<Text style={{...styles.text_body, marginTop:10}}>
					Uma das duas melhores maneiras de aprendizagem é realizar testes práticos sobre o que você está estudando. A pesquisa científica mostrou que realizar testes práticos tem o dobro de eficiência que as outras técnicas. Para quem está estudando especificamente para concursos, a recomendação é fazer muitos exercícios de provas anteriores. Não apenas do cargo para o qual está estudando, mas para qualquer tipo de questão.
				</Text>
			</View>
		</ScrollView>
	)
}