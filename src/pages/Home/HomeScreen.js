import React, {useState, useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text,
  TouchableOpacity, 
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ip from '../../values/ip';
import axios from 'axios';

import { useUserContext } from '../../context/UserContext';
import { useActivityContext } from '../../context/ActivitysContext';
import { stylesHome } from './Styles/stylesHome';
import svgs from '../../../assets/svg';
import ModalAdd from './Components/ModalAdd';
import TabBarHome from './Components/tabBarHome';

const screenWidth = Dimensions.get('window').width;
const heightTop = screenWidth * (346 / 360);

const valueIp = Ip()

export default function HomeScreen() {
  const navigate = useNavigation();
  const {
    userData
  } = useUserContext()

  const {
    activitiesToday, setActiviesToday,
    completedActivitiesCountToday, setCompletedActivitiesCountToday,
    allActivitysToday, setAllActivitysToday,
  } = useActivityContext()

  
  const [modalVisible, setModalVisible] = useState(false);

  function formatNumber(number) {
    return number.toString().padStart(2, '0');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let completedToday = 0;
        let notCompletedToday = 0;

          const token = await AsyncStorage.getItem('access_token');

          // Buscar atividades de hoje
          const responseToday = await axios.get(`https://${valueIp}/activities/${userData.id}/today`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setActiviesToday(responseToday.data);
          notCompletedToday = responseToday.data.length;

          // Buscar atividades completadas hoje
          const responseCompletedToday = await axios.get(`https://${valueIp}/activities/${userData.id}/completed-today`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          completedToday = responseCompletedToday.data.length;
          setCompletedActivitiesCountToday(formatNumber(responseCompletedToday.data.length));

          // Atualizar o estado allActivitysToday
          setAllActivitysToday(formatNumber(completedToday + notCompletedToday));
        
      } catch (error) {
        console.error("Erro ao buscar atividades:", error);
      }
    }
  
    if(userData){
      fetchData();
    }
  }, [activitiesToday, completedActivitiesCountToday, userData]);
  
  return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <View style={{position:'absolute', bottom:'55%'}}>
          <Image 
            source={require('../../../assets/images/backgroundHome.png')}
            style={{height:heightTop, width:screenWidth}}/>
        </View>

        <View style={stylesHome.container_header}>
            <View style={stylesHome.container_header_buttons}>
              <TouchableOpacity onPress={() => navigate.openDrawer()}>
                <SvgXml xml={svgs.svgDrawer} width={20} height={17} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate.navigate('activitysBar')}>
                <SvgXml xml={svgs.svgPointsWhite} width={30} height={25} />
              </TouchableOpacity>
            </View>

            <View style={stylesHome.container_modal_activitys}>
              <Text style={stylesHome.hello} numberOfLines={1} ellipsizeMode='tail'>
                {userData ? `Olá, ${userData.username}!` : 'Carregando...'}
              </Text>
              <Text style={stylesHome.message}> Vamos ser produtivos hoje.</Text>

              <View style={stylesHome.frameTop}>
                {userData ? 
                <View style={stylesHome.frameToptext}>
                  <Text style={stylesHome.today}>Hoje</Text>
                  <Text style={stylesHome.activitys}>{completedActivitiesCountToday} | {allActivitysToday} tarefas</Text>
                </View> : 
                <Text>Carregando..</Text>  
              }
                <Image
                  source={require('../../../assets/images/Home.png')}
                  style={{borderRadius:10, height:70, width:100}}
                  />
              </View>
        </View>
        </View>
       
        
          <View style={{position:'absolute', height:'100%', marginTop:'70%'}}>
            {userData &&
              <TabBarHome id={userData.id}/>
            }

            <View style={{width:'100%', height:'15%', paddingHorizontal:35}}>
              <View style={stylesHome.container_tesouro_tips}>
                <Image
                  style={{width:20, height:20}}
                  source={require('../../../assets/images/Tesouro.png')}
                />
                <Text style={stylesHome.text_tips}>Dicas de estudos</Text>
              </View>

              <TouchableOpacity 
                onPress={()=>navigate.navigate('RoutesTips')}
                style={stylesHome.container_button_tips}>

                <View style={{paddingHorizontal:10}}>
                  <SvgXml xml={svgs.svgPeploHomeScreen}/>
                </View>
                
                <View style={{width:'53%'}}>
                  <Text style={stylesHome.text_title_tips}>Dicas de estudos</Text>
                  <Text style={stylesHome.text_subtitle_tips}>Métodos e dicas de como melhorar seu tempo nos estudos. Toque para ver!</Text>
                </View>

                <View style={stylesHome.container_subcircles}>
                  <SvgXml xml={svgs.svgSectorCircleTop}/>
                  <SvgXml xml={svgs.svgSectorCircleBottom}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>


       <View style={stylesHome.container_button_add}>
            <TouchableOpacity style={stylesHome.addButton} onPress={() => setModalVisible(true)}>
              <SvgXml xml={svgs.scgAddCategorie} width={17} height={16}/>
            </TouchableOpacity>

            {modalVisible &&  <ModalAdd onClose={() => setModalVisible(false)}/>}
            
       </View>
      </View>
  );
}
