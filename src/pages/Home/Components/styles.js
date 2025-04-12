import { StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
	card: {
		paddingVertical:15,
		flex:1,
		marginEnd:15,
		//backgroundColor:'red'
  },
	container_card_body:{
		paddingHorizontal:7,
		paddingTop:20,
		position:'absolute',
		width:'100%',
		height:'100%'
	},
	text_type:{
		fontFamily:'Quicksand-Bold',
		color:'white',
		fontSize:12,
		marginBottom:10,
		textShadowColor: 'white',
    textShadowRadius: 2,
	},
	text_name:{
		color:'black',
		fontFamily:'Quicksand-Bold',
		fontSize:16,
		marginBottom:15
	},
	text_entrega:{
		color:'white',
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		marginBottom:15,
		textShadowColor: 'white',
    textShadowRadius: 2,
	},
	text_date:{
		color:'black',
		fontFamily:'Quicksand-Bold',
		fontSize:16,
		textShadowColor: 'black',
    textShadowRadius: 0.5,
	},
	textWithStroke: {
    fontSize: 20,
		fontFamily:'Varela-Round',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
	container_ticket:{
		backgroundColor:'white',
		borderRadius:15,
		marginVertical:10,
		paddingHorizontal:20,
		paddingVertical:15,
		justifyContent:'space-between',
		flexDirection:'row'
	},
	container_ticket_type:{
		color:'#FFF',
		fontFamily:'Varela-Round',
		fontSize:10,
		borderRadius:5,
		width:70,
		textAlign:'center',
		paddingHorizontal:10
	},
	container_ticket_tecnica:{
		color:'#17A1FA',
		fontFamily:'Varela-Round',
		fontSize:10
	},
	container_ticket_name:{
		fontFamily:'Varela-Round',
		color:'black',
		fontSize:10
	},
	container_ticket_time_entregar:{
		color:'rgba(0, 0, 0, 0.60)',
		fontFamily:'Varela-Round',
		fontSize:8
	},
	container_ticket_text_tecnicas:{
		color:'black',
		fontFamily:'Varela-Round',
		fontSize:8
	},
	modal_add_container:{
		backgroundColor:'#5F49A9',
		borderRadius:10,
		position:'absolute',
		justifyContent:'flex-end',
		flexDirection:'column',
		right:50,
		bottom:125,
		width:'75%',
		maxHeight:212,
		padding:15,
		gap:20
	},
	addButton: {
    position: 'absolute',
    right: 25,
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
	modal_add_text:{
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		color:'white'
	},
	modal_add_text_button:{
		fontFamily:'Varela-Round',
		fontSize:12,
		color:'white'
	},
	modal_add_input:{
		borderColor:'white',
		borderWidth:0.6,
		borderRadius:10,
		paddingHorizontal:10
	},
	modal_button_adicionar: {
		backgroundColor:'#72B853',
		borderRadius:5,
		alignItems:'center',
		paddingHorizontal:15,
		paddingVertical:5,
		elevation:10
	},
	modal_button:{
		paddingHorizontal:20,
		borderRadius:5,
		paddingVertical:3
	},
	container_flat_categories:{
		borderRadius:15,
		backgroundColor:'#F5F5F5',
		height:'50%',
		width:'60%',
		alignItems:'center',
		position:'absolute',
		zIndex:2,
		borderWidth:0.5,
		borderColor:'gray'
	},
	container_button_add_categories:{
		marginVertical:5,
		alignItems:'center',
		borderWidth:0.5,
		borderRadius:10,
		marginHorizontal:20,
		paddingVertical:3, 
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:10,
		borderColor:'#5F49A9',
		marginTop:10,
		gap:10,
		backgroundColor:'#6048AC'
	},
	container_button_close_modal_categories:{
		width:'100%',
		alignItems:'flex-end',
		paddingRight:5,
		position:'absolute',
		marginTop:8,
		borderRadius:10
	},
	text_button_add_categories:{
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		color:'white'
	},
	flat_list_categories:{
		borderRadius:20,
		width:'100%',
		marginTop:'5%'
	},
	text_item_categories:{
		fontSize:15,
		fontFamily:'Varela-Round'
	},
	circle:{
		width:10,
		height:10,
		borderRadius:20,
	},
	item_buttom_categories_list:{
		alignItems:'center',
		marginVertical:2,
		flexDirection:'row',
		gap:10,
		borderBottomWidth:1,
		borderBottomColor:'rgba(0, 0, 0, 0.3)',
		paddingVertical:5,
		marginHorizontal:10
	},
	container_modal_create_categories:{
		backgroundColor:'#F5F5F5',
		width:'60%',
		height:250,
		borderRadius:15,
		alignItems:'center',
		paddingVertical:10,
		paddingHorizontal:5
	},
	text_modal_create_categories:{
		width:'100%',
		color:"#5F49A9",
		fontFamily:"Quicksand-Bold",
		fontSize:15
	},
	input_add_name_category:{
		width:'100%',
		borderRadius:10,
		borderWidth:1,
		borderColor:'#5F49A9',
		paddingStart:10,
		marginTop:10,
	},
	button_picker_colors:{
		width:20,
		height:20,
		borderRadius:10,
		borderWidth:2,
		backgroundColor:'red'
	},
	container_buttons_picker_colors:{
		width:"80%",
		gap:20,
		marginTop:10
	},
	container_line_colors:{
		width:'100%',
		justifyContent:'space-between',
		flexDirection:'row'
	}
});

export default styles;