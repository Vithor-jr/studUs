import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

export default function FelicidadeScreen(){

	const sinais = [
		'Sentir que você está vivendo a vida que você queria;',
		'Ir com o fluxo e uma vontade de levar a vida como ela vem;',
		'Sentir que as condições da sua vida são boas;',
		'Desfrutar de relacionamentos positivos e saudáveis com outras pessoas;',
		'Sentir que realizou (ou realizará) o que deseja na vida;',
		'Sentir-se satisfeito com sua vida;',
		'Sentir-se mais positivo do que negativo;',
		'Estar aberto a novas ideias e experiências;',
		'Praticar o autocuidado e tratar a si mesmo com bondade e compaixão;',
		'Experimentar a gratidão;',
		'Sentir que você está vivendo a vida com um senso de significado e propósito;',
		'Querer compartilhar sua felicidade e alegria com os outros.',
		'Uma coisa importante a lembrar é que a felicidade não é um estado de euforia constante. Em vez disso, a felicidade é uma sensação geral de experimentar emoções mais positivas do que negativas.'
	]

	const tipos = [
		'Hedônica: A felicidade hedônica é derivada do prazer. É mais frequentemente associado a fazer o que é bom, cuidar de si mesmo, satisfazer desejos, experimentar prazer e sentir uma sensação de satisfação;',
    'Eudaimônica: Este tipo de felicidade é derivado da busca de virtude e significado. Componentes importantes do bem-estar eudaimônico, incluindo a sensação de que sua vida tem significado, valor e propósito. Está mais associado ao cumprimento de responsabilidades, investimento em metas de longo prazo, preocupação com o bem-estar de outras pessoas e realização de ideais pessoais.'
	]

	const renderList = (items) => {
    return items.map((item, index) => (
        <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.paragraph}>{item}</Text>
        </View>
    ));
}

	return (
			<View style={styles.container}>
				<Text style={styles.title}>Oque é a Felicidade?</Text>
				<Text style={styles.paragraph}>A felicidade varia entre as pessoas e é geralmente descrita como um estado emocional de alegria, satisfação e realização. Psicólogos frequentemente usam "bem-estar subjetivo" para se referir a esse estado emocional pessoal e geral sobre a vida atual de alguém.</Text>

				<Text style={styles.title}>Sinais de felicidade</Text>
				{renderList(sinais)}

				<Text style={styles.title}>Tipos de felicidade</Text>
				{renderList(tipos)}

				<Text style={styles.title}>Como cultivar a felicidade</Text>
					
				<Text style={styles.subtitle}>1.Perseguir Objetivos Intrínsecos</Text>
				<Text style={styles.paragraph}>Atingir objetivos que você está intrinsecamente motivado a perseguir, especialmente aqueles focados no crescimento pessoal e na comunidade, pode ajudar a aumentar a felicidade. A pesquisa sugere que perseguir esses tipos de objetivos intrinsecamente motivados pode aumentar a felicidade mais do que perseguir objetivos extrínsecos, como ganhar dinheiro ou status.</Text>
				
				<Text style={styles.subtitle}>2.Aproveite o momento</Text>
				<Text style={styles.paragraph}>Estudos descobriram que as pessoas tendem a ganhar demais - elas ficam tão concentradas em acumular coisas que perdem a noção de realmente gostar do que estão fazendo.
				Portanto, em vez de cair na armadilha de acumular sem pensar em detrimento de sua própria felicidade, concentre-se em praticar a gratidão pelas coisas que você tem e aproveitar o processo à medida que avança.</Text>
					
				<Text style={styles.subtitle}>3.Reformule pensamentos negativos</Text>
				<Text style={styles.paragraph}>Quando preso em pensamentos negativos, é útil reformulá-los positivamente. As pessoas têm uma tendência natural a focar no negativo, ignorando o positivo, o que afeta decisões e impressões. Reenquadrar pensamentos negativos não é ignorar o que é ruim, mas ter uma visão mais equilibrada e realista, desafiando esses padrões mentais..</Text>
				<View style={styles.footer}/>
			</View>
    );
}