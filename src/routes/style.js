import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
		modalContainer: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
		modalContent: {
			backgroundColor: '#FFF',
			padding: 20,
			borderRadius: 10,
			alignItems: 'center',
		},
		modalText: {
			textAlign: 'center',
			fontFamily:'Varela-Round',
			fontSize: 16,
			marginBottom: 20,
		},
		modalButton: {
			fontFamily:'Varela-Round',
			fontSize: 18,
			color: '#FFF',
		},
		errorIconContainer: {
			marginBottom: 10,
			alignItems: 'center',
		},
		container_button: {
			alignItems:'center',
			justifyContent:'space-evenly',
			flexDirection:'row',
			width:'70%'
		},
		button_canceled: {
			alignItems:'center',
			justifyContent:'center',
			backgroundColor:'#D6D0E7',
			paddingVertical:3,
			paddingHorizontal: 5,
			borderRadius:10
		},
		button_logout: {
			alignItems:'center',
			justifyContent:'center',
			backgroundColor:'red',
			paddingVertical:3,
			paddingHorizontal:5,
			borderRadius:10
		},
		button_drawer:{
			flexDirection: 'row',
			alignItems: 'center',
			width:'110%',
			borderBottomColor: 'rgba(255, 255, 255, 0.18)',
			borderBottomWidth: 1, 
			paddingBottom:4
		}
	}	
);

	export{styles};