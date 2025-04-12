import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 16,
		alignItems:'flex-start'
	},
	dropdown: {
		width:'30%',
		borderRadius: 10,
		paddingStart:10,
		paddingEnd:5
	},
	selectedTextStyle: {
		fontSize: 20,
		fontFamily:'Varela-Round',
		color:'white'
	},
	iconStyle: {
		width: 30,
		height: 30,
	},
	item_text: {
		fontFamily:'Varela-Round',
		color:'black',
		textAlign:'center'
	},
	item_container: {
		borderTopWidth:1,
		borderTopColor:'rgba(112, 111, 111, 0.18)'
	},
	container_bottom:{
		borderBottomRightRadius:10,
		borderBottomLeftRadius:10
	}
});