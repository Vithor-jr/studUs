import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    height: '100%',
		width:'100%',
		position:'absolute',
		backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
 container_title_top_session:{
		backgroundColor:'rgba(214, 208, 231, 0.36)',
		color:'white',
		marginTop:10,
		fontFamily:'Varela-Round',
		fontSize:15,
		paddingHorizontal:15,
		paddingVertical:5,
		borderRadius:10
	},
  conatiner_body: {
    height: '70%',
    width: '100%',
    backgroundColor: '#6048AC',
		borderTopStartRadius:50,
		borderTopEndRadius:50,
    cursor: 'grab',
		position:'absolute',
		alignItems:'center',
		bottom:0
  },
	component_line_press:{
		width:50,
		height:8,
		borderRadius:10,
		margin:10,
		backgroundColor:'#D6D0E7'
	},
	conatainer_ticket_sessions:{
		width:'80%',
		backgroundColor:'white',
		borderRadius:10,
		paddingHorizontal:15,
		paddingVertical:5,
		marginBottom:20
	},
	text_hours_ticket_sessions:{
		fontFamily:'Varela-Round',
		fontSize:9,
	},
	text_title_ticket_sessions:{
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		width:'55%'
	},
	text_duration_ticket_sessions:{
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		maxWidth:'70%',
		paddingHorizontal:10,
		paddingVertical:2,
		borderRadius:10,
		backgroundColor:'rgba(96, 72, 172, 0.16)'
	},
	circle:{
		width:9,
		height:9,
		borderRadius:5
	},
	container_pregress_line:{
		flexDirection:'column',
		height:'100%',
		marginRight:'7%',
		alignItems:'center',
	},
	line_complete_focus:{
		flex:1,
		width:3,
		backgroundColor:'#E2E2E2'
	},
	circle_done_focus:{
		padding:5,
		borderRadius:20, 
		backgroundColor:'#E2E2E2'
	},
	text_today:{
		fontFamily:'Quicksand-Bold',
		color:'#9F8ED8',
		fontSize:13,
		marginVertical:10
	},
	line_default:{
		width:3, 
		height:'100%',
		position:'absolute',
		zIndex:2,
		backgroundColor:'rgba(226, 226, 226, 0.5)',
		left:23.6, 
		top:120
	}
});