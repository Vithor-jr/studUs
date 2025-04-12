import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';

const data = [
  { label: '2024', value: '2024' },
  { label: '2023', value: '2023' },
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
  { label: '2020', value: '2020' },
];

const DropdownSearch = ({ year, background, setYear }) => {
	const [isFocus, setIsFocus] = useState(false);

	return (
    <View style={styles.container}>
      <Dropdown
        style={
				[styles.dropdown, { 
						borderBottomRightRadius:isFocus ? 0 : 10,
						borderBottomLeftRadius:isFocus ? 0 : 10,
						backgroundColor: background 
				}]}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
				placeholderStyle={styles.selectedTextStyle}
        data={data}
				itemTextStyle={styles.item_text}
				itemContainerStyle={styles.item_container}
				containerStyle={styles.container_bottom}
        iconColor='white'
				onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={year}
        value={year}
        onChange={item => {
					setIsFocus(false);
          setYear(item.value);
        }}
      />
    </View>
  );
};

export default DropdownSearch;
