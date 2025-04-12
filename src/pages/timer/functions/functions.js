import Ip from "../../../values/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function GetSessionByUser(id){
	const token = await AsyncStorage.getItem('access_token');
	const valueIp = Ip()

	const response = await axios.get(`https://${valueIp}/sessions/${id}/sessions-user`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});
 
	return response.data;
}

export async function GetDataSession(id){
	const token = await AsyncStorage.getItem('access_token');
	const valueIp = Ip()

	const response = await axios.get(`https://${valueIp}/sessions/${id}/sessions-by-id`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});
 
	return response.data;
}

export async function GetSessionTodayByUser(id){
	const token = await AsyncStorage.getItem('access_token');
	const valueIp = Ip()

	const response = await axios.get(`https://${valueIp}/sessions/${id}/sessions-user-today`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});
 
	return response.data;
}

export async function deleteSession(userId, sessionId){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.delete(`https://${valueIp}/sessions/${userId}/${sessionId}/delete-session`, 
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});

	return response.data;
}

export async function updateSession(userId, sessionId, duration, title, categoryId){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.patch(`https://${valueIp}/sessions/update-session/${userId}`, 
	{
		name: title,
		duration: duration,
		categoryId:categoryId,
		sessionId:sessionId
	},
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});

	return response.data
}

export async function CreateSessions(name, startAt, endAt, duration, userId, categorieId){
	const token = await AsyncStorage.getItem('access_token');
	const valueIp = Ip()

	const response = await axios.post(`https://${valueIp}/sessions/create-session`, 
	{
		 name: name,
		 duration: duration,
		 categoryId: categorieId,
		 start: startAt,
		 end: endAt,
		 userId: userId
	},
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});
 
	return response.data;
}