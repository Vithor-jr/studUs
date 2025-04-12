import { 
	getActivtysToday,
	getActivtysWeek, 
	getActivitysAfterNextWeek, 
	getActivtysNextWeek,
	getActivitysCompletedWeek,
	getActivitysCompletedLastWeek,
	getActivitysNotCompletedBeforeLastWeek,
	getActivitysCompletedEarly,
	getActivitysNotCompletedWeek,
	getActivitysNotCompletedLastWeek,
	getActivitysImportant,
	getActivitysCompletedToday
} from "./getActivitys";

export async function updateActivtys(id, setters){
	
	try {
		if(id){
				const week = await getActivtysWeek(id)
				setters.setActivitysWeek(week)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades da semana:", error);
	}

	try {
		if(id){
				const nextWeek = await getActivtysNextWeek(id)
				setters.setActivtysNextWeek(nextWeek)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades da próxima semana:", error);
	}

	try {
		if(id){
				const afterNextWeek = await getActivitysAfterNextWeek(id)
				setters.setActivtysAfterNextWeek(afterNextWeek)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades depois da próxima semana:", error);
	}

	try {
		if(id){
				const completeWeek = await getActivitysCompletedWeek(id)
				setters.setActivitysCompleteWeek(completeWeek)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades completas da semana:", error);
	}

	try {
		if(id){
				const completeLastWeek = await getActivitysCompletedLastWeek(id)
				setters.setActivtysLastWeek(completeLastWeek)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades completadas na semana passada: ", error);
	}

	try {
		if(id){
				const beforeLastWeek = await getActivitysNotCompletedBeforeLastWeek(id)
				setters.setActivtyBefore(beforeLastWeek)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades concluídas antes da semana passada: ", error);
	}

	try {
		if(id){
				const early = await getActivitysCompletedEarly(id)
				setters.setActivtyEarly(early)
		}
	} catch (error) {
		console.error("Erro ao buscar atividades comcluídas com antecedência:", error);
	}

	try {
		if(id){
				const notCompleteWeek = await getActivitysNotCompletedWeek(id)
				setters.setActivtysNotCompletedWeek(notCompleteWeek);
		}
	} catch (error) {
			console.error("Erro ao buscar atividades pendentes da semana:", error);
	}

	try {
		if(id){
				const notCompleteLastWeek = await getActivitysNotCompletedLastWeek(id)
				setters.setActivtysNotCompletedLastWeek(notCompleteLastWeek)
		}
	 } catch (error) {
		 console.error("Erro ao buscar atividades pendentes da semana passada:", error);
	 }

	 try {
		if(id){
					const notCompleteBeforeLastWeek = await getActivitysNotCompletedBeforeLastWeek(id)
					setters.setActivtysNotCompletedBeforeLastWeek(notCompleteBeforeLastWeek);
			}
		} catch (error){
				console.error('Erro ao buscar atividades pendentes anteriores a semana passada:', error);
		}

		try {
			if(id){
						const important = await getActivitysImportant(id)
						setters.setActivitysImportant(important);
				}
		} catch (error){
				console.error('Erro ao buscar atividades importantes:', error);
		}

		try {
			if(id){
				const week = await getActivitysCompletedToday(id)
				let count = week.length
				setters.setCompletedActivitiesCountToday(count.toString().padStart(2, '0'))
			}
		} catch (error) {
			console.error("Erro ao buscar atividades da semana:", error);
		}
		
		try {
			if(id){
				const today = await getActivtysToday(id)
				setters.setActiviesToday(today)
			}
		} catch (error) {
			console.error("Erro ao buscar atividades da semana:", error);
		}
}