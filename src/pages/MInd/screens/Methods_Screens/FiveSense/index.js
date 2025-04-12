import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import FrameList from "../../../components/frameList";


const list = [
    {
        list: '1. Olhe', 
        information:"Olhe em volta e mencione cinco coisas que você pode ver, agora, de onde você está."
    },
    {
        list: '2. Ouça', 
        information:"Ouça e mencione quatro coisas que você pode ouvir"
    },
    {
        list: '3. Toque', 
        information:"Observe três coisas que você pode tocar, como as páginas de um livro ou a sensação de sentir os seus pés no tapete"
    },
    {
        list: '4. Cheire', 
        information:"Em seguida, dois cheiros: inspire as páginas de um livro ou o aroma cítrico da vela que você acendeu"
    },
    {
        list: '5. Prove', 
        information:"Finalmente, mencione algo que você pode provar, como um gole d'água, por exemplo"
    },
]


export default function FiveSense(){
    return(
        <ScrollView>
            <View style={styles.container}> 
                <Text style={styles.title}>Oque é essa técnica?</Text>
                <Text style={styles.paragraph}>Essa é uma técnica usada para atenção plena. "É uma técnica de atenção plena utilizada para a autorregulação emocional em casos de ansiedade e/ou transtornos, envolvendo episódios ansiosos, por exemplo, a síndrome do pânico. O principal objetivo é trazer a mente para o presente, já que na ansiedade a mente é rapidamente “sequestrada” para o futuro", explica a psicóloga Tamires Mesquita.</Text>
                
                <Text style={styles.title}>Como funciona?</Text>
                <Text style={styles.paragraph}>A técnica se sustenta nos seus próprios sentidos e o mais importante: no seu momento presente.</Text>
                <Text style={[styles.paragraph, {marginTop:-10}]}>Basta observar os nossos cinco sentidos (visão, olfato, paladar, tato e audição). “Por isso, o nome da técnica é 5 4 3 2 1. Focar nos 5 sentidos, traz a nossa conexão com nosso corpo e portanto, com o AQUI e AGORA”, destaca a psicóloga.</Text>
            
                <Text style={styles.title}>Passos</Text>

                <FrameList list={list}/>

                <Text style={styles.paragraph}>Por meio dessa técnica é possível interromper os pensamentos "em círculos" e se centrar no que está acontecendo agora, no presente</Text>
                <Text style={[styles.paragraph, {marginTop:-10}]}>É um pequeno momento de atenção plena para desviar a ansiedade. Assim é possível desfocar do problema e ter um alívio até para respirar melhor e enxergar a situação com mais clareza.</Text>

                <View style={{height:70}}/>
            </View>
        </ScrollView>
    )
}