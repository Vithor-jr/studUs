import React, { useState, useEffect } from 'react';
import { View, TextInput,Text, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';
import { SvgXml } from 'react-native-svg';
import { svg_mind } from '../../../../../assets/Mind_Images/Svg/svgs';

const Book = () => {
	const initialNumberOfLines = 10;
  const lineHeight = 20;

  const [note, setNote] = useState('');
  const [numberOfLines, setNumberOfLines] = useState(initialNumberOfLines);
  const [contentHeight, setContentHeight] = useState(initialNumberOfLines * lineHeight);

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setContentHeight(contentHeight);
  };

  useEffect(() => {
    const lines = Math.max(initialNumberOfLines, Math.ceil(contentHeight / lineHeight));
    setNumberOfLines(lines);
  }, [contentHeight]);

  return (
    <View style={styles.container_book}>
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{...styles.container}}>
        <View style={styles.lines}>
          {[...Array(numberOfLines)].map((_, i) => (
            <View key={i} style={[styles.line]} />
          ))}
        </View>

        <TextInput
          style={[
            styles.textInput,
            { height: numberOfLines * lineHeight },
          ]}
          multiline
          value={note}
          onChangeText={value => setNote(value)}
          onContentSizeChange={(e) => handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)}
        />
      </ScrollView>

      <View style={styles.container_bottom_book}>
        <SvgXml xml={svg_mind.star_topic} width={15} height={15}/>
        <Text style={styles.text_book}>Escrever pode ajudar a entender melhor as emoções que nos norteiam e aliviar nossa mente!</Text>
      </View>
    </View>
  );
}

export default Book
