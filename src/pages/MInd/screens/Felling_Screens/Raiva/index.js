import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

export default function RaivaScreen(){
	return (
			<View style={styles.container}>
				<Text style={styles.title}>Oque é a raiva?</Text>
				<Text style={styles.paragraph}>A raiva é uma emoção humana fundamental, frequentemente vista como "negativa" devido ao seu desconforto e potencial de causar danos. No entanto, emoções desagradáveis têm um papel crucial, afastando indivíduos de situações perigosas ao longo da evolução humana. A raiva desencadeia a resposta de lutar ou fugir diante de ameaças, não apenas físicas, mas também em forma de confrontos verbais e conflitos.</Text>

				<Text style={styles.title}>Quais são as consequências?</Text>
				<Text style={styles.paragraph}>A raiva, como todas as emoções, pode ter impactos positivos ou negativos. Geralmente associada a consequências adversas, como danos em relacionamentos pessoais ou profissionais, e prejudicial à saúde física devido ao aumento do cortisol. Isso destaca a necessidade de ajuda para gerenciar eficazmente a raiva e seus efeitos nocivos.</Text>
				
				<Text style={styles.title}>Como surgem os problemas?</Text>
				<Text style={styles.paragraph}>A raiva é uma emoção protetiva que surge quando uma pessoa se sente ameaçada, muitas vezes sem um perigo real presente. A intensidade da raiva está diretamente ligada à percepção da ameaça. Por exemplo, o ciúme pode resultar em raiva quando a pessoa percebe erroneamente outra como rival. Raiva intensa e frequente frequentemente está relacionada a um ego frágil que se sente constantemente ameaçado devido a valores internos desrespeitados. É essencial trabalhar esses valores para reduzir a sensação de ameaça e regular a intensidade da raiva, focando em proteger o que realmente importa.</Text>
				
				<Text style={styles.title}>Como lidar com a raiva?</Text>

				<Text style={styles.subtitle}>1.Invista em autoconhecimento</Text>
				<Text style={styles.paragraph}>Refletir sobre os momentos de irritação ajuda a identificar suas causas específicas, seja relacionadas a temas como política, esportes ou situações pessoais. Questionar-se sobre essas reações promove autoconhecimento ao revelar padrões de pensamento e comportamento. Investir em práticas de autoconhecimento ajuda a descobrir aspectos ocultos da personalidade e a desenvolver maior clareza sobre si mesmo.</Text>
				
				<Text style={styles.subtitle}>2.Entenda como você expressa a raiva</Text>
				<Text style={styles.paragraph}>Além de identificar seus gatilhos de raiva, é crucial refletir sobre como você expressa esses sentimentos. Evite explosões com gritos, gestos exasperados ou palavras ásperas, pois podem prejudicar relacionamentos. Ao sentir irritação, respire profundamente para acalmar a mente e reduzir a tensão. Contar até 100 ou escrever seus sentimentos também ajudam a focalizar em algo além da raiva. Se estiver em público, busque um ambiente tranquilo para se acalmar e escrever sobre o que está sentindo. Retirar-se da situação não é sinal de fraqueza, mas sim de autocontrole e preservação dos relacionamentos.</Text>
					
				<Text style={styles.subtitle}>3.Desenvolva a empatia através de reflexões</Text>
				<Text style={styles.paragraph}>Quando falta empatia, é difícil compreender comportamentos alheios e é comum sentir raiva diante de ações discordantes. Para evitar isso, busque entender as razões por trás dessas atitudes, considerando as diferentes experiências de vida de cada um. Não é necessário concordar, apenas compreender, o que ajuda a acalmar a irritação. Se houver conflitos com alguém, converse para expressar seus sentimentos e evitar ressentimentos. Mesmo que a pessoa não queira ouvir, você terá feito sua parte e poderá escolher não se incomodar mais com suas ações</Text>
				
				<Text style={styles.subtitle}>4.Aceite a realidade</Text>
				<Text style={styles.paragraph}>Aceitar a realidade é essencial para evitar infelicidade, tristeza e raiva causadas pela negação. Exemplos como a pandemia de Covid-19 mostram que não podemos controlar tudo. Preocupar-se excessivamente só aumenta a frustração. É importante aceitar as circunstâncias para encontrar maneiras de lidar com o que é desagradável ou doloroso, inclusive em relação às pessoas ao nosso redor.</Text>
	
				<Text style={styles.subtitle}>5.Cuide de Você</Text>
				<Text style={styles.paragraph}>Nosso cérebro tende a focar no negativo, mas podemos escolher o otimismo. Optar pela leveza significa cuidar de si mesmo, priorizando seu bem-estar. Vale a pena se irritar por pequenos problemas do cotidiano? Em vez disso, concentre-se em cuidar do seu emocional com meditação, exercícios físicos ou hobbies, promovendo um estado emocional positivo e aprendendo a controlar a raiva</Text>
				
				<View style={styles.footer}/>
			</View>
    );
}