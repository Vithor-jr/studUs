import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container_card:{
		backgroundColor:'#3B267B',
		borderRadius:15,
		gap:10,
		width:width*0.7 + 10,
		alignItems:'center',
		paddingHorizontal:15,
		paddingVertical:10,
		flexDirection:'row'
	},
	image:{
		width:width*0.25,
		height:width*0.22,
		resizeMode:'cover',
		borderRadius:10
	},
	text_type:{
		color:"white",
		backgroundColor:'#22096C',
		borderRadius:5,
		width:'100%',
		paddingVertical:5,
		fontFamily:'Varela-Round',
		textAlign:'center'
	},
	text_title:{
		fontFamily:'Quicksand-Bold',
		color:"white",
		marginBottom:-5,
		fontSize:17,
	},
	text_subtitle:{
		fontSize:14,
		color:'rgba(255, 255, 255, 0.7)',
		fontFamily:'Varela-Round'
	},
})