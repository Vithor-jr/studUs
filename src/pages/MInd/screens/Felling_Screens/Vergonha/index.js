import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

export default function VergonhaScreen(){
	return (
			<View style={styles.container}>
				<Text style={styles.title}>Oque é a vergonha?</Text>
				<Text style={styles.paragraph}>A vergonha é uma emoção que alerta e traz autoconsciência, indicando desconforto, arrependimento e uma sensação de indignidade. Ela sinaliza que as emoções não estão positivas. Pode ser desencadeada por eventos externos ou como resultado de falhas pessoais ao tentar alcançar metas ou padrões.</Text>

				<Text style={styles.title}>Como lidar com a vergonha?</Text>
				<Text style={styles.paragraph}>A vergonha em excesso pode ser considerada uma emoção tóxica, porque, na maioria dos casos, as pessoas tentam escondê-la e acabam se isolando. É como se a pessoa acreditasse que outras pessoas podem ver sua vergonha e se sentem ainda mais julgados. A seguir 5 maneiras de como lidar:</Text>
				
				<Text style={styles.subtitle}>1.Reconheça os seus medos</Text>
				<Text style={styles.paragraph}>A primeira forma de lidar, de forma mais saudável, com a vergonha é reconhecer seus limites, dificuldades e medos. Dessa maneira, seja honesto com você mesmo e conheça seus limites. É importante saber quais são suas limitações e quais são os medos que você pode superar. </Text>
				
				<Text style={styles.subtitle}>2.Revise Sua Primeira Infância</Text>
				<Text style={styles.paragraph}>É comum que o sentimento de vergonha seja reforçado no período da primeira infância. Afinal, os acontecimentos durante a infância tendem a ter bastante impacto na vida adulta. Portanto, por mais difícil que seja, é importante reconhecer que a vergonha não é sua culpa, que pode ter razões para esse sentimento.</Text>
					
				<Text style={styles.subtitle}>3.Tenha Autocompaixão E Amor Próprio</Text>
				<Text style={styles.paragraph}>O sentimento de vergonha pode trazer um autojulgamento muito forte. Já que quando você está envergonhado é difícil ser gentil e amoroso com si próprio. No entanto, a prática do amor próprio pode ajudar.</Text>
				<Text style={styles.paragraph}>Desse modo, fale consigo mesmo e trata-se da mesma forma que faria com um amigo querido ou um parente amado. Não seja cruel consigo e antes de se dizer qualquer coisa, pare e pense: eu falaria isso para alguém que eu amo?</Text>
					
				<Text style={styles.subtitle}>4.Revise Suas Relações Interpessoais</Text>
				<Text style={styles.paragraph}>Algumas pessoas podem perpetuar a vergonha alheia, por exemplo, pais que continuam a fazer comentários que fazem seus filhos se sentirem inferiores ou incompetentes. Isso pode levar a pessoa a não reconhecer suas próprias qualidades e a se envolver em relacionamentos que reforçam seus sentimentos negativos.</Text>
				<Text style={styles.paragraph}>É crucial buscar relacionamentos saudáveis e não permitir que qualquer relação que cause desconforto ou diminua a autoestima continue. Embora seja doloroso, é importante tomar a decisão de terminar relacionamentos tóxicos para superar sentimentos de vergonha.</Text>
				
				<Text style={styles.subtitle}>5.Busque Ajuda Psicológica</Text>
				<Text style={styles.paragraph}>A vergonha, em alguns casos, é um problema que não se resolve sozinho. Ainda, pode causar danos significativos na qualidade de vida. Nessas horas, você pode buscar ajuda de um profissional da Psicologia. Para aprender mais técnicas de como superar a vergonha procure ajuda psicológica. A psicoterapia pode ser uma forma de trabalhar essas questões e conseguir melhoras significativas.</Text>
				
				<View style={styles.footer}/>
			</View>
    );
}