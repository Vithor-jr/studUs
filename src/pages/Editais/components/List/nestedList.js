import React, { useState } from "react";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import { updateList } from "../../functions";
import { useUserContext } from "../../../../context/UserContext"; // Importe o contexto do usuário

export const NestedList = ({ data, atualiar }) => {
  const { userData } = useUserContext();
	const [checkboxStates, setCheckboxStates] = useState(data.map((item) => item.checked));

  const handleCheck = async (topicId, checked, index) => {
		const updatedChecked = !checked;
		userData && (await updateList(topicId, updatedChecked, userData.id));
		await atualiar()
		
		//Aualizar localmente
		const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
	};

  return (
    <View style={styles.nestedList}>
      {data.map((item, index) => (
        <View key={index} style={styles.container_item}>
          <Checkbox
						value={checkboxStates[index]}
            style={{ borderRadius: 5, width: 17, height: 17, borderColor: "black" }}
            color={checkboxStates[index] ? "#6048AC" : undefined}
            onValueChange={() => handleCheck(item.id, item.checked, index)}
          />
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      ))}
      <View
        style={{
          marginHorizontal: "25%",
          height: 1,
          marginTop: 10,
          backgroundColor: "rgba(112, 111, 111, 0.18)",
        }}
      />
    </View>
  );
};
