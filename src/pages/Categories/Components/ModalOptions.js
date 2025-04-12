import { useEffect, useState } from "react";
import { 
	View,
	Modal,
	Text,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";

import ActivityIndicator from "../../Components/ActivityIndicator";
import { icons } from "../../../../assets/svg/iconsTimer";
import { SvgXml } from "react-native-svg";
import { useUserContext } from "../../../context/UserContext";
import ModalConfirm from '../../Home/Components/ModalConfirm'

import { deleteCategorie, getCategories } from "../function";
import ModalCreateCategories from "../../Home/Components/ModalCreateCategories";
import ModalMessage from "../../Home/Components/ModalMessage";

export default function ModalOptionsCategories({categorie, onClose}){
	const {userData, setCategories} = useUserContext()
	const [deleteVisble, setDeleteVisible] = useState(false)
	//~~~~~~~~~~~~Edit~~~~~~~~~~~~~~~~
	const [isEditVisible, setEditVisible] = useState(false)

	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	async function GetCategories(){
		if(userData){
			const response = await getCategories(userData.id)
		  setCategories(response)
		}
	}

	async function DeleteSession(confirm){
		if(confirm){
			setLoading(true)
			if(categorie.isDefault){
				setMessage('Não é possível excluir uma categoria padrão!')
			} else {
				const response = await deleteCategorie(categorie.id)
				await GetCategories()
				setDeleteVisible(false)
				onClose()
			}
		 setLoading(false)
		} else {
			setDeleteVisible(false)
		}
	}

	return(
		<Modal
			animationType="fade"
			transparent
		>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.container_background}>
					<TouchableWithoutFeedback onPress={()=>{}}>
						<View style={{...styles.container_modal, opacity:isEditVisible?0:1}}>

							<TouchableOpacity 
								onPress={()=>setDeleteVisible(true)}
								style={styles.container_button}>
								<SvgXml xml={icons.svgExclued}/>
								<Text style={styles.text_button}>Excluir</Text>
							</TouchableOpacity>

							<TouchableOpacity 
								onPress={()=>{
									if(categorie.isDefault){
										setMessage('Não é possível editar uma categoria padrão!')
									} else {
										setEditVisible(true)
									}
								}}
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
								isEditVisible && <ModalCreateCategories categoryId={categorie.id} onClose={()=>setEditVisible(false)} update={true} color={categorie.color} title={categorie.name} isVisible={()=>setEditVisible(false)}/>
							}

							{
								loading && <ActivityIndicator message='Deletando a categoria...'/>
							}

							{
								message !== '' && <ModalMessage onClose={()=>{setMessage(''), setDeleteVisible(false)}} text={message}/>
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