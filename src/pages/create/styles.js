import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container_screen:{
		flex:1,
		backgroundColor:"#6048AC"
	},
	container_body:{
		position:'absolute',
		bottom:0,
		width:'100%',
		alignItems:'center',
		paddingHorizontal:'15%',
		borderTopStartRadius:50,
		borderTopEndRadius:50,
		backgroundColor:'white',
		height:'88%'
	},
	title:{
		fontFamily:'Quicksand-Bold',
		fontSize:25
	},
	subtitle:{
		fontFamily:'Varela-Round',
		fontSize:12,
		color:'rgba(0, 0, 0, 0.4)',
		marginBottom:10
	},
	input:{
		backgroundColor:'white',
		borderWidth:1,
		borderRadius:13,
		paddingVertical:5,
		fontSize:12,
		flexDirection:'row',
		fontFamily:'Varela-Round',
		paddingStart:15,
		paddingEnd:10,
		borderColor:"#3B267B",
		width:'100%'
	},
	label_input:{
		color:'black',
		fontFamily:'Varela-Round',
		fontSize:12
	},
	container_input:{
		gap:10,
		width:'100%',
		marginBottom:15
	},
	text_instructions_password:{
		color:11,
		fontFamily:'Varela-Round'
	},
	container_instructions:{
		borderWidth:0.5,
		borderColor:'rgba(0, 0,0,0.4)',
		padding:10,
		borderRadius:10
	},
	container_button:{
		width:'80%',
		borderRadius:15,
		backgroundColor:'#6048AC',
		alignItems:'center',
		marginTop:15,
		justifyContent:'center',
		paddingVertical:7
	},
	button_label:{
		color:'white',
		fontFamily:'Varela-Round'
	},
	font_button_login:{
		borderBottomColor:'#FF7300',
		borderBottomWidth:1,
		fontSize:11,
		fontFamily:'Quicksand-Bold'
	},
	error_text: {
		color: '#E84D35',
		fontSize: 11,
		marginTop: -5,
		width:'100%',
		textAlign:'right',
		fontFamily: 'Varela-Round',
	},
});

export {styles};