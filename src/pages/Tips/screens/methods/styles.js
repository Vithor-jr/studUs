import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
	text_body:{
		fontFamily:'Quicksand-Bold',
		fontSize:14.3,
		width: Dimensions.get('window').width - 60,
	},
	text_list:{
		fontFamily:'Quicksand-Bold',
		fontSize:14.3,
	},
	container_text_image: {
		
	},

	image_feynman: {
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.8,
		height:Dimensions.get('window').width * 0.8 * (167/302)
	},

	image_mapa_mental: {
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.8,
		height:Dimensions.get('window').width * 0.8 * (212/317)
	},

	image_robinson: {
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.8,
		height:Dimensions.get('window').width * 0.8 * (168/300)
	},

	image_explicativo: {
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.9,
		height:Dimensions.get('window').width * 0.9 * (160/320)
	},

	image_intercaldo : {
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.7,
		height:Dimensions.get('window').width * 0.7 * (168/300)
	},

	image_pomodoro :{
		alignSelf:'center',
		marginVertical:15,
		width:Dimensions.get('window').width * 0.7,
		height:Dimensions.get('window').width * 0.7 * (150/200)
	},
	container_list : {
		flexDirection:'row',
		gap:5
	},
	text_subtitle:{
		fontFamily:'Quicksand-Bold',
		marginVertical:10,
		color:'#6048AC',
		fontSize:16
	},
	
})