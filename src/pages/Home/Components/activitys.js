import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../assets/svg';

const Activity = ({activity, index, type}) => {
    if (!activity) {
        return null;
    }
    let date = new Date(activity.dueDate);
    let formattedDate = date.getUTCDate() + " | " + ("0" + (date.getUTCMonth() + 1)).slice(-2);

    function getBackground() {
        if(type ==='Today' || type === 'Week'){
          return svgs.svgGradientTodayActivity
        } else {
          return svgs.svgGradientImportantActivity
        }
      }
      
    return (
      <View style={{...styles.card, marginStart: index === 0 ? 20 : 0}}>
        <View>
          <SvgXml xml={getBackground()}/>
          
          <View style={styles.container_card_body}>
            <Text style={{...styles.text_type,}}>{activity.type}</Text>
            <Text style={styles.text_name} numberOfLines={1} ellipsizeMode='tail'>{activity.name}</Text>
            <Text style={styles.text_entrega}>data de entrega: </Text>
            <View style={{width:125, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.text_date}>{formattedDate}</Text>
            </View>  
          </View>
        </View>
      </View>
  
    );
  };

export default Activity;
