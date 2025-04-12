import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const TicketActivity = ({activity}) => {
    if (!activity) {
        return null;
    }
    let date = new Date(activity.dueDate);
    let day = date.getUTCDate()
    let formattedDate = date.getUTCDate() + " | " + ("0" + (date.getUTCMonth() + 1)).slice(-2);
    
    function getBackgroundImage(type) {
        switch(type) {
          case 'Vestibular':
            return '#17A1FA'
          case 'Escola':
            return '#17A1FA'
          default:
            return 'gray'
        }
      }
      
    return (
      <View style={{marginEnd:10, borderRadius:20}}>
				<View style={styles.container_ticket}>
						<View style={{width:'60%', justifyContent:'space-between', flexDirection:'column', gap:10}}>
              <Text style={{...styles.container_ticket_type, backgroundColor:getBackgroundImage(activity.type)}}>{activity.type}</Text>
              <View style={{gap:3}}>
                <Text style={styles.container_ticket_name}>{day} - {activity.name}</Text>
                <Text style={styles.container_ticket_time_entregar}>data de entrega: </Text>
              </View>
						</View>

						<View style={{alignItems:'center'}}>
							<View style={{width:'100%', justifyContent:'center', alignItems:'center', gap:10}}>
                  <Text style={styles.container_ticket_tecnica}>Técnica(s)</Text>
                  <Text style={styles.container_ticket_text_tecnicas}>{formattedDate}</Text>
							</View>
						</View>
				</View>
      </View>
  
    );
  };

export default TicketActivity;
