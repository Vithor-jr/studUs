import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

export default function MedoScreen(){

	return (
			<View style={styles.container}>
				<Text style={styles.title}>Oque é o Medo?</Text>
				<Text style={styles.paragraph}>O medo não é um sinal de fraqueza, mas uma reação natural do cérebro diante de estímulos estressantes, desencadeando a resposta de luta ou fuga. Essa emoção é essencial para nossa sobrevivência, pois nos alerta sobre perigos iminentes e nos impede de agir impulsivamente em situações arriscadas.</Text>

				<Text style={styles.title}>Dicas para superar os seus medos</Text>

				<Text style={styles.subtitle}>1.Aceite os seus medos</Text>
				<Text style={styles.paragraph}>Uma das piores coisas que você pode fazer é negar que tem determinado medo. Tudo começa com um bom processo de aceitação, pois a partir disso você estará pronto para encará-lo e entender como resolvê-lo. Seja amigo do seu medo, encare-o de frente, fale sobre ele. É importante ter clareza e aceitar o que te aflige.</Text>
				
				<Text style={styles.subtitle}>2.Escreva sobre seus medos</Text>
				<Text style={styles.paragraph}>A escrita é uma ferramenta poderosa para organizar os seus pensamentos, emoções e medos. Já experimentou escrever sobre aquilo que te provoca calafrios no meio da noite? Não precisa mostrar para ninguém se não quiser, apenas escreva como uma forma de aliviar o que você sente em relação aos seus medos.Tente tornar esse um exercício diário ou semanal e comece a reparar se as suas emoções se organizam melhor dessa forma.</Text>
					
				<Text style={styles.subtitle}>3.Cultive pensamentos positivos</Text>
				<Text style={styles.paragraph}>Tente não viver dentro de um looping negativista. É muito mais fácil encarar os seus medos sob uma ótica pessimista: “nunca vou superar”, “é difícil demais”. O segredo é confiar em si mesmo e ir atrás do suporte necessário para ultrapassar os seus medos e impedir que eles dominem a sua vida. Para isso, cultivar pensamentos positivos é importante. Já ouviu falar naquela história de que a energia que cultivamos influencia na nossa vida? É isso! Para criar um ambiente propício para a superação dos medos é preciso acreditar, pensar e verbalizar essa positividade.</Text>
					
				<Text style={styles.subtitle}>4.Ressalte suas conquistas</Text>
				<Text style={styles.paragraph}>A dica é mudar essa perspectiva e passar a alimentar muito mais as suas vitórias. O medo é nutrido pelos seus fracassos e pelo negativismo, portanto, para superá-lo é importante dar menos espaço para o que acontece de ruim. Coloque todas as suas vitórias no holofote e use-as como combustível para continuar a sua jornada.</Text>
				
				<Text style={styles.subtitle}>5.Converse sobre seus medos</Text>
				<Text style={styles.paragraph}>Uma forma eficaz de superar medos é discuti-los abertamente. Abrir-se sobre seus medos pode ser uma ferramenta poderosa para curar e encontrar alívio emocional. Comece conversando com pessoas próximas e confortáveis, pois isso pode ajudar a perceber que todos enfrentam medos e que você não está sozinho nessa experiência.</Text>
				
				<Text style={styles.subtitle}>6.Foque na sua respiração</Text>
				<Text style={styles.paragraph}>Durante momentos de medo e tensão, a respiração torna-se ofegante, refletindo o estado emocional. Controlar a respiração, respirando profundamente, pode ser eficaz. A meditação é recomendada para melhorar a respiração e focar no presente; A qual você pode encontrar aqui mesmo no app.</Text>
				
				<Text style={styles.subtitle}>7.Faça terapia</Text>
				<Text style={styles.paragraph}>Alguns medos e fobias podem ter raízes em experiências traumáticas da infância. Para explorar esses sentimentos e como sua história pode afetar sua vida atual, considerar a ajuda de um psicólogo é altamente recomendável. A terapia oferece uma maneira eficaz de enfrentar medos com apoio profissional através de diálogos construtivos.</Text>
				
				<View style={styles.footer}/>
			</View>
    );
}