import { 
	View,
	Text,
	Image,
	ScrollView,
	Dimensions
} from "react-native"

import { styles } from "./styles"
import Subtitle from "../../components/subtitle"

export default function Pomodoro(){
	
const passos = [
	"Escolha uma tarefa na qual você deseja trabalhar;",
	"Posteriormente, defina o cronômetro do Pomodoro para 25 minutos;",
	"Trabalhe na tarefa até o cronômetro tocar. Em seguida, coloque uma marca de seleção em um pedaço de papel;",
	"Para fazer algo não relacionado ao trabalho, como se alongar ou fazer uma ligação, faça uma pequena pausa de 5 minutos;",
	"A cada 4 pomodoros, faça uma pausa maior, de 20 a 30 minutos. Isso o ajudará a reagrupar seus pensamentos e a relaxar",
];

const items = [
	"Nosso temporizador para marcar o tempo",
	"Uma agenda de tarefas ou checklist com coisas a fazer",
	"Lápis e borracha"
]

const renderNumericList = (items) => {
	return items.map((item, index) => (
			<View key={index} style={styles.container_list}>
					<Text style={styles.text_list}>{index + 1}.</Text>
					<Text style={{...styles.text_list, width:Dimensions.get('window').width - 75}}>{item}</Text>
			</View>
	));
}


const renderPointsList = (items) => {
	return items.map((item, index) => (
			<View key={index} style={styles.container_list}>
					<Text style={styles.text_list}>•</Text>
					<Text style={{...styles.text_list, width:Dimensions.get('window').width - 75}}>{item}</Text>
			</View>
	));
}

	return(
		<ScrollView
		showsVerticalScrollIndicator={false}
		>		
			<View style={{height:Dimensions.get('screen').height * 0.05}}/>

			<Subtitle title='O que é a técnica pomodoro?'/>

			<Text style={{...styles.text_body, marginTop:10}}>
				Em resumo, a metodologia é simples! Quando se deparar com qualquer tarefa grande ou série de tarefas, divida o trabalho em intervalos curtos e cronometrados que são espaçados por intervalos curtos.
			</Text>

			<Text style={{...styles.text_body, marginVertical:10}}>
				Isso treina seu cérebro para se concentrar por curtos períodos e ajuda você a ficar em dia com os prazos ou tarefas constantemente acumuladas. Aliás, com o tempo, pode até ajudar a melhorar sua
				<Text style={{...styles.text_body, color: '#6048AC' }}> produtividade</Text>,
				<Text style={{...styles.text_body, color: '#6048AC' }}> atenção </Text> e
				<Text style={{...styles.text_body, color: '#6048AC' }}> concentração</Text>.
			</Text>

			<Subtitle title='Como funciona a técnica pomodoro?'/>

			<Text style={{...styles.text_body, marginVertical:10}}>
			Pomodoro é um sistema cíclico. Dessa forma, você trabalha em intervalos curtos, o que garante uma produtividade consistente. Além disso, você também pode fazer pausas regulares que reforçam sua motivação e mantêm você  criativo.
			</Text>

			<Text style={{...styles.text_body, marginVertical:10}}>
			- Em primeiro lugar você vai precisar de três itens para auxiliar na contagem do tempo:
			</Text>

			{renderPointsList(items)}

			<Text style={{...styles.text_body, marginTop:10}}>Em seguida:</Text>

			<View style={{marginVertical:15}}>
				{renderNumericList(passos)}
			</View>

			<Subtitle title='Quais são os benefícios?'/>
			

			<Image style={styles.image_pomodoro} source={require('../../../../../assets/images/image_pomodoro.png')} />

			<Text style={styles.text_body}>
				<Text style={{...styles.text_body, color: '#6048AC' }}>1. </Text>
				Define um tempo para distrações
				Ao longo do dia, muitas vezes nos distraímos a cada poucos minutos. Isso geralmente acontece porque  não planejamos a tempo as pausas quando poderíamos nos distrair.
				Com efeito, a Técnica Pomodoro permite pausas ao longo do dia, para que você saiba quando poderá se desconectar e se distrair com outra coisa por um momento.
			</Text>

			<View style={{marginVertical:15}}>
				<Text style={styles.text_body}>
					<Text style={{...styles.text_body, color: '#6048AC' }}>2. </Text>
						Reduz a quantidade de tarefas em aberto
						Tarefas em aberto, como estudar, pesquisar ou até mesmo escrever, podem se arrastar por dias se você não tomar cuidado. Portanto, ao encaixar esses tipos de atividades em pomodoros, você coloca um limite de tempo para elas.
					</Text>
				<Text style={styles.text_body}>
					Ademais, isso o ajudará a “completá-las” em um determinado período de tempo e dividir o trabalho em partes gerenciáveis; ao invés de tentar fazer todas ao mesmo tempo e não finalizar nenhuma.
				</Text>
			</View>

			<Text style={styles.text_body}>
				<Text style={{...styles.text_body, color: '#6048AC' }}>3. </Text>
				Transforma o trabalho em um jogo
				Se você é fã de jogos, o Método Pomodoro pode ser muito divertido para você; pois o cronômetro funciona como uma contagem regressiva para a tarefa em mãos. Assim, você sentirá que está trabalhando contra o relógio, tentando “passar uma fase” ou “ganhar o jogo”.
				Portanto, a gamificação de tarefas importantes pode realmente ajudar a aumentar sua produtividade, pois oferece entretenimento, quebrando a monotonia com um desafio.
			</Text>

			<Text style={{...styles.text_body, marginTop:15}}>
				<Text style={{...styles.text_body, color: '#6048AC' }}>4. </Text>
				Ajuda você a se afastar da procrastinação
				Para aqueles que lutam contra a procrastinação, o Método Pomodoro pode mantê-lo motivado. Portanto, com essa técnica, você sabe quando e quanto tempo precisa trabalhar, e sabe exatamente quando vai pausar e obter alguma recompensa, no caso o descanso.
			</Text>

			<View style={{height:Dimensions.get('window').height *0.15}}/>
		</ScrollView>
	)
}