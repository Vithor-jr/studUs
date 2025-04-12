import { StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const calculatedHeight = screenWidth * (599 / 360);


const styles = StyleSheet.create({
	containerChat:{
		flex:1,
		backgroundColor: 'white',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	}, 
	container_top: {
		width: '100%',
		backgroundColor:'white',
		zIndex:1
	},
	container_eva: {
		alignItems:'center', 
		width:'100%', 
		height:'100%',
		position:'absolute',
		justifyContent:'center',
		backgroundColor:'#6048AC',
	},
	bublle_loading: {
		padding: 10,
		borderRadius: 10,
		maxWidth:152,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor:'#E9E8E8'
	},
	container_buttons_chat: {
		height:'10%',
		marginHorizontal:'15%',
		justifyContent:'space-between',
		flexDirection:'row',
		alignItems:'center'
	},
	text_buttons_chat:{
		fontFamily:'Varela-Round',
		fontSize:13,
		color:'#E84D35',
	},
	container_buttons_calendar: {
		flexDirection:'row',
		justifyContent:'flex-end',
		gap:10
	},
	text_buttons_calendar:{
		fontFamily:'Varela-Round',
		fontSize:13,
		color:'black',
	},
	container_father_calendar:{
		flex:1,
		backgroundColor:'white',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	}, 
	container_activitys: {
		width:'100%',
		justifyContent:'space-between',
		flexDirection:'row',
		flexWrap:'wrap'
	},
	container_flat_list:{
		width:'100%',
		height:'70%',
		marginTop:'5%'
	},
	text_activitys_home:{
		color:'black',
		fontFamily:'Varela-Round',
		fontSize:18,
		textShadowColor:'black',
		textShadowRadius:1
	},
	text_message_activitys:{
		fontFamily:'Varela-Round',
		marginVertical:'10%',
		color:'rgba(0, 0, 0, 0.6)',
		fontSize:13,
		width:'100%',
		textAlign:'center'
	},
	text_top_chat: {
		color:'#17A1FA',
		marginTop:20,
		fontFamily:'Varela-Round',
		fontSize:16,
		borderBottomColor:'#17A1FA',
		borderBottomWidth:4
	},
	container_text_top_chat: {
		borderBottomColor:'#E2E2E2',
		borderBottomWidth:2,
		alignItems:'center'
	}
});

export {styles}