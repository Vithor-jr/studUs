import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import FrameList from "../../../components/frameList";


const list = [
    {
        list: '1. Preparação', 
        information:"Escolha um ambiente onde você possa sentar-se confortavelmente, sem interrupções externas significativas. Certifique-se de que você pode manter uma postura ereta, porém relaxada, para facilitar a respiração e a concentração."
    },
    {
        list: '2. Foco na respiração', 
        information:"Inicie a prática direcionando sua atenção para a respiração. Isso ajuda a acalmar a mente e a preparar-se para a prática de mindfulness. Observe o movimento natural da respiração, seja na entrada e saída do ar pelo nariz ou pela sensação do movimento do abdômen."
    },
    {
        list: '3. Atenção aos sons', 
        information:"Após alguns momentos focando na respiração, expanda sua consciência para os sons ao seu redor. Não se prenda a nenhum som específico, mas esteja aberto e receptivo a todos os sons que surgem naturalmente."
    },
    {
        list: '4. Observação plena', 
        information:`o ouvir os sons presentes, observe sua natureza e características. Note se são agudos ou graves, ritmados ou contínuos.

Preste atenção ao volume e ao ritmo dos sons, percebendo se são suaves e constantes ou intensos e variáveis. Mantenha sua atenção plena nos sons, permitindo que eles fluam através de sua consciência sem se prender a nenhum som em particular. Se a mente divagar, suavemente traga-a de volta à audição presente.`
    },
]


export default function AncoraAuditiva(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Oque é essa técnica?</Text> 
                <Text style={styles.paragraph}>Ao direcionar a atenção para os sons, podemos desenvolver uma maior consciência auditiva e uma conexão mais profunda com o ambiente ao nosso redor.</Text>
                <Text style={[styles.paragraph, {marginTop:-10}]}>Essa prática de mindfulness concentra-se na percepção dos sons ao nosso redor. A ideia é ouvir os sons com atenção plena, observando sua natureza, volume, ritmo e qualidade.</Text>
                
                <Text style={styles.title}>Passos</Text>
                <FrameList list={list}/>

                <Text style={styles.paragraph}>Esses passos são projetados para desenvolver a capacidade de estar presente no momento atual através da audição consciente, ajudando a acalmar a mente e promover relaxamento.</Text>
                <View style={{height:70}}/>
            </View>
        </ScrollView>
    )
}