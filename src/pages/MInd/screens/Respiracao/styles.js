import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

 export const styles = StyleSheet.create({
	container: {
		flex:1,
		padding:20
	},
	container_body:{
		flex:1,
		alignItems:'center', 
		justifyContent:'center'
	},
	circle1: {
		width: width * 0.36,
		height: width * 0.36,
		position:'absolute',
		borderRadius: width*0.4,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'rgba(242, 242, 242, 1)'
	},
	cicle2: {
		width: width * 0.52,
		height: width * 0.52 ,
		borderRadius: width*0.4,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#DCDCDC'
	},
	cicle3: {
		width: width * 0.68,
		height: width * 0.68,
		borderRadius: width*0.4,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'rgba(242, 242, 242, 0.6)'
	},
	circle4: {
		paddingVertical:width*0.08,
		paddingHorizontal: width *0.09
	},
	text: {
		fontFamily:'Varela-Round',
		fontSize:30,
		color:'#6048AC'
	},
	button: {
		position:'absolute',
		alignSelf:'center',
		alignItems:'center',
		paddingVertical: 7,
	  bottom:width*0.2,
		paddingHorizontal: 45,
		borderRadius:width*0.2,
		backgroundColor:'#6048AC'
	},
	label:{
		color:'white',
		fontFamily:"Varela-Round",
		fontSize:16
	}
 })