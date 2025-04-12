import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import styles from '../style';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from '../../../context/UserContext';
import Ip from '../../../values/ip';
const width = Dimensions.get('window').width


const CustomBarChart = () => {
  const { userData } = useUserContext();
  const [chartData, setChartData] = useState();
	const valueIp = Ip()

  useEffect(() => {
    checkMoodDefinition();
  }, [userData]);

  const checkMoodDefinition = async () => {
    try {
      if (userData) {
        const token = await AsyncStorage.getItem('access_token');
        const userId = userData.id;
        const response = await axios.get(`https://${valueIp}/sessions/sessions-week/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const moodHistory = response.data.map(item => ({
          ...item,
          value: Number(item.value)
        }));

        setChartData(moodHistory);
      }
    } catch (error) {
      console.error("Erro ao verificar a definição de humor:", error);
    }
  };

  return (
    <View style={styles.container_bar}>
      <BarChart
        width={width * 0.7}
        data={chartData}
        noOfSections={5}
        xAxisColor={'rgba(192, 192, 192, 0.15)'}
        yAxisColor={'rgba(192, 192, 192, 0.15)'}
        rulesColor={'white'}
        yAxisThickness={2}
        xAxisThickness={2}
        horizontalRulesStyle={styles.line}
        yAxisTextStyle={styles.label_bar}
        xAxisLabelTextStyle={styles.label_bar}
        barWidth={width * 0.02}
        spacing={width * 0.074}
        barBorderTopLeftRadius={10}
        barBorderTopRightRadius={10}
      />
			<View style={styles.container_text_min}>
				<Text style={{...styles.label_bar,padding:5, backgroundColor:'white'}}>min</Text>
			</View>
    </View>
  );
};

export default CustomBarChart;
