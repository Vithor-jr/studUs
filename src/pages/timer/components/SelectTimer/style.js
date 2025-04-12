import { StyleSheet }from 'react-native'

export const styles = StyleSheet.create({
	container:{
		backgroundColor:'#DADADA',
		borderRadius:15,
		width:'80%',
		marginStart:'10%',
		marginVertical:30,
		paddingStart:20,
		paddingVertical:10,
	},
	container_number:{
		gap:5,
		marginVertical:5,
		flexDirection:'row',
		paddingEnd:20
	},
	text:{
		fontFamily:"Quicksand-Bold",
		fontSize:15,
	},
	text_number:{
		fontFamily:"Quicksand-Bold",
		fontSize:18,
		paddingHorizontal:5,
		borderRadius:10
	},
	text_bottom:{
		fontFamily:"Quicksand-Bold",
		color:"#959595",
		fontSize:13,
	}
})