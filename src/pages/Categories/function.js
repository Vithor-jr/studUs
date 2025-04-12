import Ip from "../../values/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function deleteCategorie(categoryId){
	try {
		const valueIp = Ip()
		const token = await AsyncStorage.getItem('access_token')
		const response = await axios.delete(`https://${valueIp}/activities/categories/${categoryId}`, 
		{
			headers: {
				Authorization: `Bearer ${token}`,
			}
		});

		console.log(response)
		return response.data;
	} catch(error) {
		console.error('Erro ao buscar categorias:', error.message);
    throw new Error('Ocorreu um erro ao buscar as categorias.');
	}
}


export async function getCategories(id){
	try {
		const valueIp = Ip()
		const token = await AsyncStorage.getItem('access_token');
		const response = await axios.get(`https://${valueIp}/activities/categories/${id}`, {
			headers:{
				Authorization: `Bearer ${token}`
			}
		});

		return response.data
	} catch (error) {
    console.error('Erro ao buscar categorias:', error.message);
    throw new Error('Ocorreu um erro ao buscar as categorias.');
	}
};