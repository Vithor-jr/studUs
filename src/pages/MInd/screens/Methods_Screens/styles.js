import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:Dimensions.get('window').width * 0.1
    },
    title: {
        color:"white",
        borderBottomColor:"#6048AC",
        borderBottomWidth:3,
        fontSize:22,
        alignSelf:'flex-start',
        backgroundColor:'transparent',
        fontFamily:'Quicksand-Bold'
    },
    paragraph:{
        color:"white",
        marginTop:10,
        marginBottom:20,
        fontSize:13,
        fontFamily:"Varela-Round"
    }
})