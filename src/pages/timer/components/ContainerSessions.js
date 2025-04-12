import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { 
	StyleSheet,
	View,
	Text,
	Modal,
	Dimensions,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { useUserContext } from '../../../context/UserContext';
import { GetSessionByUser, GetSessionTodayByUser } from '../functions/functions';

import { styles } from './styles';
import TicketSession from './ticketSession';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../../../assets/svg/iconsTimer';

const heigthScreen = Dimensions.get('window').height;

export default function ContainerSessions({functionFechar}) {
  const offset = useSharedValue(heigthScreen);
  const {userData} = useUserContext();
  const [data, setData] = useState([])
  const [dataAtual, setDataAtual] = useState('')

  useEffect(() => {
    function getDateActual(){
      let dia = (new Date().getDate()).toString().padStart(2, '0');
      let mes = (new Date().getMonth() + 1).toString().padStart(2, '0');
      let ano = new Date().getFullYear().toString()

      setDataAtual(dia + '/' + mes + '/' + ano);
    }

    getDateActual();
    offset.value = withTiming(0);
  }, []);

  useEffect(()=>{
    async function getSessions(){
      const response = await GetSessionTodayByUser(userData.id)
      setData(response)
    }

    getSessions()
  },[userData])

  const pan = Gesture.Pan()
  .onChange((event) => {
    if(event.translationY > 0){
      offset.value = event.translationY;
    }
  })
  .onFinalize(() => {
    if (offset.value > heigthScreen * 0.6) {
      runOnJS(functionFechar)();
    } else {
      offset.value = withTiming(0);
    }
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: offset.value },
    ],
  }));

  return (
		<Modal
			transparent
		>
			  <GestureHandlerRootView style={styles.container}>
					<View style={styles.container}>
						<Animated.View style={[styles.conatiner_body, animatedStyles]}>
							<GestureDetector gesture={pan}>
								<Pressable style={{padding:5}}>
                  <View style={styles.component_line_press}/>
                </Pressable>
							</GestureDetector>

							<Text style={styles.container_title_top_session}>Sessões</Text>

              <Text style={styles.text_today}>Hoje, {dataAtual ? dataAtual : 'carregando..'}</Text>

              {data.length !==0 && <View style={styles.line_default}/>}

              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                  <View>
                    {
                      data && data.map((item, index)=>(
                        <View key={index} style={{flexDirection:'row'}}>
                          <View style={styles.container_pregress_line}>
                            <View style={styles.circle_done_focus}><SvgXml xml={icons.done} width={10} height={10}/></View>
                            <View style={styles.line_complete_focus}/>
                          </View>
                          
                          <TicketSession setData={(value)=>setData(value)} id={item.id} title={item.name} start={item.startAt} end={item.endAt} category={item.category} duration={item.duration} />
                        </View>
                      ))
                    }
                  </View>
              </ScrollView>
            </Animated.View>
					</View>
			</GestureHandlerRootView>
		</Modal>
  );
}