import React, { useEffect, useState } from 'react';
import { 
	TouchableOpacity,
	View,
	Text,
	Image,
	Dimensions,
	Linking
} from "react-native";
import { styles } from "./styles";
import { SvgXml } from 'react-native-svg';
import { svg } from '../../data/svg';

const width = Dimensions.get('window').width

export default function TicketToday({ytUrl, name, type, title, size, index, url }) {
	const openYouTube = () => {
    ytUrl &&  Linking.openURL(ytUrl);
  };

	return (
		<View style={styles.container}>
			<View style={styles.container_circle_line}>
				<View style={styles.circle} />
				{
				 	size === 4 ? (index !== 3 && <View style={styles.line} />) :
					size === 3 ? (index !== 2 && <View style={styles.line} />) :
					size === 2 ? (index !== 1 && <View style={styles.line} />) :
					null
				}
			</View>

			<View>
				<Text style={styles.number_meditacao}>{name}</Text>
				<View 
					style={styles.container_card}
				>
					<Image style={styles.image} source={url} />
					
					<View style={{width:'30%'}}>
						{
							type === 'Som' ? <SvgXml xml={svg.somPurple} width={width * 0.04} height={width* 0.04}/>
							: <SvgXml xml={svg.meditacaoPurple} width={width * 0.08} height={width* 0.08 *(18/27)}/>
						}
						<Text style={styles.text_title}>{title}</Text>
					</View>
					
					<View style={{justifyContent:'flex-end'}}>
						<TouchableOpacity onPress={openYouTube} style={styles.container_button}>
							<Text style={styles.text_type}>Clique</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
