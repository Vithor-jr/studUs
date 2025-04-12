import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import styles from '../style';
import { SvgXml } from 'react-native-svg';
import { svg_mind } from '../../../../assets/Mind_Images/Svg/svgs';

const width = Dimensions.get('window').width;

const moodToValue = {
    'TRISTE': 10,
    'RAIVA': 20,
    'NEUTRO': 30,
    'FELIZ': 40
};

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];


const LineChartEmotional = ({ data }) => {
	const [lineData, setLineData] = useState([]);

	useEffect(() => {
			if ( data  && data.length) {
				const transformedData = data.map(item => {
						const date = new Date(item.date);
						const dayOfWeek = date.toLocaleString('pt-BR', { weekday: 'short' });
						const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
						return { value: moodToValue[item.mood], label: formattedDay.endsWith('.') ? formattedDay.slice(0, -1) : formattedDay };
				});
					const allDaysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

					const filledData = allDaysOfWeek.map(day => {
							const existingData = transformedData.find(item => item.label === day);
							return existingData || { value: 0, label: day };
					});

					setLineData(filledData);
			}
	}, [data]);

    return (
        <View style={{ ...styles.container_bar, paddingVertical: 15 }}>
            <LineChart
                data={lineData}
                noOfSections={4}
                maxValue={40}
                xAxisColor={'rgba(192, 192, 192, 0.15)'}
                yAxisColor={'rgba(192, 192, 192, 0.15)'}
                xAxisThickness={2}
                yAxisThickness={2}
                xAxisLabelTextStyle={styles.label_bar}
                yAxisTextStyle={styles.label_bar}
                color1='#6048AC'
                width={width * 0.7}
                rulesColor={'white'}
                spacing={width * 0.1}
                height={width * 0.4}
                dataPointsColor1='#6048AC'
            />

            <View style={styles.container_emoji}>
                <View style={{ ...styles.emoji, backgroundColor: '#FFEB82' }}>
                    <Image
                        style={{ width: width * 0.05, height: width * 0.05 }}
                        source={require('../../../../assets/Mind_Images/emojis/beaming.png')}
                    />
                </View>

                <View style={{ ...styles.emoji, backgroundColor: '#C7C7C7' }}>
                    <Image
                        style={{ width: width * 0.05, height: width * 0.05 }}
                        source={require('../../../../assets/Mind_Images/emojis/neutral.png')}
                    />
                </View>

                <View style={{ ...styles.emoji, backgroundColor: '#EC7A7A' }}>
                    <Image
                        style={{ width: width * 0.05, height: width * 0.05 }}
                        source={require('../../../../assets/Mind_Images/emojis/angry.png')}
                    />
                </View>

                <View style={{ ...styles.emoji, backgroundColor: '#74B4FF' }}>
                    <Image
                        style={{ width: width * 0.05, height: width * 0.05 }}
                        source={require('../../../../assets/Mind_Images/emojis/frowning.png')}
                    />
                </View>

                <SvgXml width={width * 0.06} height={width * 0.06} xml={svg_mind.svg_hearth} />
            </View>
        </View>
    );
};

export default LineChartEmotional;