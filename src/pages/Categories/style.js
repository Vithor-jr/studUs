import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#6048AC'
	},
	container_form: {
		flex:1,
		backgroundColor:'white',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		paddingHorizontal:'10%',
		alignItems:'center',
		marginTop:'10%'
	},
	container_top: {
		width: '100%',
		padding:20,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	container_input:{
		alignItems:'center',
		justifyContent:'center',
		marginVertical:15,
	},
	placeholder_input_search:{
		color:'#999999',
		fontFamily:'Varela-Round',
		fontSize:12
	},
	text_input_search:{
		backgroundColor:'#F6F6F6',
		borderRadius:10,
		textAlign:'center',
		paddingHorizontal:30,
		paddingVertical:7,
		width:'100%',
	},
	container_list_categories: {
		width:'100%',
		marginTop:'15%',
	},
	items_categories: {
		color:'#000',
		fontFamily:'Varela-Round',
		fontSize:15,
		width:'70%'
	},
	container_item_categories: {
		width:'100%',
		flexDirection:'row',
		gap:10,
		padding:8,
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor: 'rgba(112, 111, 111, 0.18);'
	},
	circle: {
		width:10,
		height:10,
		borderRadius:50,
	},
	addButton: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    backgroundColor: '#6048AC',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
	container_button_add:{
		width:'100%',
		height:'100%',
		position:'absolute',
	},
	flat_list:{
		marginBottom:'17%'
	},
	input_add:{
		fontFamily:'Varela-Round',
		fontSize:15,
		width:'90%',
	},
	container_picker_colors:{
		width:200,
		backgroundColor:'#E5E5E5',
		borderBottomStartRadius:20,
		borderBottomEndRadius:20,
		paddingHorizontal:10,
		paddingVertical:5,
		marginStart:'15%',
		gap:10
	},
	container_line_colors:{
		width:'100%',
		justifyContent:'space-between',
		flexDirection:'row'
	},
	button_picker_colors:{
		width:20,
		height:20,
		borderRadius:10,
		borderWidth:2,
		backgroundColor:'red'
	},
});

export default styles