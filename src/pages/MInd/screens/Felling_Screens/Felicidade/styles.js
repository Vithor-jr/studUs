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

	subtitle: {
		fontFamily:'Quicksand-Bold',
		fontSize:18,
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
})