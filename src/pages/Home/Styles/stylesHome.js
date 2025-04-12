import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingVertical:30,
		width:'100%'
	},
	container_header:{
		height: '35%',
		width: '100%', 
		padding: 20
	},
	container_header_buttons:{
		justifyContent:'space-between',
		width:'100%',
		flexDirection:'row',
		alignItems:'center'
	},
	container_modal_activitys:{
		height: '30%',
		width:'100%',
		alignItems:'center'
	},
	hello:{
		width: '80%',
		color: 'white',
		fontFamily: 'Varela-Round',
		fontSize: 32
	},
	message:{
		width: '80%',
		fontFamily:'Varela-Round',
		color:'white',
		fontSize:15,
		marginBottom: 20
	},
	frameTop:{
		backgroundColor:'white',
		width: '80%',
		justifyContent: 'space-between',
		flexDirection:'row',
		paddingStart:25,
		borderRadius: 10
	},
	frameToptext:{
		justifyContent: 'space-between',
		flexDirection: 'column',
		height: '100%',
		paddingBottom: 15,
		paddingVertical:10
	},
	today:{
		color: 'rgba(0, 0, 0, 0.60)',
		fontFamily: 'Varela-Round',
		fontSize: 16
	},
	activitys: {
		color: 'black',
		fontFamily: 'Quicksand-Bold',
		fontSize: 20,
	},
	addButton: {
    position: 'absolute',
    right: 25,
    bottom: 90,
    backgroundColor: '#6048AC',
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
	container_button_add:{
		width:'100%',
		height:'100%',
		position:'absolute'
	},
	container_tab_bar_activitys:{
		width:'100%',
		paddingHorizontal:'10%',
		justifyContent:'space-between',
		flexDirection:'row'
	},
	button_actived:{
		backgroundColor:'white',
		paddingHorizontal:7,
		paddingVertical:5,
		borderRadius:7,
		flexDirection:'row',
		alignItems:'center',
		elevation:5,
		marginBottom:10,
		gap:3
	},
	buttons_inactived:{
		backgroundColor:'rgba(222,234,246,0.75)',
		paddingHorizontal:10,
		paddingVertical:5,
		borderRadius:7,
		flexDirection:'row',
		marginBottom:10,
		alignItems:'center',
		gap:3
	},
	text_tab_bar_buttons:{
		fontFamily:'Quicksand-Bold',
		fontSize:14
	},
	circle_button_actived:{
		width:5,
		height:5,
		borderRadius:10,
		backgroundColor:'#E84D35'
	},
	text_tips:{
		fontFamily:'Quicksand-Bold',
		fontSize:14
	},
	container_tesouro_tips:{
		flexDirection:'row',
		gap:10,
		alignItems:'center',
		marginBottom:10
	},
	container_button_tips:{
		backgroundColor:'rgba(222, 234, 246, 0.75)', 
		height:90,
		width:'100%',
		borderRadius:15, 
		alignItems:'center',
		flexDirection:'row'	
	},
	text_title_tips:{
		fontSize:15,
		fontFamily:'Quicksand-Bold'
	},
	text_subtitle_tips:{
		fontSize:9,
		fontFamily:'Varela-Round',
		color:'rgba(0, 0, 0, 0.5)'
	},
	container_subcircles:{
		height:'100%',
		justifyContent:'space-between',
		alignItems:'flex-end'
	}
})