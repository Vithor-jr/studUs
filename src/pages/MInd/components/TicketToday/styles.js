import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		width:width - 40,
		gap:10
	},
	container_card:{
		backgroundColor:'white',
		borderRadius:15,
		marginBottom:20,
		justifyContent:'space-between',
		elevation:10,
		paddingHorizontal:10,
		paddingVertical:5,
		flexDirection:'row'
	},
	image:{
		width:width*0.25,
		height:width*0.25 * (70/82),
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
		fontSize:13,
		fontFamily:'Varela-Round',
	},
	container_button:{
		backgroundColor:'#22096C',
		borderRadius:5,
		paddingHorizontal:20,
		paddingVertical:5
	},
	text_title:{
		fontFamily:'Quicksand-Bold',
		color:"#6048AC",
		fontSize:14,
	},
	number_meditacao: {
		color:'white',
		fontFamily:'Quicksand-Bold',
		fontSize:15,
		marginBottom:10
	}
})