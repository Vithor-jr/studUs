import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { iconsActivitys } from "../../../../assets/svg/iconsMethods";

export default function Subtitle({title}){
	return(
		<View style={styles.container_title}>
			<SvgXml xml={iconsActivitys.iconStartPuple}/>
			<Text style={styles.text_title}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container_title:{
		width:'100%',
		flexDirection:'row',
		gap:5
	},
	text_title:{
		color:'#6048AC',
		fontSize:16,
		fontFamily:'Quicksand-Bold'
	}
})