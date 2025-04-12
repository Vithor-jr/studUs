import React, { useEffect } from 'react';
import { 
    Text,
    View, 
} from "react-native";
import { styles } from './styles';

const diminuir = [
    "Buscar rir mais;",
    "Reduzir o uso de celular;",
    "Respirar corretamente;",
    "Buscar momentos de lazer;",
    "Buscar contato com a natureza;",
    "Possuir um hobbie;",
    "Reduzir a quantidade de cafeína consumida;",
    "Ouvir música;",
    "Realizar atividade física;",
    "Cuide da sua alimentação;",
    "Durma bem;",
    "Pratique exercícios."
];

const sintomas = [
    "Coração acelerado e batimento cardíaco fora do ritmo;",
    "Respiração acelerada;",
    "Dores nas costas e na cabeça;",
    "Dificuldade para dormir;",
    "Fadiga acompanhada de cansaço em demasia;",
    "Acne;",
    "Problemas gastrointestinais (refluxo, azia, gastrite e úlceras);",
    "Necessidade frequente de urinar;",
    "Crises de pânico"
];

const renderList = (items) => {
    return items.map((item, index) => (
        <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.paragraph}>{item}</Text>
        </View>
    ));
}

export default function EstresseScreen(){

	return (
		     <View style={styles.container}>
            <Text style={styles.title}>O que é o estresse?</Text>
            <Text style={styles.paragraph}>
                O estresse é uma reação do organismo a situações de perigo ou ameaça, além de diversas razões que podem causar sensações de irritação, medo, desconforto, preocupação e frustração.
            </Text>

            <Text style={styles.title}>Sintomas</Text>
            {renderList(sintomas)}

            <Text style={styles.title}>Como diminuir?</Text>
            {renderList(diminuir)}
            <View style={styles.footer}/>
        </View>
    );
}