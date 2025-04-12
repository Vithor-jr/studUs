import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen')

const screenWidth = width

const CustomIndicator = ({ order }) => {
  const [width, setWidth] = useState(0);
  const positionX = useSharedValue(0);

  useEffect(() => {
    function getWidth() {
      if (order === 1) {
        setWidth(65);
      } else if (order === 2) {
        setWidth(73);
      } else setWidth(70);
    }

    function getPosition() {
      if (order === 1) {
        positionX.value = screenWidth*0.08;
      } else if (order === 2) {
        positionX.value = screenWidth*0.408;
      } else positionX.value = screenWidth*0.743;
    }

    getPosition();
    getWidth();
  }, [order, positionX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(positionX.value) }],
    };
  });

  return (
    <View style={styles.indicator}>
      <Animated.View style={[styles.indicator_son, { width: width }, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: '100%',
    height: '100%',
    justifyContent:'flex-end'
  },
  indicator_son: {
    height:4,
    backgroundColor: '#17A1FA',
    borderRadius:10
  },
});

export default CustomIndicator;
