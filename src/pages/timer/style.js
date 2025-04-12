import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#6048AC'
	},
	container_top: {
		width: '100%',
		padding:20,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	container_back_timer: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		position:'absolute'
	},
	container_timer: {
		alignItems:'center',
		justifyContent:'center',
		paddingBottom:10,
	},
	circle_timer_image: {
		width:240,
		height:240,
		borderRadius:150,
		position:'absolute',
		backgroundColor:'white',
	},
	text_timer: {
		textAlign:'center',
		fontFamily:'Varela-Round',
		color:'white',
		fontSize:50,
		marginVertical:30
	},
	container_button: {
		width:'45%',
		alignItems:'center',
		padding:10,
		backgroundColor:'#9614D0',
		borderRadius:50
	},
	container_text_button :{
		paddingHorizontal:20,
		paddingVertical:3,
		borderWidth:1,
		flexDirection:'row',
		gap:5,
		borderColor:'rgba(255, 255, 255, 0.32)',
		borderRadius:20,
		alignItems:'center'
	},
	text_button :{
		fontFamily:'Varela-Round',
		fontSize:13,
		color:'white'
	},
	container_focus: {
		backgroundColor:'#3B267B',
		borderRadius:10,
		paddingVertical:4,
		paddingHorizontal:8,
		justifyContent:'space-around',
		marginTop:10,
		flexDirection:'row',
		gap:5
	},
	container_focus_line:{
		width:1,
		height:'100%',
		backgroundColor:'white'
	},
	circle:{
		width:10,
		height:10,
		borderRadius:10
	}
});

export default styles