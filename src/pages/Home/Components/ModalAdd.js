import React, {useEffect, useRef, useState} from 'react';
import { 
  Modal, 
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Animated,
  Platform,
  Keyboard,
} from 'react-native';

import { useActivityContext } from '../../../context/ActivitysContext';
import { useUserContext } from '../../../context/UserContext';
import styles from './styles';
import svgs from '../../../../assets/svg';
import { SvgXml } from 'react-native-svg';

import axios from 'axios';
import Ip from '../../../values/ip';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ModalCalendar from '../Calendars/modalCalendar';
import AddCategory from './addCategory';
import ModalMessage from './ModalMessage';

import { getActivitysNotCompletedToday, getActivtysWeek, getActivitysCompletedToday } from '../../Activitys/getActivitys';

const ModalAdd = ({onClose}) => {
  const sizeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {
    selectDates, 
    userData,
  } = useUserContext();
  const {
    activitiesToday,
		setAllActivitysToday,
		completedActivitiesCountToday, 
		setCompletedActivitiesCountToday,
    setActiviesToday,
    setActivitysNotCompletedToday,
    setActivitysWeek
  } = useActivityContext()

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [titleActivity, setTitleActivity] = useState('');
  const [dataFormatada, setDataFormatada] = useState('');

  const [colorCategorie, setColorCategorie] = useState('');
  const [categorie, setCategorie] = useState('');
  const [categorieId, setCategorieId] = useState();

  const [visibleCategories, setVisibleCategories] = useState(false)
  const [messageAlert, setMessageAlert] = useState('')
  const [typeAlert, setTypeAlert] = useState('')

  const valueIp = Ip()

  useEffect(() => {
    async function startAnimations() {
      Animated.timing(sizeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
  
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    async function getActualDate(){
      const actualDate = new Date()
      let dia = String(actualDate.getDate()).padStart(2, '0');
      let mes = String(actualDate.getMonth() + 1).padStart(2, '0'); // Os meses no JavaScript começam do 0
      let ano = actualDate.getFullYear();
    
      let dataFormatada = `${dia} | ${mes} | ${ano}`;
    
      setDataFormatada(dataFormatada);
    }
  
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        setKeyboardVisible(false);
      }
    );
    
    startAnimations();
    getActualDate()
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function addCategorie(value, id){
    setCategorie(value)
    setCategorieId(id)
  }

  function addColorCategorie(value){
    setColorCategorie(value)
  }

  function addDate(){
    if(selectDates){
      let partes = selectDates.split('-');
      let newDate = `${partes[2]} | ${partes[1]} | ${partes[0]}`;

      console.log(newDate)
      setDataFormatada(newDate)
      setIsCalendarVisible(false)
    }
  }

  async function updateAcitivtys(){
      if (userData) {
        //atualizar os activitys, today, week
        const today = await getActivitysNotCompletedToday(userData.id);
        setActiviesToday(today)
        setActivitysNotCompletedToday(today)

        const week = await getActivtysWeek(userData.id);
        setActivitysWeek(week)

        const completeToday = await getActivitysCompletedToday(userData.id)
        let count = completeToday.length
        setCompletedActivitiesCountToday(count.toString().padStart(2, '0'))
        
        let countAll = parseInt(completedActivitiesCountToday) + activitiesToday.length
        
        setAllActivitysToday(countAll.toString().padStart(2, '0'))		
      }
  }

  function Validar(){
    if(titleActivity==='' || titleActivity===null){
      setMessageAlert('Digite algum título para a atividade')
      setTypeAlert('failure')
      return false
    }
    if(dataFormatada===null || dataFormatada===''){
      setMessageAlert('Selecione uma data válida')
      setTypeAlert('failure')
      return false
    }
    if(categorie === null || categorie === ''){
      setTypeAlert('failure')
      setMessageAlert('Selecione uma categoria para a atividade')
      return false
    }

    setMessageAlert('Atividade criada com sucesso!!')
    setTypeAlert('sucess')
    return true
  }

  function TransformDate() {
    let parts = dataFormatada.split(' | ');
   return parts[2] + '-' + parts[1] + '-' + parts[0];
  }

  async function CreateActivity() {
    const isValid = Validar();
  
    if (isValid) {
      const newDate = TransformDate()
      const token = await AsyncStorage.getItem('access_token');

      const addResponse = await axios.post(`https://${valueIp}/activities/create-activity`,
        {
          name: titleActivity,
          categoryId: categorieId,
          type: 'Escola',
          dueDate: newDate,
          completed: false,
          userId: userData.id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      updateAcitivtys()
    } else {
      console.log('Dados inválidos');
    }
  }
  

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >

      <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Animated.View style={{...styles.container_button_add, opacity:fadeAnim}}>
          <TouchableOpacity
            disabled={true}
            style={{...styles.addButton, bottom: isKeyboardVisible ? 30: 90}}
            onPress={() => setModalVisible(true)}>
            <SvgXml xml={svgs.scgAddCategorie} width={17} height={16}/>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
        style={[
          styles.modal_add_container,
          {overflow:'visible'},
          {bottom: isKeyboardVisible ? 65: 125},
          {
            transform: [
              { scale: sizeAnim },
              { translateX: sizeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                })
              },
              { translateY: sizeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0], 
                })
              },
            ],
            transformOrigin:'bottom right'
          },
        ]}
      >
          <View style={{justifyContent:'space-between', flexDirection:'row'}}>
            <View style={{width: '60%'}}>
              <TouchableOpacity 
                style={{...styles.modal_add_input, alignItems: 'center', paddingVertical: 5, flexDirection:'row', gap:5}}
                onPress={() => setVisibleCategories(!visibleCategories)}>
                  {colorCategorie && 
                    <View style={{width:10, height:10, backgroundColor:colorCategorie, borderRadius:20}}/>
                  }
                  <Text style={styles.modal_add_text_button}>{categorie ? categorie : 'Categoria'}</Text>
                  
              </TouchableOpacity>
            </View>
            
            <View style={{justifyContent:'flex-end'}}>
              <TouchableOpacity onPress={onClose}>
                <SvgXml xml={svgs.svgIconX} width={19} height={19}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{gap:10}}>
            <Text style={styles.modal_add_text}>Título da atividade</Text>
            <TextInput 
              style={{...styles.modal_add_input, width:'60%', color:'white'}}
              onChangeText={setTitleActivity}
              value={titleActivity}
              placeholderTextColor='#B3B3B3'
              
            />
          </View>

          <View style={{gap:10}}>
            <Text style={styles.modal_add_text}>Data de conclusão</Text>
            <Modal
              animationType="fade"
              transparent={true}
              visible={isCalendarVisible}
            >
              <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:'10%', justifyContent:'center'}}>
                <View  style={{backgroundColor:'white', borderRadius:30, paddingVertical:20}}>
                  <ModalCalendar/>

                  <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%', paddingTop:30}}>
                    <TouchableOpacity style={{...styles.modal_button, backgroundColor:'#E84D35'}} onPress={() => setIsCalendarVisible(false)}>
                      <Text style={{fontFamily:'Varela-Round', color:'white'}}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{...styles.modal_button, backgroundColor:'#72B853'}} onPress={addDate}>
                      <Text style={{fontFamily:'Varela-Round', color:'white'}}>Adicionar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            {messageAlert && <ModalMessage onClose={() => setMessageAlert('')} text={messageAlert} type={typeAlert} closeScreen={onClose}/>}
            {visibleCategories && <AddCategory functionClose={() => setVisibleCategories(false)} functionAdd={addCategorie} colorCategorie={addColorCategorie}/>}
            
            <View style={{flexDirection:'row', justifyContent:'space-between', marginEnd:20}}>
              <TouchableOpacity onPress={() => setIsCalendarVisible(true)} style={{...styles.modal_add_input, alignItems:'center', justifyContent:'center'}}>
                 <Text style={styles.modal_add_text_button}>{dataFormatada}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modal_button_adicionar} onPress={CreateActivity}>
                <Text style={styles.modal_add_text}>Adicionar</Text>
              </TouchableOpacity>
            </View>


          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalAdd;
