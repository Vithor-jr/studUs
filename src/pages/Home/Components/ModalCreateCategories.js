import React, { useEffect, useState } from "react";
import { 
	Modal,
	View, 
	Text,
	TouchableOpacity,
	TextInput
} from "react-native";
import styles from "./styles";
import { SvgXml } from "react-native-svg";
import svgs from "../../../../assets/svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserContext } from "../../../context/UserContext";
import Ip from "../../../values/ip";
import ModalMessage from "./ModalMessage";
import ActivityIndicator from "../../Components/ActivityIndicator";

export default function ModalCreateCategories({isVisible, onClose, isUnique, update, color, title, categoryId}){
	const [selectedColor, setSelectedColor] = useState('');
	const {userData, categories, setCategories} = useUserContext()
	const [titleCategorie, setTitleCategorie] = useState('')
	const [message, setMessage] = useState('')
	const [type, setType] = useState('')
	const [loading, setLoading] = useState(false)
	const [visibleMessage, setVisibleMessage] = useState(false)
	const ip = Ip()

	function pressButton(color){
		setSelectedColor(color);
	}

	useEffect(()=>{
		function getData(){
			if(update){
				setTitleCategorie(title),
				setSelectedColor(color)
			}
		}

		getData()
	},[])

	function validar(){
		if(titleCategorie===null || titleCategorie===''){
			setMessage('Digite um título para a categoria')
			setType('')
			setVisibleMessage(true)
			setLoading(false)
			return false
		}

		if(selectedColor===null || selectedColor===''){
			setMessage('Selecione uma cor')
			setType('')
			setVisibleMessage(true)
			setLoading(false)
			return false
		}

		return true
	}

	const addNewCategory = async () => {
		try {
			setLoading(true)
			if(validar()){
				const token = await AsyncStorage.getItem('access_token');

			if(update){
				const response = await axios.put(`https://${ip}/activities/categories/${categoryId}`, 
					{
						name: titleCategorie,
						color: selectedColor
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						}
					});
					setMessage('Categoria atualizada com sucesso')
			} else {
				const response = await axios.post(`https://${ip}/activities/create-category`, {
					userId: userData.id,
					name: titleCategorie,
					color: selectedColor,
				}, {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				});
				setMessage('Categoria criada com sucesso')
			}

				await getCategories()
				setLoading(false)
				setVisibleMessage(true)
				setType('sucess')
			}
		} catch (error) {
			setLoading(false)
			console.error("Erro ao adicionar a nova categoria:", error);
		}
	};


	async function getCategories(){
			const token = await AsyncStorage.getItem('access_token')
			const response = await axios.get(`https://${ip}/activities/categories/${userData.id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			const updatedCategories = response.data;
	
			setCategories(updatedCategories);
	}
	

	return(
		<Modal
			transparent={true}
			animationType="fade"
		>
			<View style={{flex:1, alignItems:'center', backgroundColor: isUnique ? 'rgba(0, 0, 0, 0.4)' : null, justifyContent:'center'}}>
				<View style={styles.container_modal_create_categories}>
					<View style={{flexDirection:'row', marginTop:5, width:'100%', justifyContent:'flex-end', position:'absolute'}}>
						<TouchableOpacity onPress={isVisible}>
							<SvgXml xml={svgs.svgIconXPurple}/>
						</TouchableOpacity>
					</View>

					<View style={{width:'85%'}}>
						<Text style={styles.text_modal_create_categories}>Nome da Categoria: </Text>
						
						<TextInput
							style={styles.input_add_name_category}
							value={titleCategorie}
							onChangeText={(value) => setTitleCategorie(value)}
						/>

						<Text style={{...styles.text_modal_create_categories, marginTop:20}}>Cor da Categoria: </Text>
						
						<View style={styles.container_buttons_picker_colors}>
							<View style={styles.container_line_colors}>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors, 
										backgroundColor:"#AEAEAE", 
										borderColor: selectedColor === "#AEAEAE" ? "#17A1FA" : "transparent",
									}}
									onPress={() => pressButton("#AEAEAE")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#000",
										borderColor: selectedColor === "#000" ? "#17A1FA" : "transparent",
									}}
									onPress={() => pressButton("#000")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"white",
										borderColor: selectedColor === "white" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("white")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#FF7300",
										borderColor: selectedColor === "#FF7300" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#FF7300")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#3B267B",
										borderColor: selectedColor === "#3B267B" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#3B267B")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#72B853",
										borderColor: selectedColor === "#72B853" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#72B853")}
								/>
							</View>

							<View style={styles.container_line_colors}>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#F7A58A",
										borderColor: selectedColor === "#F7A58A" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#F7A58A")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#77AADB",
										borderColor: selectedColor === "#77AADB" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#77AADB")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#014974",
										borderColor: selectedColor === "#014974" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#014974")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#E90000",
										borderColor: selectedColor === "#E90000" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#E90000")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#B4E0DE",
										borderColor: selectedColor === "#B4E0DE" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#B4E0DE")}
								/>
								<TouchableOpacity 
									style={{
										...styles.button_picker_colors,
										backgroundColor:"#9A8BC0",
										borderColor: selectedColor === "#9A8BC0" ? "#17A1FA" : "transparent"
									}}
									onPress={() => pressButton("#9A8BC0")}
								/>
							</View>
						</View>
					</View>

					{visibleMessage && 
						<ModalMessage 
							text={message} 
							onClose={() => {
								setVisibleMessage(false) 
								if(type==='sucess'){
								  onClose && onClose()
								}
							}} 
							type={type}/>}
					{loading && <ActivityIndicator message={update ? 'Atualizando categoria...' : 'Criando categoria...'}/>}

					<TouchableOpacity onPress={addNewCategory} style={{...styles.modal_button_adicionar, width:'40%', borderRadius:10, bottom:10, position:'absolute'}}>
						<Text style={{...styles.modal_add_text_button, fontSize:17}}>Salvar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}