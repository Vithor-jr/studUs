import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		width: Dimensions.get('window').width * 0.4,
		height: Dimensions.get('window').width * 0.4
	},
	image:{
		width: Dimensions.get('window').width * 0.4,
		borderRadius:10,
		height: Dimensions.get('window').width * 0.4
	},
	view: {

	},
	image_vestibular: {
		width: Dimensions.get('window').width * 0.37,
		borderRadius:10,
		top:5,
		alignSelf:'center',
		height: (Dimensions.get('window').width * 0.37) * (106/143)
	},
	text_year:{
		position:'absolute',
		bottom:6,
		right:10,
		fontSize:12,
		color:'white',
		fontFamily:'Varela-Round',
		backgroundColor:'#24125A',
		paddingHorizontal:10,
		borderRadius:5
	},
	text_type:{
		fontSize:14,
		marginTop:2,
		width: Dimensions.get('window').width * 0.37,
		color:'white',
		fontFamily:'Quicksand-Bold',
	}
})