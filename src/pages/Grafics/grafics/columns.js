import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GraficColumns = () => {
  const columnData = [20, 100, 130, 80, 150, 60, 120];
  const columnColors = ['#FAC9B9', '#D6D0E7', '#D3E6C1', '#FFD0A0', '#FAC9B9', '#D6D0E7', '#D3E6C1'];

  return (
    <View style={styles.container}>
			<View>
				<View style={styles.rightValues}>
					<View style={styles.lines}>
						<Text style={styles.rightValueText}>9h</Text>
					</View>
					<View style={styles.lines}>
						<Text style={styles.rightValueText}>6h</Text>
					</View>
					<View style={styles.lines}>
						<Text style={styles.rightValueText}>3h</Text>
					</View>
					<View style={styles.lines}>
						<Text style={styles.rightValueText}>1h</Text>
					</View>
				</View>

				<View style={styles.chart}>
					{columnData.map((value, index) => (
						<View
							key={index}
							style={[
								styles.column,
								{
									height: value,
									backgroundColor: columnColors[index],
								},
							]}
						/>
					))}
				</View>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    height: 200,
		width:'80%'
  },
  chart: {
    flexDirection: 'row',
		alignItems:'flex-end',
		justifyContent:"space-between",
		width:'100%',
		paddingRight:20
  },
  column: {
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 10,
  },
  rightValues: {
    position: 'absolute',
    justifyContent: 'space-between',
		width:'100%',
		gap:30, 
		bottom:0
  },
  rightValueText: {
    fontSize: 12,
		fontFamily:'Varela-Round',
		color:"rgba(0, 0, 0, 0.6)"
  },
	lines:{
		borderBottomWidth:1,
		borderColor:"#EFEFEF",
		width:'100%',
		alignItems:'flex-end'
	}
});

export default GraficColumns;
