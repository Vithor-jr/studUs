import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { data_screen_felling } from '../../data/screen_felling';

import Book from '../../components/Book';
import Header from '../../components/Header/header';
import BallonEva from '../../components/BallonEva';
import EstresseScreen from '../Felling_Screens/Estresse';
import AnsiedadeScreen from '../Felling_Screens/Ansiedade';
import TristezaScreen from '../Felling_Screens/Tristeza';
import FelicidadeScreen from '../Felling_Screens/Felicidade';
import MedoScreen from '../Felling_Screens/Medo';
import VergonhaScreen from '../Felling_Screens/Vergonha';
import RaivaScreen from '../Felling_Screens/Raiva';

export default function Felling({ route }) {
  const { title, index, url, color, navigation } = route.params;

  const messageSubtitle = data_screen_felling[index].message_subtitle;
  const messageEva = data_screen_felling[index].evaMessage;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR');

  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <ScrollView>
        {url !== '' && <Image source={url} style={styles.image} />}
        <Header navigate={navigation} isDrawer={false} />

        <View style={{ marginTop: '20%' }}>
          <BallonEva message={messageEva} />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.text_title}>Escreva</Text>
          <Text style={styles.text_subtitle}>{messageSubtitle}</Text>

          <View style={{ flexDirection: 'row', gap: 10, marginTop: 30 }}>
            <View style={styles.container_top_book}>
              <Text style={{...styles.text_container_top_book, letterSpacing:2, fontSize:15}}>{formattedDate}</Text>
            </View>

            <View style={styles.container_top_book}>
              <Text style={{...styles.text_container_top_book, fontSize:15}}>{title}</Text>
            </View>
          </View>

          <Book/>

          {
            title === 'Estresse'   ?
            <EstresseScreen/>      :
            title === 'Ansiedade'  ?
            <AnsiedadeScreen navigate={navigation}/>     :
            title === 'Tristeza'   ?
            <TristezaScreen/>      :
            title === 'Felicidade' ?
            <FelicidadeScreen/>    :
            title === 'Medo'       ?
            <MedoScreen/>          :
            title === 'Vergonha'   ?
            <VergonhaScreen/>      :
            title === 'Raiva'      ?
            <RaivaScreen/>         :
            null
          }
        </View>
      </ScrollView>
    </View>
  );
}
