import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-between'
	},
	container_card:{
		backgroundColor:'#3B267B',
		borderRadius:15,
		marginBottom:20,
		gap:5,
		elevation:10,
		width:width*0.78 + 10,
		alignItems:'center',
		paddingHorizontal:15,
		paddingVertical:10,
		flexDirection:'row'
	},
	image:{
		width:width*0.22,
		height:width*0.22 * (70/75),
		resizeMode:'cover',
		borderRadius:10
	},
	circle: {
		width: width*0.06,
		height: width*0.06,
		backgroundColor:'white',
		borderRadius: width * 0.1
	},
	line: {
		flex:1,
		width: width *0.008,
		backgroundColor:'white'
	},
	container_circle_line: {
		flexDirection:'column',
		alignItems:'center'
	},
	text_type:{
		color:"white",
		flex:1,
		fontSize:13,
		textAlign:'center',
		fontFamily:'Quicksand-Bold',
	},
	container_type: {
		width: width*0.3,
		borderRadius:5,
		backgroundColor:'#22096C',
		alignItems:'center',
		paddingVertical:5,
		flexDirection:'row'
	},
	litleCircle: {
		width: width*0.01,
		position:'absolute',
		height: width*0.01,
		marginStart:'5%',
		backgroundColor:'#47AF39',
		borderRadius: width * 0.01
	},
	text_title:{
		fontFamily:'Quicksand-Bold',
		color:"white",
		marginBottom:-5,
		fontSize:20,
	},
	text_subtitle:{
		fontSize:14,
		color:'rgba(255, 255, 255, 0.7)',
		fontFamily:'Varela-Round'
	},
})