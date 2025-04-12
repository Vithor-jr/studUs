import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export default function TodayCard({ title, subtitle_1, subtitle_2, svg, svg_title, url}) {
  const navigate = useNavigation()

  return (
    <TouchableOpacity 
      onPress={() => {
        if(title === 'Meditações') {
          navigate.navigate('Meditacoes')
        } else if(title === 'Sons') {
          navigate.navigate('Sons')
        } else if(title === 'Conversar'){
          navigate.navigate('Amigo')
        }
      }}  
      style={styles.container_card}
    >
      <View style={styles.container_first_image}>
        <View style={styles.container_second_image}>
          <View style={styles.container_tirth_image}>
            {
						svg ? <SvgXml xml={svg} width={width*0.25} height={width*0.2}/> : 
						(
							url ? <Image source={url} style={styles.image}/> 
							: <View style={styles.image} />)
						}
          </View>
        </View>
      </View>

      <View style={{ width: '45%', paddingBottom:7, paddingTop:8 }}>
        <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
					<Text style={styles.label}>{title}</Text>
					{svg_title && <Image source={svg_title} style={styles.image_eva}/>} 
				</View>

        <View style={{ width: '70%', gap: 5 }}>
          <Text style={styles.label_subtitle}>{subtitle_1}</Text>
          <Text style={styles.label_subtitle}>{subtitle_2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}