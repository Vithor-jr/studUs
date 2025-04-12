import React, { useState } from "react";

import { 
	View,
	Text,
	Modal,
	TouchableOpacity,
	TextInput
} from "react-native";
import { SvgXml } from "react-native-svg";

import ModalMessage from "../../../Home/Components/ModalMessage";
import { useUserContext } from "../../../../context/UserContext";
import { icons } from "../../../../../assets/svg/iconsTimer";
import AddCategory from "../../../Home/Components/addCategory";
import svgs from "../../../../../assets/svg";
import { styles } from "./styles";

export default function EditSession({onClose, setColorCategorie, setCategorieId, title, setTitle, categorie, setCategorie}){
	const {userData} = useUserContext()
	const [visibleCategories, setVisibleCategories] = useState(false)
	
	const [message, setMessage] = useState('')
	
	function addCategorie(value, id){
    setCategorie(value)
    setCategorieId(id)
  }

  function addColorCategorie(value){
    setColorCategorie(value)
  }

	function Validar(){
		setMessage('')

		if(title===''){
		  return setMessage('Digite um título para a sessão')
		} else if(categorie==='' || categorie==='Categoria'){
			return setMessage('Selecione uma categoria para a sessão')
		}

		onClose()
	}

	return(
		<Modal
			transparent
			animationType="slide"	
		>
			<View style={styles.container}>
				<View style={styles.container_back_modal}>
					
					<TouchableOpacity
						onPress={onClose}
						style={{paddingEnd:10, paddingVertical:5}}
					>
						<SvgXml xml={svgs.svgIconXPurple}/>
					</TouchableOpacity>
					
					<View style={styles.container_modal}>

						<TouchableOpacity
							onPress={()=>setVisibleCategories(!visibleCategories)}
							style={styles.conatainer_header_modal}>
								<SvgXml xml={icons.svgIconCategoriasPurple}/>
								<Text
									numberOfLines={2}
									style={styles.text_catgories}
								>{categorie}</Text>
								<SvgXml xml={icons.arrowDropdow}/>
						</TouchableOpacity>

						{visibleCategories && <AddCategory functionClose={() => setVisibleCategories(false)} functionAdd={addCategorie} colorCategorie={addColorCategorie}/>}

						<View style={styles.container_input}>
							<TextInput
								onChangeText={(value) => setTitle(value)}
								value={title}
								multiline={true}
								style={styles.input}
								maxLength={250}
							/>

							<Text style={styles.text_length}>
								{title.length} | 250
							</Text>
						</View>
						
						<TouchableOpacity
							style={styles.button}
							onPress={Validar}
						>
							<Text style={styles.text_button}>Salvar</Text>
						</TouchableOpacity>
					</View>

					{
						message !== '' && <ModalMessage onClose={()=>setMessage('')} text={message}/>
					}
				</View>
			</View>
		</Modal>
	)
}