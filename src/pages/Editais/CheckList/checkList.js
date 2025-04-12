import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import data from "../data/data_lists/Math.json";
import MyCheckbox from "../components/CheckBox/MyCheckBox"
import { useUserContext } from "../../../context/UserContext";


export default function ListTest() {
  const [checklist, setChecklist] = useState([]);
	const {userData} = useUserContext()

	const userId = userData.id;
	const CHECKLIST_KEY = (userId) => `checklist_math_${userId}`;

  const loadChecklist = async () => {
    try {
      const savedChecklist = await AsyncStorage.getItem(CHECKLIST_KEY(userId));
      if (savedChecklist) {
        setChecklist(JSON.parse(savedChecklist));
      } else {
        const initialChecklist = data.map(item => ({ ...item, checked: false }));
        setChecklist(initialChecklist);
      }
    } catch (error) {
      console.error("Erro ao carregar o checklist:", error);
    }
  };

  const saveChecklist = async (updatedChecklist) => {
    try {
      await AsyncStorage.setItem(CHECKLIST_KEY(userId), JSON.stringify(updatedChecklist));
    } catch (error) {
      console.error("Erro ao salvar o checklist:", error);
    }
  };

  const toggleCheck = (id) => {
    const updatedChecklist = checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist(updatedChecklist);
    saveChecklist(updatedChecklist);
  };

  useEffect(() => {
    loadChecklist();
  }, []);

  return (
    <View>
      <FlatList
        data={checklist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MyCheckbox
            key={item.id}
            label={item.label}
            check={item.checked}
            onToggle={() => toggleCheck(item.id)}
          />
        )}
      />
    </View>
  );
}
