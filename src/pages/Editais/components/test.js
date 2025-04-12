import { useState, useEffect } from "react";
import { 
	View, 
	TouchableOpacity,
	Text,
	FlatList,
	ScrollView
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';

import List from "../components/List";
import svgs  from "../../../../assets/svg";

import { useUserContext } from "../../../context/UserContext";
import { styles } from "./styles";
import { getList, updateList } from "../functions";

export default function CheckList(){
	const navigate = useNavigation()
	const route = useRoute();
	const vestibularName = route.params?.vestibular; 
	
	const {userData} = useUserContext()
	const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if(userData){
				const response = await getList(userData.id)
				setTopics(response);
			}
    };

    fetchData();
  }, []);

  const handleCheck = async (topicId, checked) => {
    const updatedChecked = !checked;
    const updatedTopics = topics.map(topic =>
      topic.id === topicId ? { ...topic, checked: updatedChecked } : topic
    );
    setTopics(updatedTopics);
		
    userData && await updateList(topicId, updatedChecked, userData.id)
  };


	return(
		<View style={styles.screen_container}>
			<View style={styles.container_top}>
				<TouchableOpacity onPress={() => navigate.goBack()}>
          <SvgXml xml={svgs.svgBack} style={{transform:[{rotate:'180deg'}]}} width={25} height={20} />
        </TouchableOpacity>
			</View>

			<View>
				<View style={styles.container_title_header}>
					<SvgXml xml={svgs.svgCheckList} width={25} height={25}/>
					<Text style={styles.text_title}>Checklist</Text>
				</View>
				<Text style={styles.text_subtitle}>Assuntos</Text>
			</View>

			<View style={styles.container_body}>
				<List vestibularName={vestibularName}/>
			</View>

			
		</View>
	)
}