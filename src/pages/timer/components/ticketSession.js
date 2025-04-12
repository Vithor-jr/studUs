import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { SvgXml } from "react-native-svg";
import { icons } from "../../../../assets/svg/iconsTimer";
import { styles } from "./styles";
import ModalPressSession from "./ModalPress";

export default function TicketSession({id, setData, title, duration, start, end, category }) {
	const startAt = start ? moment(start).utcOffset('-04:00').format('HH:mm') : 'N/A';
	const endAt = end ? moment(end).utcOffset('-04:00').format('HH:mm') : 'N/A';
	const [modalVisible, setModalVisible] = useState(false)

	const formatDuration = (durationInSeconds) => {
		const hours = Math.floor(durationInSeconds / 3600);
		const minutes = Math.floor((durationInSeconds % 3600) / 60);
		const seconds = durationInSeconds % 60;

		if (hours > 0) {
			if(minutes !==0){
				if(seconds!==0) return `${hours}h ${minutes}m ${seconds}s`;
				else return `${hours}h ${minutes}m`;
			} else {
				if(seconds!==0) return `${hours}h  ${seconds}s`;
				else return `${hours}h`;
			}
		} else if (minutes > 0) {
			if(seconds !== 0)
				return `${minutes}min ${seconds}s`;
			else 	return `${minutes}min`;
		} else {
			return `${seconds}s`;
		}
	};

	const formattedDuration = formatDuration(duration);

	return (
		<TouchableOpacity
			onLongPress={()=>setModalVisible(true)}
			style={styles.conatainer_ticket_sessions}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<Text numberOfLines={1} style={styles.text_title_ticket_sessions}>{title}</Text>

				<View style={{ flexDirection: 'row', alignItems: 'center', gap: 5}}>
					<SvgXml xml={icons.watch_black} width={12} height={12}/>
					<Text numberOfLines={1} style={{...styles.text_hours_ticket_sessions, fontSize:12}}>
						{startAt} - {endAt}
					</Text>
				</View>
			</View>

			<View style={{ flexDirection: 'row', gap: 5, marginTop: 5, alignItems: 'center' }}>
				<View style={{ ...styles.circle, backgroundColor: category ? category.color : 'red' }} />
				<Text style={{ ...styles.text_hours_ticket_sessions, color: '#7E7E7E' }}>Categoria: {category && category.name}</Text>
			</View>

			<View style={{ flexDirection: 'row', gap: 5, marginTop: 5, alignItems: 'center' }}>
				<Text style={{ ...styles.text_hours_ticket_sessions, color: '#7E7E7E' }}>Duração</Text>
				<Text style={styles.text_duration_ticket_sessions}>{formattedDuration}</Text>
			</View>

			{
				modalVisible && <ModalPressSession sessionId={id} setData={(value) => setData(value)} onClose={()=>setModalVisible(false)}/>
			}
		</TouchableOpacity>
	);
}
