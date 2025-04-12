import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container:{
		flex:1
	},
	image:{
		width: width+10,
		height:width*0.6,
		resizeMode:'cover',
		position:"absolute"
	},
	text_title:{
		fontFamily:"Quicksand-Bold",
		color:'white',
		fontSize:32
	},
	text_subtitle:{
		fontSize:13,
		fontFamily:'Varela-Round',
		color:'white'
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