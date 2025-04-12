import React, { useEffect, useState } from 'react';
import { 
	TouchableOpacity,
	View,
	Text,
	Image
} from "react-native";
import { styles } from "./styles";

export default function MethodAnsiedade({ title, size, navigation, labelButtom, index, subtitle, url }) {
	const [subtitleNavigate, setSubtitle] = useState()

	useEffect(() => {
		if(title === '5 sentidos'){
			setSubtitle('Técnica 5-4-3-2-1')
		} else {
			setSubtitle('meditação mindfulness')
		}
	}, [])

	const navigate = () => {
		if (title === 'Respiração') {
			navigation.navigate('Respiracao')
		} else {
			navigation.navigate('MethodScreen', {title, url, navigation, subtitleNavigate})
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.container_circle_line}>
				<View style={styles.circle} />
				{
					size > 1 && (index !== 4 && <View style={styles.line} />)
				}
			</View>

			<TouchableOpacity 
				onPress={navigate}
				style={styles.container_card}
			>
				<Image style={styles.image} source={url} />
				<View style={{ alignItems: 'flex-start', gap: 5, flex: 1 }}>
					<View>
						<Text style={styles.text_title}>{title}</Text>
						<Text style={styles.text_subtitle}>{subtitle}</Text>
					</View>
					<View style={styles.container_type}>
						<View style={styles.litleCircle} />
						<Text style={styles.text_type}>{labelButtom}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}
