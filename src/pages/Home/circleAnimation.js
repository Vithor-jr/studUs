import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

const CircleAnimation = () => {
  const [color1] = useState('#676767');
  const [color2] = useState('#B7B4B4'); 
  const [color3] = useState('#BFBDBD');
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent % 3) + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const getCircleColor = (circleNumber) => {
    if (circleNumber === current) {
      return color1;
    } else if (circleNumber === 1) {
      return color2;
    } else if (circleNumber === 2) {
      return color3;
    } else {
      return color2;
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap:3 }}>
      <View
        style={{
          backgroundColor: getCircleColor(1),
          width: 10,
          height: 10,
          borderRadius: 10,
					opacity: 0.3
        }}
      />
      <View
        style={{
          backgroundColor: getCircleColor(2),
          width: 10,
          height: 10,
          borderRadius: 10,
					opacity: 0.3
        }}
      />
      <View
        style={{
          backgroundColor: getCircleColor(3),
          width: 10,
          height: 10,
          borderRadius: 10,
					opacity: 0.3
        }}
      />
    </View>
  );
};

export default CircleAnimation;
