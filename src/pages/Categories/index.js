import React, {useState, useEffect} from "react";
import {
	View, 
	Text, 
	TouchableOpacity,
	TextInput,
} from "react-native";
import styles from "./style";
import svgs from "../../../assets/svg";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import Ip from "../../values/ip";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import ModalOptionsCategories from "./Components/ModalOptions";
import ModalCreateCategories from "../Home/Components/ModalCreateCategories";

export default function Categories(){
	const ip = Ip()
	const {userData, categories, setCategories} = useUserContext()
	const navigate = useNavigation()
	const [inputFocus, setInputFocus] = useState(false)
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCategories, setFilteredCategories] = useState(categories);

	const [pressCetegorie, setPressCategorie] = useState([])
	const [modalOptionVisible, setModalOptionVisible] = useState(false)
	const [modalCreateVisible, setModalCreateVisible] = useState(false)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const token = await AsyncStorage.getItem('access_token');
				const response = await axios.get(`https://${ip}/activities/categories/${userData.id}`, {
					headers:{
						Authorization: `Bearer ${token}`
					}
				});
	
				setCategories(response.data);
			} catch (error) {
				console.error(error);
			}
		};
	
		fetchCategories();
	}, []);

	useEffect(()=>{
		let firstCategories = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

		categories.sort((a, b) => {
			if (firstCategories.includes(a.id) && !firstCategories.includes(b.id)) {
				return -1;
			}
			if (!firstCategories.includes(a.id) && firstCategories.includes(b.id)) {
				return 1;
			}
			return 0;
		});
		setFilteredCategories(categories); 
	}, [categories])
	
	
	const searchCategories = (term) => {
		setSearchTerm(term);
		if (term) {
			setFilteredCategories(categories.filter(category => 
				category.name.toLowerCase().includes(term.toLowerCase())
			));
		} else {
			setFilteredCategories(categories);
		}
	};	

	return(
		<View style={styles.container}>
			<View style={styles.container_top}>
				<TouchableOpacity onPress={() => navigate.openDrawer()}>
          <SvgXml xml={svgs.svgDrawer} width={20} height={15} />
        </TouchableOpacity>
			</View>

			<View style={styles.container_form}>
				<View style={styles.container_list_categories}>
				
				<View style={styles.container_input}>
						<TextInput
								value={searchTerm}
								onFocus={()=>setInputFocus(true)}
								onBlur={()=>setInputFocus(false)}
								onChangeText={searchCategories}
								style={styles.text_input_search}
						/>

						{searchTerm === '' && !inputFocus &&
							<View style={{ position: 'absolute', flexDirection: 'row', gap: 5}}>
									<SvgXml xml={svgs.svgLupa} color='#999999' />
									<Text style={styles.placeholder_input_search}>Procurar Categorias</Text>
							</View>
						}
				</View>

						
					
					<KeyboardAwareScrollView
							showsVerticalScrollIndicator={false}
							keyExtractor={item => item.id.toString()}
					>
						<View>
								{filteredCategories.map((item, index) => 
										<TouchableOpacity 
											key={index}
											onPress={()=>{
												setPressCategorie(item),
												setModalOptionVisible(true)
											}}
											style={styles.container_item_categories}
										>
												<View style={[styles.circle, {backgroundColor: item.color}]}/>
												<Text style={styles.items_categories}>{item.name}</Text>
										</TouchableOpacity>
								)}

								<View style={{height:100}}/>
						</View>
					</KeyboardAwareScrollView>
				</View>

				<View style={styles.container_button_add}>
					<TouchableOpacity
						style={styles.addButton} 
						onPress={()=>setModalCreateVisible(true)}
					>
						<SvgXml xml={svgs.scgAddCategorie} width={17} height={16}/>
					</TouchableOpacity>
				</View>

				{modalOptionVisible && <ModalOptionsCategories categorie={pressCetegorie} onClose={()=>setModalOptionVisible(false)}/>}
				{modalCreateVisible && <ModalCreateCategories isUnique={true} isVisible={()=>setModalCreateVisible(false)}/>}
			</View>
		</View>
	);
}