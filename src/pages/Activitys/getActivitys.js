import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Ip from "../../values/ip";

export async function getActivtysToday(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/today`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});
 
	return response.data;
}


export async function getActivtysWeek(id){
    const valueIp = Ip()

		const token = await AsyncStorage.getItem('access_token')
		const response = await axios.get(`https://${valueIp}/activities/${id}/week`, {
				headers: {
						Authorization: `Bearer ${token}`,
				},
		});
   
    return response.data;
}

export async function getActivtyById(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/get-activitys-by-id`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

 
	return response.data[0];
}


export async function getActivtysNextWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/next-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});
 
	return response.data;
}

export async function getActivitysAfterNextWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/not-next-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysNotCompletedWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/not-completed-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysNotCompletedLastWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/not-completed-last-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysNotCompletedBeforeLastWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/not-completed-before-last-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysCompletedEarly(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/completed-early`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysCompletedBeforeLastWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/completed-before-last-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysCompletedLastWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/completed-last-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function getActivitysCompletedWeek(id){
	const valueIp = Ip()

	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/completed-week`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function deleteActivity(id, activityIdentificator){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.delete(`https://${valueIp}/activities/${id}/delete-activity`, 
	{
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: {
			activityId : activityIdentificator
		}
	});

	return response.data;
}

export async function completeActivity(id, activityIdentificator){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.patch(`https://${valueIp}/activities/${id}/complete`, 
	{
		activityId : activityIdentificator
	},
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});

	return response.data;
}

export async function getActivitysNotCompletedToday(id){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/today`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});


	return response.data;
}

export async function getActivitysImportant(id){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.get(`https://${valueIp}/activities/${id}/get-activitys-important`, {
			headers: {
					Authorization: `Bearer ${token}`,
			},
	});

	return response.data;
}

export async function putImportantActivity(id, activityIdentificator){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.patch(`https://${valueIp}/activities/${id}/patch-important-activity`, 
	{
		activityId : activityIdentificator
	},
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});

	return response.data;
}

export async function updateActivity(activityIdentificator, name, dueDate, categoryId){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const response = await axios.patch(`https://${valueIp}/activities/${activityIdentificator}/update-activity`, 
	{
		name: name,
		categoryId: categoryId,
		dueDate : dueDate,
	},
	{
		headers: {
			Authorization: `Bearer ${token}`,
		}
	});

	return response.data;
}


export async function getActivitysCompletedToday(id){
	const valueIp = Ip()
	const token = await AsyncStorage.getItem('access_token')
	const responseCompletedToday = await axios.get(`https://${valueIp}/activities/${id}/completed-today`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return responseCompletedToday.data;
}
