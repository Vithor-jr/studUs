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
		alignItems:'center'
	},
	container_top: {
		position:'absolute',
		width: '100%',
		padding:20,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	container_user: {
		flexDirection:'row',
		alignItems:'center',
		paddingTop:20,
		paddingBottom:10,
		marginHorizontal:'20%',
		justifyContent:'space-between'
	},
	container_image: {
		width: width * 0.22,
		height: width * 0.22,
		alignItems: 'center',
		justifyContent: 'center', 
		position:'absolute'
	},
	container_input_image: {
		width: width * 0.22,
		height: width * 0.22,
		justifyContent:'flex-end',
		flexDirection:'row'
	},
	button_image: {
		backgroundColor: '#BABABA',
		borderRadius:10,
		width:20,
		height:20,
		alignItems:'center',
		justifyContent:'center'
	},
	input: {
		paddingLeft: 20,
		paddingRight: 20,
		height: 34,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#3B267B",
		backgroundColor:'white'
	},
	button: {
		width:'60%',
		paddingVertical: 7,
		alignItems:"center", 
		marginTop:'30%', 
		backgroundColor:'#72B853', 
		borderRadius:10,
	},
	text_user: {
		color: 'white',
		fontFamily: 'Varela-Round',
		fontSize: 17, 
		flexWrap: 'wrap'
	},
	androidShadow: {
    elevation: 5,
  },
  iosShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
	label_input:{
		fontSize: 15,
		fontFamily:'Varela-Round'
	},
	container_input: {
		marginTop: '25%',
		gap: 10
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#FFF',
		paddingVertical: '8%',
		paddingHorizontal:'5%',
		borderRadius: 10,
		alignItems: 'center',
		maxWidth:'80%'
	},
	modalText: {
		textAlign: 'center',
		fontFamily:'Quicksand-Bold',
		fontSize: 16,
		marginBottom: '15%',
	},
	modalButton: {
		fontFamily:'Quicksand-Bold',
		fontSize: 13,
		textAlign:'center',
		color: '#FFF',
	},
	errorIconContainer: {
		marginBottom: 10,
		alignItems: 'center',
	},
	container_button: {
		alignItems:'center',
		justifyContent:'space-evenly',
		flexDirection:'row',
		width:'70%',
	},
	button_canceled: {
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#B3B3B3',
		paddingVertical:5,
		paddingHorizontal: 10,
		borderRadius:5
	},
	button_update: {
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#72B853',
		paddingVertical:5,
		paddingHorizontal:10,
		borderRadius:5
	},
	erroMessage: {
		fontFamily:'Varela-Round',
		fontSize:13,
		color:'red'
	}
});

export default styles