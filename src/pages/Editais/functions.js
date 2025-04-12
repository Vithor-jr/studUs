import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Ip from "../../values/ip";

export async function getList(id) {
  const valueIp = Ip();

  const token = await AsyncStorage.getItem('access_token');
  const response = await axios.get(`https://${valueIp}/edital/all-with-progress/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateList(topicId, updatedChecked, userId) {
  const valueIp = Ip();

  const token = await AsyncStorage.getItem('access_token');

  try {
    await axios.put(`https://${valueIp}/edital/progress/${userId}/${topicId}`, {
      checked: updatedChecked,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`Topic ${topicId} updated successfully.`);
  } catch (error) {
    console.error(`Error updating topic ${topicId}:`, error);
  }
}