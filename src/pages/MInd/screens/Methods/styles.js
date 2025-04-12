import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container:{
		flex:1,
        backgroundColor:"#1F1B34"
	},
	image:{
		width: width+10,
		height:(width+10)*(184/360),
		resizeMode:'cover',
		position:"absolute"
	},
    container_title:{
        marginTop:width*0.45,
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    image_title: {
        width: width*0.08,
        height: width*0.08,
        borderRadius: width*0.1     
    },
	text_title:{
		fontFamily:"Quicksand-Bold",
		color:'white',
		fontSize:32
	},
	text_subtitle:{
		fontSize:13,
		fontFamily:'Varela-Round',
		color:'rgba(255, 255, 255, 0.8)'
	},
	container_top_book:{
		backgroundColor:'#543B9D',
		borderRadius:10,
		alignItems:'center',
		justifyContent:'center',
		paddingVertical:5,
		width:width*0.35
	},
	text_container_top_book:{
		color:"white",
		fontFamily:"Varela-Round"
	}
})