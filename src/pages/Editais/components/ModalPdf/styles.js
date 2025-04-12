import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		backgroundColor:'rgba(0, 0, 0, 0.4)',
		flex:1
	},
	container_modal:{
		flex:1
	},
	container_header:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		backgroundColor:"#24125A",
		paddingEnd:20
	},
	image:{
		width:Dimensions.get('screen').width * 0.2,
		height:Dimensions.get('screen').width * 0.2,
	}
})