import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{

	},
	title: {
		fontFamily:'Quicksand-Bold',
		fontSize:20,
		marginVertical:10,
		color:'white'
	},

	paragraph: {
		color:'white',
		fontFamily:'Varela-Round'
	},

	listItem: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	bullet: {
			fontSize: 16,
			lineHeight: 24,
			color:'white',
			fontFamily:'Varela-Round',
			marginRight: 8,
	},
	listItemText: {
			flex: 1,
			color:'white',
			fontFamily:'Varela-Round',
			fontSize: 16,
			lineHeight: 24,
	},
	footer: {
		height:50
	},
	container_input:{
		alignItems:'center',
		justifyContent:'center',
		marginVertical:15,
	},
	placeholder_input_search:{
		color:'#999999',
		fontFamily:'Varela-Round',
		fontSize:12
	},
	text_input_search:{
		backgroundColor:'#F6F6F6',
		borderRadius:10,
		textAlign:'center',
		paddingHorizontal:30,
		paddingVertical:7,
		width:'100%',
	},
})