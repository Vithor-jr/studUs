import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function FellinfCard({ index, title, url, color }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container_card}
      onPress={() => navigation.navigate('Felling', {navigation, title, index, url, color })}
    >
      {url !== '' && <Image source={url} style={styles.image} />}
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}
