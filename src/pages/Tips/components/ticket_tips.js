import {
	View,
	TouchableOpacity,
	Text
} from 'react-native'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { iconsActivitys } from '../../../../assets/svg/iconsMethods'
import { useEffect, useState } from 'react'

//index = {0, 1, 2, 3, ...}


export default function TicketTips({texts, index}){
	const [background, setBackground] = useState('')
	const [explicationVisible, setExplicationVisble]=useState(false)

	useEffect(()=>{
		function getBacgroundColor(){
			//0, 4, 8,.. -> color 1
			//1, 5, 9... -> color 2
			//2, 6, 10, ... -> color 3
			//3, 7, 11, ... -> color 4

			for(let i=index; i >= 0; i-=4){
				if(i==0){
					setBackground('#C7D7F8')
				} else if(i==1){
					setBackground('rgba(214, 165, 236, 0.7)')
				} else if(i==2){
					setBackground('rgba(152, 136, 229, 0.7)')
				} if(i==3){
					setBackground('rgba(243, 178, 221, 0.8)')
				}
			}
		}

		getBacgroundColor()
	}, [index])

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
						<Text style={styles.text_title_ticket_tips}>{texts.title}</Text>
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
				<View style={{...styles.container_bottom_texto_ticket, backgroundColor:background, opacity:0.5}}>
					<Text style={styles.text_bottom_ticket_body}>
						{texts.body}
					</Text>
				</View>
			}
		</View>
	)
}