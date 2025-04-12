import React, {useEffect, useState} from "react";
import { 
	View,
	Modal,
	ActivityIndicator,
	StyleSheet
} from "react-native";


export default function IndicatorModal() {
	return(
		<Modal
			transparent={true}
			animationType="slide"
		>
			<View style={styles.container}>
				<ActivityIndicator color='#6048AC' size={70}/>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgba(0,0,0,0.1)',
		alignItems:'center',
		justifyContent:'center'
	}
})