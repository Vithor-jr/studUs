import { StyleSheet, Dimensions } from "react-native"

const {width, heigth} = Dimensions.get('window')

export const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:'center',
		backgroundColor:'#000830'
	},
	image_top: {
		width:width,
		height: width * (254/380)
	},
	container_icon: {
		width: width *0.17,
		height: width * 0.17,
		alignItems:'center',
		borderRadius: width * 0.1,
		justifyContent:'center',
		backgroundColor:'#000830',
		top: (width * (254/380)) - width*0.1,
		position:'absolute'
	},
	icon: {
		width: width *0.2,
		height: width * 0.2 * (29/43),
	},
	container_header: {
		position:'absolute',
		width:'100%',
		padding:20
	},
	container_input:{
		alignItems:'center',
		justifyContent:'center',
		width:'70%',
		marginVertical:width*0.07,
	},
	placeholder_input_search:{
		color:'#999999',
		fontFamily:'Varela-Round',
		fontSize:12
	},
	text_input_search:{
		backgroundColor:'#F6F6F6',
		borderRadius:10,
		textAlign:'center',
		paddingHorizontal:30,
		paddingVertical:7,
		width:'100%',
	},
	title: {
		color:"white",
		fontFamily:'Quicksand-Bold',
		fontSize:30
	},
	paragraph: {
		color:"white",
		fontSize:13,
		fontFamily:'Varela-Round'
	}
})