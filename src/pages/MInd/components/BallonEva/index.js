import { Image, View, Text, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg_mind } from "../../../../../assets/Mind_Images/Svg/svgs";
import { styles } from "./styles";

const width = Dimensions.get('window').width

export default function BallonEva({message}){
	return(
		<View style={styles.container}>
			<View style={styles.container_ballon}>
				<SvgXml xml={svg_mind.ballon_eva} width={width*0.6} height={width*0.15}/>
				<Text style={styles.text}>{message && message}</Text>
			</View>

		<View style={styles.container_eva}>
			<Text style={styles.text_eva}>Eva</Text>
			<Image
					style={styles.image_eva}
					source={require('../../../../../assets/images/eva.png')}
			/>
		</View>
		</View>
	)
}