import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
	container_card:{
		backgroundColor:'#3B267B',
		borderRadius:15,
		alignItems:'center',
	},
	image:{
		borderTopLeftRadius:15,
		borderTopRightRadius:15,
		width:width*0.35,
		height:width*0.3
	},
	label:{
		color:'white',
		paddingTop:5,
		paddingBottom:10,
		fontFamily:'Quicksand-Bold'
	}
})