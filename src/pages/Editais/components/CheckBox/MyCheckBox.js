import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Item({label, check,  onToggle}) {

	return (
   <View style={styles.item}>
		 <Pressable
				role="checkbox"
				aria-checked={check}
				style={[styles.checkboxBase, check && styles.checkboxChecked]}
				onPress={onToggle}>

				{check && <Ionicons name="checkmark" size={24} color="white" />}
			</Pressable>

			<Text>
				{label !== '' || label !== null ? label : "assunto não encontrado"}	
			</Text>
	 </View>
  );
}


const styles = StyleSheet.create({
  item:{
		justifyContent:'space-between',
		flexDirection:'row',
		gap:10,
		alignItems:'center'
	},
	checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});

