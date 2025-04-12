import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:30,
		paddingHorizontal:30
	},
	container_header:{
		height:'18%',
		zIndex:2
	},
	footer: {
		height:50
	},
	title:{
		width:'100%',
		textAlign:'center',
		color:'white',
		fontFamily:'Varela-Round',
		fontSize:16
	},
	container_input:{
		alignItems:'center',
		justifyContent:'center',
		marginTop:15
	},
	text_input_search:{
		backgroundColor:'#F6F6F6',
		borderRadius:10,
		paddingStart:30,
		paddingVertical:7,
		width:'100%',
	},
	conatiner_body:{
		
	},
	placeholder_input_search:{
		color:'#999999',
		fontFamily:'Varela-Round',
		fontSize:12
	},
	container_dicas_estudos:{
		backgroundColor:'#ADD688',
		borderRadius:15,
		flexDirection:'row',
		justifyContent:'space-between',
	},
	sub_container_text_dicas_estudos:{
		width:'50%',
		padding:20,
		gap:10
	},
	text_title_dicas_estudos:{
		fontFamily:'Varela-Round',
		color:'white',
		fontSize:26
	},
	text_message_dicas_estudos:{
		fontSize:9,
		fontFamily:'Varela-Round',
		color:'rgba(0, 0, 0, 0.4)'
	},
	sub_container_image_dicas_estudos:{
		justifyContent:'flex-end',
		paddingEnd:10
	},
	text_title_methods:{
		fontFamily:'Varela-Round', 
		fontSize:15,
		marginBottom:10,
		marginTop:30
	},
	text_sem_resul:{ 
		textAlign: 'center',
		marginVertical: 10,
		fontFamily:'Varela-Round',
		color:'rgba(0, 0, 0, 0.4)'
	},
	container_header_tips:{
		flexDirection:'row',
		marginTop:15,
		alignItems:'center',
		gap:10
	},
	title_tips:{
		color:'white',
		fontFamily:'Varela-Round',
		fontSize:24
	},
	subtitle_tips:{
		color:'white',
		marginTop:5,
		fontFamily:'Varela-Round',
		fontSize:16
	}
})