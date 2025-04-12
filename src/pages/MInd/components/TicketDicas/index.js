import {
	View,
	TouchableOpacity,
	Text
} from 'react-native'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { iconsActivitys } from '../../../../../assets/svg/iconsMethods'
import { useEffect, useState } from 'react'


export default function TicketDicas({title, body, background, backgroundFrame, index}){
	const [explicationVisible, setExplicationVisble]=useState(false)

	return(
		<View style={{marginBottom:10}}>
			<TouchableOpacity
				onPress={()=>setExplicationVisble(!explicationVisible)}
				style={{
					...styles.ticket_tips,
				  backgroundColor:background,
					borderBottomStartRadius:explicationVisible ? 0 : 15,
					borderBottomEndRadius:explicationVisible? 0 : 15
				}}
			>
				<View style={styles.container_texts_icon}>
					<SvgXml xml={iconsActivitys.iconStartPuple}/>
					<View>
						<Text style={styles.text_title_ticket_tips}>{title}</Text>
						<Text style={styles.text_ticket_subtitle}>Toque para ver detalhes</Text>
					</View>
				</View>
				
				<View style={{padding:5, backgroundColor:explicationVisible ? 'white':'transparent', opacity:0.3, alignItems:'center', justifyContent:'center', borderRadius:20,}}>
					<SvgXml 
						xml={iconsActivitys.iconThreePoints}
						style={{
							transform: [{ rotate: '90deg' }]
						}}/>
				</View>
			</TouchableOpacity>

			{
				explicationVisible && 
				<View style={{...styles.container_bottom_texto_ticket, backgroundColor:backgroundFrame}}>
					<Text style={styles.text_bottom_ticket_body}>
						{body}
					</Text>
				</View>
			}
		</View>
	)
}