import { StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('screen').width
const heigthImage = (width - 20 ) * (113/317)

export const styles = StyleSheet.create({
	container:{
		flex:1,
		gap:5,
		marginTop:10,
		alignItems:'center'
	},
	image:{
		width:width - 20,
		height:heigthImage - 10,
		resizeMode:'stretch'
	}
})