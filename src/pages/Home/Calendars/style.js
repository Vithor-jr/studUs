import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container_calendar: {
		backgroundColor:'white',
	},
	text_month: {
		fontFamily: 'Varela-Round',
		fontSize: 11,
		backgroundColor: '#E0DFDF',
		borderRadius: 4,
		padding:5,
	},
	text_number:{
		fontFamily: 'Varela-Round',
		fontSize: 11
	},
	container_calendar_week: {
		height:'100%',
		padding:0
	},
	text_calendar_week: {
		color: '#B3B3B3',
		fontFamily: 'Varela-Round',
		fontSize: 11,
		textTransform:'capitalize',
	},
	text_month_year :{
		color:'black',
		fontFamily:'Varela-Round',
		fontSize:11,
		backgroundColor:'#E0DFDF',
		padding:5,
		borderRadius:4,
		marginVertical:6
	},
	header_week_names:{
		paddingBottom:'10%'
	},
	line_calendar_week: {
		width:'100%', 
		height:2,
		backgroundColor:'#E0DFDF',
		position:'absolute',
		marginTop:'27%'
	},
	day_modal_calendar: {
		width:27, 
		height:27,
		borderRadius:10,
		alignItems:'center',
		justifyContent:'center',
		marginVertical:-2,
	},
	container_day_week:{
		justifyContent:"center",
		alignItems:'center'
	},
	container_week_name:{
		position:'absolute',
		width:'100%',
		borderBottomColor:'#E0DFDF',
		borderBottomWidth:2,
		paddingBottom:5,
		paddingHorizontal:12,
		top:'30%',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	container_day:{
		width:27,
		height:27,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5
	}
});

export {styles}