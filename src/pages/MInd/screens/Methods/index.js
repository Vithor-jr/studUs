import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

import Header from '../../components/Header/header';
import FiveSense from '../Methods_Screens/FiveSense';
import AncoraVisual from '../Methods_Screens/AncoraVisual';
import AncoraAuditiva from '../Methods_Screens/AncoraAuditiva';
import Emocoes from '../Methods_Screens/Emocoes';



export default function MethodScreen({ route }) {
  const { title, url, navigation, subtitleNavigate } = route.params;

  return (
    <View style={{ ...styles.container}}>
      <ScrollView>
        <Image source={require('../../../../../assets/Mind_Images/background/background_ansiedade.png')} style={styles.image}/>
        <Header navigate={navigation} isDrawer={false} />


        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.container_title}>
            {url !== '' && <Image source={url} style={styles.image_title}/>}
            <Text style={styles.text_title}>{title}</Text>
          </View>
          <Text style={styles.text_subtitle}>{subtitleNavigate && subtitleNavigate}</Text>

          {
            title === '5 sentidos' ? <FiveSense/> 
            : title === 'Âncora Visual' ? <AncoraVisual/>
            : title === 'Âncora Auditiva' ? <AncoraAuditiva/>
            : title === 'Emoções' ? <Emocoes/>
            : null
          }
        </View>
      </ScrollView>
    </View>
  );
}
