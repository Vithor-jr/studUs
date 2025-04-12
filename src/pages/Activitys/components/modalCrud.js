import React, {useEffect, useState} from "react";
import { 
	View,
	Text,
	Modal,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback,
	Dimensions
} from "react-native";
import { useUserContext } from "../../../context/UserContext";
import { deleteActivity, completeActivity, putImportantActivity} from "../getActivitys";
import { updateActivtys } from "../updateActivitys";
import IndicatorModal from "./activityIndicator";
import { SvgXml } from "react-native-svg";
import ModalConfirm from "../../Home/Components/ModalConfirm";
import { iconsActivitys } from "../../../../assets/svg/iconsAtivitys";
import { useActivityContext } from "../../../context/ActivitysContext";
import ModalEdit from "./modalEdit";
import ActivityIndicator from "../../Components/ActivityIndicator";

export default function ModalCrud({ functionOnClose, position, activityId}) {
	const { y: positionY } = position;
	const {userData} = useUserContext();

	const {
		activitiesToday,
		setAllActivitysToday,
		completedActivitiesCountToday, 
		setCompletedActivitiesCountToday,
		setActivitysWeek,
		setActivtysNextWeek,
		setActiviesToday,
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
	
	const [positionX, setPositionX] = useState(position.x);
	const [modalPatchVisible, setModalPatchVisible] = useState(false)
	const [indicatorVisible, setIndicatorVisible] = useState(false)
	const [modalVisible, setModalVisible] = useState(false)
	const [message, setMessage] = useState('')
	const [messageIndicator, setMessageIndicator] = useState('')
	const [buttonPress, setButtonPress] = useState(0)


	useEffect(()=>{
		async function updatePositionX(){
			const LeftDistance = Dimensions.get('screen').width - positionX

			if(LeftDistance < 170){
				setPositionX(0);
			}
		}

		updatePositionX();
	}, [positionX]);
	
	function functionConfirmAction(action){
		switch (action) {
			case 1:
				setButtonPress(action)
				setMessage('Deseja marcar a atividade como importante?')
				setModalVisible(true)
				break
			case 2:
				setButtonPress(action)
				setMessage('Deseja marcar a atividade como concluída?')
				setModalVisible(true)
				break
			case 3: functionUpdateActivity(); break
			case 4:
				setButtonPress(action)
				setMessage('Deseja excluir a atividade?')
				setModalVisible(true)
				break
			default: 
		}
	}

	function functionOnCloseModal(confirm){
		setModalVisible(false)
		
		if(confirm){
			setIndicatorVisible(true)

			if(buttonPress===1){
				setMessageIndicator('Atualizando a atividade...')
				functionImportantActivity()
			} else if(buttonPress===2){
				setMessageIndicator('Alterando a atividade...')
				functionCompleteActivity()
			} else if(buttonPress===3){
				functionUpdateActivity()
			} else if(buttonPress===4){
				setMessageIndicator('Deletando a atividade...')
				functionDeleteActivity()
			}
		}
	}

	async function functionDeleteActivity(){
		try {
			const response = await deleteActivity(userData.id, activityId);
			
		} catch (error) {
			console.error("Erro ao deletar atividade:", error);
		}
	
		try {
			await updateActivtys(userData.id, setters);
			setIndicatorVisible(false)
		} catch (error) {
			console.error("Erro ao atualizar atividades:", error);
		}
	}
	

	async function functionCompleteActivity(){
			try {
				const response = await completeActivity(userData.id, activityId);
			} catch (error) {
				console.error("Erro ao deletar atividade:", error);
			}
		
			try {
				await updateActivtys(userData.id, setters);
				setIndicatorVisible(false)
			} catch (error) {
				console.error("Erro ao atualizar atividades:", error);
			}
		
	}

	async function functionImportantActivity(){
		try {
			const response = await putImportantActivity(userData.id, activityId);
		} catch (error) {
			console.error("Erro ao definir atividade como importante:", error);
		}
	
		try {
			await updateActivtys(userData.id, setters);
			setIndicatorVisible(false)
		} catch (error) {
			console.error("Erro ao atualizar atividades:", error);
		}
	}

	function functionUpdateActivity(){
		setModalPatchVisible(true)
	}


	return(
		<Modal
			transparent={true}
			animationType="fade"
			onRequestClose={functionOnClose}
		>
			<TouchableWithoutFeedback onPress={functionOnClose}>
				<View style={styles.container_screen}>
					<TouchableWithoutFeedback onPress={()=>{}}>
						<View style={{
							...styles.container_body,
							opacity:indicatorVisible ? 0 : modalPatchVisible ? 0 : 1,
							top:positionY,
							left:positionX !=0 && positionX,
							right: positionX ===0 && positionX
							}}>
								<TouchableOpacity
									style={styles.conatiner_button}
									onPress={()=>{functionConfirmAction(1)}}
								>
									<SvgXml style={{position:'absolute'}} xml={iconsActivitys.svgStar} width={18} height={18}/>
									<Text style={{...styles.button_text, backgroundColor:'#FF7300'}}>Marcar como importante</Text>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.conatiner_button} 
									onPress={()=>functionConfirmAction(2)}
								>
									<SvgXml style={{position:'absolute'}} xml={iconsActivitys.svgConclued} width={18} height={18}/>
									<Text style={{...styles.button_text, backgroundColor:'#47AF39'}}>Marcar como concluída</Text>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.conatiner_button}
									onPress={()=>functionConfirmAction(3)}
								>
									<SvgXml style={{position:'absolute'}} xml={iconsActivitys.svgEdit} width={18} height={18}/>
									<Text style={{...styles.button_text, backgroundColor:'#77AADB'}}>Editar atividade</Text>
								</TouchableOpacity>

								<TouchableOpacity 
									style={styles.conatiner_button}
									onPress={()=>functionConfirmAction(4)}
								>
									<SvgXml style={{position:'absolute'}} xml={iconsActivitys.svgExclued} width={18} height={18}/>
									<Text style={{...styles.button_text, backgroundColor:'#E84D35'}}>Excluir atividade</Text>
								</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>

			{
				message && modalVisible && 
				<ModalConfirm
					onClose={functionOnCloseModal}
					text={message}
				/>
			}

			{
				modalPatchVisible &&
				<ModalEdit activityId={activityId} positionX={positionX} positionY={positionY} onClose={()=>setModalPatchVisible(false)}/>
			}

			{
				indicatorVisible && <ActivityIndicator message={messageIndicator}/>
			}
		</Modal>
	);
}

const styles = StyleSheet.create({
	container_body:{
		position: 'absolute',
		backgroundColor:'#F5F5F5',
		borderRadius:20,
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'column',
		gap:10,
		paddingHorizontal:10,
		paddingVertical:20,
		width:'50%',
		borderTopStartRadius:0
	},
	container_screen:{
		flex:1,
		backgroundColor:'rgba(0, 0, 0)'
	},
	conatiner_button:{
		flexDirection:'row',
		alignItems:'center',
		width:"100%"
	},
	button_text:{
		color:'white',
		fontFamily:'Varela-Round',
		fontSize:11,
		textAlign:'center',
		width:'83%',
		marginHorizontal:'17%',
		paddingVertical:8,
		backgroundColor:'red',
		borderRadius:20
	}
})