import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import FrameList from "../../../components/frameList";


const list = [
    {
        list: '1. Conciência das emocões', 
        information:"Torne-se consciente das emoções que estão presentes no momento. Identifique e reconheça o que você está sentindo, sem tentar mudá-las."
    },
    {
        list: '2. Aceitação sem julgamentos', 
        information:"Aceite as emoções como elas são, sem julgamento. Permita-se sentir as emoções sem tentar suprimi-las ou resistir a elas."
    },
    {
        list: '3. Desenvolvimento', 
        information:"Cultive uma relação mais saudável com suas emoções ao longo do tempo. Aprenda a lidar com elas de maneira que promova o autoconhecimento, a resiliência emocional e o bem-estar geral."
    },

]


export default function Emocoes(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Oque é essa técnica?</Text> 
                <Text style={styles.paragraph}>Esse tipo de mindfulness envolve a observação e a aceitação das emoções presentes, sem julgamento ou tentativa de resistência.</Text>
                <Text style={[styles.paragraph, {marginTop:-10}]}>Em vez de reagir automaticamente às emoções ou tentar suprimi-las, a ideia é simplesmente estar consciente das emoções à medida que surgem, permitindo que elas sejam sentidas e reconhecidas</Text>
                
                <Text style={styles.title}>Passos</Text>
                <FrameList list={list}/>

                <Text style={styles.paragraph}>Esses passos ajudam a desenvolver uma prática de mindfulness que promove uma compreensão mais profunda e compassiva das suas próprias emoções, contribuindo para um estado emocional mais equilibrado e uma resposta mais saudável às situações da vida.</Text>
                <View style={{height:70}}/>
            </View>
        </ScrollView>
    )
}