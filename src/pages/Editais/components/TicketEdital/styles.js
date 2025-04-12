import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
	container_ticket:{
		borderRadius:15,
		flexDirection:'column',
		justifyContent:'space-between'
	},
	container_correct:{
		width:width*0.2,
		height:width*0.2,
		borderRadius:10,
		alignItems:'center',
		justifyContent:'center'
	},
	text_title:{
		color:'white',
		fontSize:24,
		paddingVertical:5,
		fontFamily:'Quicksand-Bold'
	},
	text_subtitle:{
		color:'rgba(255, 255, 255, 0.9)',
		fontFamily:'Varela-Round',
		fontSize:12,
		marginTop:-5
	},
	container_bottom_description:{
		borderTopWidth:1,
		marginTop:10,
		borderColor:'rgba(255, 255, 255, 0.7)'
	},
	text_descripton:{
		fontFamily:"Quicksand-Bold",
		color:'rgba(255, 255, 255, 0.7)',
	},
	line:{
		backgroundColor:'#6048AC',
		height:10,
		width:60,
		borderRadius:10
	}
})