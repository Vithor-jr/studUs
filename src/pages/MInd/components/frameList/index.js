import { View, Text } from "react-native";
import { styles } from "./styles";

export default function FrameList({list}){
    return(
        <View style={styles.container}>
            {
                list.map((item, index)=>(
                    <View key={index}>
                        <Text style={styles.title}>{item.list}</Text>
                        <Text style={styles.information}>{item.information}</Text>
                    </View>
                ))
            }
        </View>
    )
}