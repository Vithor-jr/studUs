import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import FrameList from "../../../components/frameList";


const list = [
    {
        list: '1. Escolha do objeto', 
        information:"Você seleciona um objeto físico ou visual específico para ser sua âncora durante a meditação. Pode ser uma vela, uma flor, uma imagem, ou qualquer objeto que seja simples e não gere distrações."
    },
    {
        list: '2. Foco da Atenção', 
        information:"Você seleciona um objeto físico ou visual específico para ser sua âncora durante a meditação. Pode ser uma vela, uma flor, uma imagem, ou qualquer objeto que seja simples e não gere distrações."
    },
    {
        list: '3. Conciência e foco', 
        information:"A âncora visual serve como um ponto de referência para ajudar a manter a consciência no momento presente. Você continua consciente do objeto visual e utiliza sua presença para cultivar o foco e a concentração."
    },
]


export default function AncoraVisual(){
    return(
        <ScrollView>
            <View style={styles.container}> 
                <Text style={styles.title}>Oque é essa técnica?</Text>
                <Text style={styles.paragraph}>Outra técnica a ser usada na meditação mindfulness é a âncora visual. Ela consiste em escolher um elemento ou objeto com ponto de foco, ajudando a manter a meditação uma vez que ver a âncora visual e ter consciência dela é uma maneira de permanecer focado na prática.</Text>
                
                <Text style={styles.title}>Passos</Text>
                <FrameList list={list}/>

                <Text style={styles.paragraph}>Essa técnica é uma maneira eficaz de iniciar ou aprofundar a prática de meditação mindfulness, utilizando um estímulo visual para fortalecer a habilidade de concentração e presença mental.</Text>
                
                <View style={{height:70}}/>
            </View>
        </ScrollView>
    )
}