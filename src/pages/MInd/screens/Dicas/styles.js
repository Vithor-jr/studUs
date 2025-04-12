import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#1A0F49'
	},
	image: {
		position:'absolute',
		width:width,
		height: width * (301/360)
	},
	title:{
		fontSize:24,
		fontFamily:"Quicksand-Bold",
		color:'white',
	},
	subtitle: {
		fontSize:13,
		marginTop:5,
		fontFamily:"Varela-Round",
		color:'white'
	},
	header: {

	}
})