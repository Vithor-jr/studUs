import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'rgba(0, 0, 0, 0.6)'
	},
	container_modal:{
		backgroundColor:'white',
		alignItems:'center',
		justifyContent:'center',
		borderBottomEndRadius:20,
		borderBottomStartRadius:20,
		width:'100%',
		padding:10
	},
	container_back_modal:{
		backgroundColor:'#CBC6DA',
		alignItems:'flex-end',
		justifyContent:'flex-end',
		borderRadius:20,
		width:'55%',
	},
	conatainer_header_modal:{
		flexDirection:'row',
		gap:10,
		alignItems:'center'
	},
	container_input:{
		justifyContent:'flex-end',
		alignItems:'flex-end',
		width:'100%', 
		height:95,
		backgroundColor: '#E0E0E0',
		paddingBottom:15,
		marginVertical:20,
		borderRadius:5
	},
	input:{
		width:'100%', 
		height: 80,
		fontFamily:'Varela-Round',
		paddingHorizontal:5,
		fontSize:12,
		textAlignVertical: 'top', 
		borderRadius:5,
	},
	button:{
		paddingHorizontal:20,
		paddingVertical:5,
		borderRadius:5,
		backgroundColor:'#72B853',
		elevation:10
	},
	text_length:{
		position:'absolute',
		fontSize:10,
		color:'#929292',
		right:5
	},
	text_button:{
		fontFamily:'Varela-Round',
		color:'white'
	},
	text_catgories:{
		fontFamily:'Quicksand-Bold',
		fontSize:12,
		maxWidth:'40%',
	}
})