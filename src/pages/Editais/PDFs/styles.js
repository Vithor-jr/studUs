import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container_top: {
		width: '100%',
		paddingTop:20,
		paddingLeft:20,
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
	text_title_vestibular:{
		color:'#6048AC',
		fontSize:32,
		marginHorizontal:20,
		fontFamily:"Quicksand-Bold"
	},
	text_subititle:{
		fontFamily:"Quicksand-Bold",
		fontSize:14,
		paddingStart:20	
	},
	container_card:{
		flexDirection:'row',
		paddingHorizontal:20,
		gap:20,
		marginTop:20,
		flexWrap:'wrap', 
		justifyContent:'space-between'
	}
})