import React, {useEffect, useRef, useState} from 'react';
import { 
  Modal, 
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';

import { updateActivtys as atualizar } from '../updateActivitys';
import { getActivtyById, updateActivity } from '../getActivitys';
import { useUserContext } from '../../../context/UserContext';
import { useActivityContext } from '../../../context/ActivitysContext';

import IndicatorModal from './activityIndicator';
import ModalConfirm from '../../Home/Components/ModalConfirm';
import ModalMessage from '../../Home/Components/ModalMessage';
import ModalCalendar from '../../Home/Calendars/modalCalendar';
import AddCategory from '../../Home/Components/addCategory';
import styles from '../styles';
import ActivityIndicator from '../../Components/ActivityIndicator';

export default function ModalEdit({onClose, positionX, positionY, activityId}){
  const {
    activitiesToday,
		setAllActivitysToday,
		completedActivitiesCountToday, 
		setCompletedActivitiesCountToday,
    setActiviesToday,
		setActivitysWeek,
		setActivtysNextWeek,
		setActivtysAfterNextWeek,
		setActivitysCompleteWeek,
    setActivtysLastWeek,
    setActivtyBefore,
    setActivtyEarly,
		setActivtysNotCompletedWeek,
		setActivtysNotCompletedLastWeek,
		setActivtysNotCompletedBeforeLastWeek,
		setActivitysImportant
	} = useActivityContext()

	const setters = {
    activitiesToday,
		setAllActivitysToday,
		completedActivitiesCountToday, 
		setCompletedActivitiesCountToday,
    setActiviesToday,
		setActivitysWeek,
		setActivtysNextWeek,
		setActivtysAfterNextWeek,
		setActivitysCompleteWeek,
		setActivtysLastWeek,
		setActivtyBefore,
		setActivtyEarly,
		setActivtysNotCompletedWeek,
		setActivtysNotCompletedLastWeek,
		setActivtysNotCompletedBeforeLastWeek,
		setActivitysImportant
	};
  
  //Modais
  const [visibleModalCategory, setVisibleModalCategory] = useState(false)
  const [visibleCalendar, setVisibleCalendar] = useState(false)
  const [modalMessageType, setModalMessageType] = useState('')
  const [modalMessageVisible, setModalMessageVisible] = useState(false)
  const [indicatorVisible, setIndicatorVisible] = useState(false)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [modalSucess, setModalSucess] = useState(false)

  //Values
  const [categorie, setCategorie] = useState('')
  const [categorieId, setCategorieId] = useState('')
  const [colorCategorie, setColorCategorie] = useState('')
  const [activityData, setActivityData] = useState()

  const [message, setMessage] = useState('')
  const [titleActivity, setTitleActivity] = useState('');
  const [dataFormatada, setDataFormatada] = useState('');

  const {
    selectDates, 
    userData,
  } = useUserContext();

  useEffect(() => {
    async function getDateActivity(){
      if(activityData){
        const data = new Date(activityData.dueDate);
        const dia = data.getUTCDate(); 
        const mes = data.getUTCMonth() + 1;
        const ano = data.getUTCFullYear();

        const dataFormatada = `${dia < 10 ? '0' + dia : dia} | ${mes < 10 ? '0' + mes : mes} | ${ano}`;

        setTitleActivity(activityData.name)
        setCategorieId(activityData.category.id)

        setDataFormatada(dataFormatada)
      }
    }

    getDateActivity()
  }, [activityData])

  useEffect(() => {
    async function getActualDate(){ 
      const actualDate = new Date()
      let dia = String(actualDate.getDate()).padStart(2, '0');
      let mes = String(actualDate.getMonth() + 1).padStart(2, '0'); // Os meses no JavaScript começam do 0
      let ano = actualDate.getFullYear();
    
      let dataFormatada = `${dia} | ${mes} | ${ano}`;
    
      setDataFormatada(dataFormatada);
    }

    async function getDataActivity(){
      try {
        if(activityId){
              const response = await getActivtyById(activityId)
              setActivityData(response)
          }
      } catch (error){
          console.error('Erro ao buscar dados da atividade:', error);
      }
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
    
    getDataActivity();
    getActualDate();

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

      setDataFormatada(newDate)
      setVisibleCalendar(false)
    }
  }

  function Verificar(){
    if(activityData){
      let dadosAterados = 0

      //~~~~~~~~Formatando a data padrão~~~~~~~~~~
      const data = new Date(activityData.dueDate);
      const dia = data.getUTCDate(); 
      const mes = data.getUTCMonth() + 1;
      const ano = data.getUTCFullYear();

      const dataBancoFormatada =  `${dia < 10 ? '0' + dia : dia} | ${mes < 10 ? '0' + mes : mes} | ${ano}`;
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      console.log(`dataFormatada: ${dataFormatada} <=> activityData.dueDate: ${dataBancoFormatada}`)
      console.log(`titleActivity: ${titleActivity} <=> activityData.name: ${activityData.name}`)
      console.log(`categoryId: ${categorieId} <=> activityData.category.id: ${activityData.category.id}`)
      
      if(dataFormatada !== dataBancoFormatada) dadosAterados++ 
      if(titleActivity !== activityData.name) dadosAterados++
      if(categorieId !== activityData.category.id) dadosAterados++
      
      if(dadosAterados === 0){
        setMessage('Nenhhum dado foi alterado')
        setModalMessageType('Sem alteracao')
        setModalMessageVisible(true)
      } else {
        setMessage('Deseja atualizar a atividade???')
        setModalMessageType('Com alteracao')
        setModalMessageVisible(true)
      }
      console.log(dadosAterados)
    }
  }

  async function onCloseConfirm(response){
    try {
      if(response){
        setIndicatorVisible(true)
        const [dia, mes, ano] = dataFormatada.split(" | ");
  
        const dueDate = `${ano}-${mes}-${dia}T23:59:59.999Z`;
        await updateActivity(activityId, titleActivity, dueDate, categorieId)      
  
        await atualizar(userData.id, setters);
        setIndicatorVisible(false)
        setMessage('Atualização feita com sucesso')
        setModalSucess(true)
      } else {
        setModalMessageVisible(false)
        setIndicatorVisible(false)
      }
    } catch (error) {
      console.error('Erro ao atualizar atividade:', error);
      setIndicatorVisible(false)
    }
  }  

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
          <TouchableWithoutFeedback onPress={()=>{}}>
            <View style={{...styles.container_modal_update, 
                top: isKeyboardVisible ? 240 : positionY,
                left:positionX !=0 && positionX,
                right: positionX ===0 && positionX}}
            >
                <TouchableOpacity 
                  style={styles.conatiner_button_categories}
                  onPress={()=>setVisibleModalCategory(true)}
                  >
                  {colorCategorie && 
                    <View style={{width:10, height:10, backgroundColor:colorCategorie, borderRadius:20}}/>
                  }
                  <Text style={styles.text_modal_update}>{categorie ? categorie : activityData ? activityData.category.name : 'Categoria'}</Text>
                </TouchableOpacity>
                
                <View style={{gap:10}}>
                  <Text style={styles.text_modal_update}>Título da atividade</Text>
 
                  <TextInput 
                    style={styles.container_input_modal_update}
                    value={titleActivity}
                    onChangeText={(value) => setTitleActivity(value)}
                    defaultValue={activityData && activityData.name}
                  />
                </View>

                <View style={{gap:10}}>
                  <Text style={styles.text_modal_update}>Data de conclusão</Text>

                  <View style={styles.container_bottom_buttons_modal}>
                    <TouchableOpacity
                      onPress={()=>setVisibleCalendar(true)}
                      style={{...styles.container_bottons_buttons_modal, backgroundColor:'#5F49A9'}}
                    >
                      <Text style={styles.label_buttons_modal}>{dataFormatada}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                       onPress={Verificar}
                       style={{...styles.container_bottons_buttons_modal, backgroundColor:'#72B853'}}
                    >
                      <Text style={styles.label_buttons_modal}>Editar</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={visibleCalendar}
                >
                  <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:'10%', justifyContent:'center'}}>
                    <View  style={{backgroundColor:'white', borderRadius:30, paddingVertical:20}}>
                      <ModalCalendar/>

                      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%', paddingTop:30}}>
                        <TouchableOpacity style={{...styles.modal_button, backgroundColor:'#E84D35'}} onPress={() => setVisibleCalendar(false)}>
                          <Text style={{fontFamily:'Varela-Round', color:'white'}}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{...styles.modal_button, backgroundColor:'#72B853'}} onPress={addDate}>
                          <Text style={{fontFamily:'Varela-Round', color:'white'}}>Adicionar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

                {
                  visibleModalCategory && 
                  <AddCategory functionClose={() => setVisibleModalCategory(false)} functionAdd={addCategorie} colorCategorie={addColorCategorie}/> 
                }

                {
                  modalMessageVisible && 
                  (modalMessageType === 'Com alteracao' ? 
                    <ModalConfirm text={message} onClose={onCloseConfirm}/> :
                    <ModalMessage text={message} onClose={()=>{setModalMessageVisible(false)}}/>
                  )
                }

                {
                  modalSucess && <ModalMessage type='sucess' text={message} onClose={onClose}/>
                }
                {
                  indicatorVisible && <ActivityIndicator message='Atualizando atividade'/>
                }

            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}