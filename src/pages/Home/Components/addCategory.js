import React, {useState, useEffect, useRef} from 'react';
import {
	Modal,
	Text,
	TouchableOpacity,
	FlatList,
	View
} from 'react-native';
import styles from './styles';
import Ip from '../../../values/ip';
import axios from "axios";
import { useUserContext } from '../../../context/UserContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../assets/svg';
import ModalCreateCategories from './ModalCreateCategories';
import ActivityIndicator from '../../Components/ActivityIndicator'

const AddCategory = ({functionAdd, functionClose, colorCategorie}) => {
	const ip = Ip()
	const {userData, categories, setCategories} = useUserContext([])
	const [createCategoriesVisible, setCreateCategoriesVisible] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getCategories = async () => {
			const token = await AsyncStorage.getItem('access_token')
			const response = await axios.get(`https://${ip}/activities/categories/${userData.id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			const updatedCategories = response.data;
	
			setCategories(updatedCategories);
		}

		getCategories()
	}, []);

	return (
		<Modal
			onRequestClose={functionClose}
			animationType='fade'
			transparent={true}
		>
			<View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.6)', alignItems:'center', justifyContent:'center'}}>
				<View style={{...styles.container_flat_categories, opacity: createCategoriesVisible ? 0: 1}}>
					<View style={styles.container_button_close_modal_categories}>
						<TouchableOpacity onPress={functionClose}>
							<SvgXml xml={svgs.svgIconXPurple}/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity 
						style={styles.container_button_add_categories} 
						onPress={() => {setCreateCategoriesVisible(true)}}
					>
						<SvgXml xml={svgs.svgAddWhite} width={10} height={10}/>
						<Text style={styles.text_button_add_categories}>Criar nova</Text>
					</TouchableOpacity>

					{createCategoriesVisible && 
						<ModalCreateCategories isVisible={() => setCreateCategoriesVisible(false)}/>
					}

					<FlatList
						data={categories}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) =>
							<TouchableOpacity 
								style={styles.item_buttom_categories_list} 
								onPress={()=>{functionAdd(item.name, item.id), functionClose(), colorCategorie(item.color)}}>
								<View style={[styles.circle, {backgroundColor: item.color}]}/>
								<Text style={styles.text_item_categories}>{item.name}</Text>
							</TouchableOpacity>}
						keyExtractor={item => item.id.toString()}
						style={styles.flat_list_categories}
					/>

					{loading && <ActivityIndicator message='Criando categoria...'/>}
				</View>
			</View>
		</Modal>
	);
};

export default AddCategory;
