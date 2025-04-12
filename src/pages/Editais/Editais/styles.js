import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container_top: {
		width: '100%',
		padding:20,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	screen_container:{
		flex:1,
		backgroundColor:'#6048AC'
	},
	container_title_header:{
	  justifyContent:'center',
		alignItems:'center',
		width:'100%',
		gap:5,
		flexDirection:'row'
	},
	container_body:{
		position:'absolute',
		bottom:0,
		height:'85%',
		width:'100%',
		paddingTop:50,
		backgroundColor:'white',
		borderTopEndRadius:50,
		borderTopStartRadius:50
	},
	text_title:{
		color:'white',
		fontSize:20,
		fontFamily:'Quicksand-Bold'
	},
	text_subtitle:{
		textAlign:'center',
		fontSize:14,
		fontFamily:'Quicksand-Bold',
		marginTop:-5,
		color:'rgba(255, 255, 255, 0.5)'
	},
	subtitle:{
		color:'rgba(0, 0, 0, 0.8)',
		fontFamily:'Quicksand-Bold'
	},
	container_list_vestibular:{
		flex:1,
	},
	text_title_editais:{
		color:'#6048AC',
		fontSize:32,
		fontFamily:"Quicksand-Bold"
	}
})