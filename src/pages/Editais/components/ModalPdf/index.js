import { 
	Modal, 
	TouchableOpacity, 
	Text, 
	Image,
	View 
} from "react-native";
import WebView from "react-native-webview";
import { styles } from "./styles";
import { SvgXml } from "react-native-svg";
import svgs from "../../../../../assets/svg";

export default function ModalPdf({onClose, uri}){
	return(
		<Modal
			transparent
			animationType="fade"
		>
			<View style={styles.container}>
				<View style={styles.container_modal}>
					<View style={styles.container_header}>
						<Image
							source={require('../../../../../assets/images/icon.png')}
							style={styles.image}
						/>
						<TouchableOpacity onPress={onClose}>
							<SvgXml xml={svgs.svgIconX}/>
						</TouchableOpacity>
					</View>

					<WebView
						mediaPlaybackRequiresUserAction
						source={{ uri: uri }}
					/>
				</View>
			</View>
		</Modal>
	)
}