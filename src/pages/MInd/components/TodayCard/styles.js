import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container_card:{
		backgroundColor:'#3B267B',
		borderRadius:15,
		gap:10,
		width:width*0.7 + 10,
		alignItems:'center',
		flexDirection:'row'
	},
	container_first_image:{
		backgroundColor:'#2A126F',
		width:'45%',
		height:'100%',
		borderTopStartRadius:15,
		borderBottomStartRadius:15
	},
	container_second_image:{
		backgroundColor:'#543B9D',
		borderTopStartRadius:15,
		flex:1,
		borderBottomStartRadius:15,
		width:'97%'
	},
	container_tirth_image:{
		backgroundColor:'#6C4CC9',
		borderTopStartRadius:15,
		alignItems:'center',
		justifyContent:'center',
		borderBottomStartRadius:15,
		flex:1,
		width:"97%"
	},
	image:{
		width:width*0.26,
		height:width*0.19
	},
	label:{
		color:'white',
		fontSize:18,
		paddingBottom:10,
		fontFamily:'Quicksand-Bold'
	},
	label_subtitle:{
		fontFamily:'Varela-Round',
		backgroundColor:'#543B9D',
		borderRadius:15,
		color:'white',
		width:'100%',
		textAlign:'center',
		paddingVertical:5
	},
	image_eva:{
		width:20,
		height:20,
		
	}
})