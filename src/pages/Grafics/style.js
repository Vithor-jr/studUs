import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#6048AC',
	},
	container_body:{
		position:'absolute',
		bottom:0,
		paddingTop:20,
		height:'80%',
		width:'100%',
		borderTopEndRadius:50,
		borderTopStartRadius:50,
		backgroundColor:'white'
	},
	title:{
		marginTop:-5,
		color:"#FFF",
		fontSize:25,
		fontFamily:'Quicksand-Bold'
	},
	subtitle:{
		color:"rgba(255, 255, 255, 0.5)",
		fontFamily:'Varela-Round',
		fontSize:16
	},
	container_topic:{
		flexDirection:'row',
		gap:5
	},
	text_subtopic:{
		color:"#CBCBCB",
		fontFamily:"Quicksand-Bold"
	},
	text__topic:{
		color:"#6048AC",
		fontSize:20,
		fontFamily:"Quicksand-Bold"
	},

	//~~~~~~~~~~~~~~~~~~~~~Grafic Colmuns~~~~~~~~~~~~~~~~~
	container_bar:{
		backgroundColor:'#FFFFFF',
		marginHorizontal:20,
		padding:5,
		borderRadius:20,
		elevation:5
	},
	label_bar:{
		fontFamily:"Varela-Round",
		color:"#A6A6A6"
	},
	line:{
		
	},
	container_text_min:{
		position:'absolute',
		height:width*0.58,
		marginStart:width*0.01,
		justifyContent:'flex-end'
	},

	//´~~~~~~~~~~~~~~~~~~~~Grafic Line~~~~~~~~~~~~~~~~~~~~~

	container_emoji:{
		height:width*0.47,
		marginHorizontal:5,
		marginVertical:10,
		alignItems:'center',
		position:'absolute',
		justifyContent:'space-between'
	},
	emoji:{
		padding:5,
		borderRadius:5
	}
});

export default styles