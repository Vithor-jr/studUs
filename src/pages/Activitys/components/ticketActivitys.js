import React, {useState} from 'react';
import { View, Text, Pressable} from 'react-native';
import styles from '../styles';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../assets/svg';
import ModalCrud from './modalCrud';

const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

const ListActivity = ({activity, index, type}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

    if (!activity) {
        return null;
    }

		function defineBackground(){
			if(type === 'atribuida'){
				return '#CEADCF'
			} else if (type === 'concluida'){
				return '#6E6E6E'
			} else {
				return '#FF7300'
			}
		}

		function defineColorMessage(){
			if(type === 'atribuida'){
				return '#5EB952'
			} else if (type === 'concluida'){
				return '#6E6E6E'
			} else {
				return '#E84D35'
			}
		}
		function formatarData(dataString) {
			const localDateString = dataString.slice(0, -1);
		
			const data = new Date(localDateString);
			const dia = data.getDate();
			const mes = meses[data.getMonth()];
			const ano = data.getFullYear();
			return `${dia} de ${mes} de ${ano}`;
		}
		
		const newDate = formatarData(activity.dueDate);


    return (
      <Pressable
				style={styles.conatiner_ticket_activitys}
				onPress={(event) => {
					const locationX = event.nativeEvent.pageX;
					const locationY = event.nativeEvent.pageY;
					setPosition({ x: locationX, y: locationY });
					setIsVisible(true);
				}}
				
			>
					{isVisible && type!=='concluida' && (
						<ModalCrud functionOnClose={()=>setIsVisible(false)} activityId={activity.id} position={{ x: position.x, y: position.y }} />
					)}
						
				<View style={styles.container_activity_title}>
					<View style={{...styles.container_circle, backgroundColor: defineBackground()}}>
						<SvgXml xml={svgs.svgIconActivity}/>
					</View>

					<View>
						<Text style={styles.text_title_activity}>{activity.name}</Text>
						<Text style={styles.text_category_activity}>Categoria: {activity.category.name}</Text>
					</View>
				</View>

				<View>
						<Text style={{...styles.text_entrega, color:defineColorMessage()}}>
							{type === 'concluida' ? 'Conluída' : newDate}
						</Text>
				</View>
      </Pressable>
  
    );
  };

export default ListActivity;
