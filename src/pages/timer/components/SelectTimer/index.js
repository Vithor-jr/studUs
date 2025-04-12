import {
	View,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import { styles } from './style'
import { useEffect, useState } from 'react'

export default function TimerSelector({ setValue, value }) {
	const stringFoco = `Tempo de foco >`
	const [numbers, setNumbers] = useState([]);

	useEffect(() => {
		function getNumber() {
			const newNumbers = [];
			for (let i = 10; i <= 120; i += 5) {
				newNumbers.push(i);
			}
			setNumbers(newNumbers);
		}

		getNumber();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{stringFoco}</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.container_number}>
					{
						numbers && numbers.map((item, index) => (
							<TouchableOpacity
								onPress={() => setValue(item)}
								key={index}
								style={{
									backgroundColor:item===value ? 'white' : null,
									borderRadius:5,
									width:40,
									height:35,
									alignItems:'center',
									justifyContent:'center'
								}}
								>
									<Text style={styles.text_number}>{item}</Text>
							</TouchableOpacity>
						))
					}
				</View>
			</ScrollView>
			<Text style={styles.text_bottom}>Minutos</Text>
		</View>
	)
}