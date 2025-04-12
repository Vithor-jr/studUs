import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

export default function TristezaScreen(){

	return (
			<View style={styles.container}>
				<Text style={styles.title}>Oque é a tristeza?</Text>
				<Text style={styles.paragraph}>Trata-se de uma emoção que pode ser desencadeada por acontecimentos variados, como uma desilusão amorosa, problemas financeiros, traumas, descontentamento profissional/pessoal ou algum outro conflito interior.</Text>

				<Text style={styles.title}>Como falar sobre a tristeza?</Text>
				<Text style={styles.paragraph}>É muito importante se abrir e conversar sinceramente com uma pessoa de confiança nos momentos de tristeza. Muitas vezes, quando falamos sobre os nossos problemas, conseguimos enxergá-los de outras formas e até encontrar soluções.</Text>

				<Text style={styles.title}>Como combater a tristeza antes de se tornar uma doença?</Text>
				<Text style={styles.paragraph}>Para combater a tristeza e evitar doenças é importante adotar algumas mudanças. Afinal, não conseguimos mudar algo fazendo as mesmas coisas, da mesma forma. Isso envolve desde o reconhecimento desse sentimento até alterações em nossos hábitos, conforme comentamos a seguir.</Text>
					
				<Text style={styles.subtitle}>1.Reconheça que está triste</Text>
				<Text style={styles.paragraph}>Admitir que está sentindo tristeza é o primeiro passo para refletir sobre as possíveis causas e combater essa sensação.</Text>
				
				<Text style={styles.subtitle}>2.Entenda oque te deixou triste</Text>
				<Text style={styles.paragraph}>Ficar em silêncio e analisar para perceber o que pode ter levado a esse sentimento é fundamental. Assim, é possível entender a causa e se posicionar para a mudança.</Text>
					
				<Text style={styles.subtitle}>3.Defina objetivos para a sua vida</Text>
				<Text style={styles.paragraph}>Ter metas e objetivos impulsiona a sua vida, contribuindo para levantar-se a cada manhã com determinação e positivismo.</Text>
					
				<Text style={styles.subtitle}>4.Pratique atividades físicas</Text>
				<Text style={styles.paragraph}>O sedentarismo tem uma relação direta com a tristeza pela falta de movimentos do corpo. A atividade física ativa a circulação sanguínea e beneficia todo o organismo. O cérebro funciona melhor e a serotonina (hormônios da felicidade) é ativada</Text>
				
				<View style={styles.footer}/>
			</View>
    );
}