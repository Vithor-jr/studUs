import { 
	View,
	Modal,
	Text,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";

import EditSession from "./EditSession/EditSession";
import { icons } from "../../../../assets/svg/iconsTimer";
import { SvgXml } from "react-native-svg";
import { useEffect, useState } from "react";
import { GetDataSession, deleteSession, updateSession, GetSessionByUser, GetSessionTodayByUser} from "../functions/functions";
import { useUserContext } from "../../../context/UserContext";
import ModalConfirm from "../../Home/Components/ModalConfirm";

export default function ModalPressSession({setData, onClose, sessionId}){
	const {userData} = useUserContext()
	const [deleteVisble, setDeleteVisible] = useState(false)
	//~~~~~~~~~~~~Edit~~~~~~~~~~~~~~~~
	const [isEditVisible, setEditVisible] = useState(false)
	const [category, setCategory] = useState('')
	const [title, setTitle] = useState('')
	const [duration, setDuration] = useState()
	const [categoryId, setCategoryId] = useState()

	async function UpdateSession(){
		const response = await updateSession(userData.id, sessionId, duration, title, categoryId)

		await getSessions()
	}

	async function getSessions(){
		const response = await GetSessionTodayByUser(userData.id)
		setData(response)
	}

	async function DeleteSession(confirm){
		if(confirm){
		 const response = await deleteSession(userData.id, sessionId)
		 await getSessions()
		 setDeleteVisible(false)
		 onClose()
		} else {
			setDeleteVisible(false)
		}
	}

	useEffect(()=>{
		async function getDataSession(){
			const data = await GetDataSession(sessionId)

			if(data){
				setCategoryId(data.category.id)
				setCategory(data.category.name)
				setTitle(data.name)
				setDuration(data.duration)
			}
		}

		getDataSession()
	}, [])

	return(
		<Modal
			animationType="slide"
			transparent
		>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.container_background}>
					<TouchableWithoutFeedback onPress={()=>{}}>
						<View style={styles.container_modal}>

							<TouchableOpacity 
								onPress={()=>setDeleteVisible(true)}
								style={styles.container_button}>
								<SvgXml xml={icons.svgExclued}/>
								<Text style={styles.text_button}>Excluir</Text>
							</TouchableOpacity>

							<TouchableOpacity 
								onPress={()=>setEditVisible(true)}
								style={styles.container_button}>
									<SvgXml xml={icons.svgEdit}/>
									<Text style={styles.text_button}>Editar</Text>
							</TouchableOpacity>
							
							{
								deleteVisble && 
								<ModalConfirm 
									onClose={(value)=>DeleteSession(value)}
									text='Deseja excluir a sessão?'
								/>
							}

							{
							isEditVisible && 
								<EditSession
									setCategorieId={(value)=>setCategoryId(value)}
									title={title}
									categorie={category}
									setCategorie={(value)=>setCategory(value)}
									setTitle={(value)=>setTitle(value)}
									onClose={()=>{UpdateSession(),setEditVisible(false)}}
								/>
							}
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container_background:{
		flex:1,
		backgroundColor:'rgba(0, 0, 0, 0.6)',
		alignItems:'center',
		justifyContent:'center'
	},
	container_modal:{
		backgroundColor:"white",
		width:'70%',
		paddingHorizontal:30,
		paddingVertical:15,
		borderRadius:15,
		gap:10
	},
	container_button:{
		flexDirection:'row',
		alignItems:'center',
		gap:10
	},
	text_button:{
		fontFamily:'Quicksand-Bold',
		fontSize:15
	}
})