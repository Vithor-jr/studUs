import React, { useState, useRef, useEffect } from 'react';
import { PanResponder, View, Image } from 'react-native';
import Svg, {SvgXml, Path, Circle, G, Text } from 'react-native-svg';
import svgs from '../../../../assets/svg';
import styles from '../style';

const CircularSlider = ({width, height, disabled, value, meterColor, onValueChange }) => {
  const [state, setState] = useState({
    cx: width / 2,
    cy: height / 2,
    r: (Math.min(width, height) / 2) * 0.85,
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        handlePanResponderMove(event.nativeEvent);
      },
    })
  ).current;

	useEffect(() => {
    let intervalId;

    if (disabled) {
      intervalId = setInterval(() => {
        onValueChange((prevValue) => prevValue > 0 ? prevValue - 0.05 : 0);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [disabled]);

  const polarToCartesian = (angle) => {
    const { cx, cy, r } = state;
    const a = (angle - 270) * Math.PI / 180.0;
    const x = cx + (r * Math.cos(a));
    const y = cy + (r * Math.sin(a));
    return { x, y };
  };

  const cartesianToPolar = (x, y) => {
    const { cx, cy } = state;
    return Math.round((Math.atan((y - cy) / (x - cx))) / (Math.PI / 180) + ((x > cx) ? 270 : 90));
  };

  const handlePanResponderMove = ({ locationX, locationY }) => {
    onValueChange(cartesianToPolar(locationX, locationY));
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      cx: width / 2,
      cy: height / 2,
      r: (Math.min(width, height) / 2) * 0.85,
    }));
  }, [width, height]);

  const { cx, cy, r } = state;
  const startCoord = polarToCartesian(0);
  const endCoord = polarToCartesian(value);

  return (
		<View style={styles.container_timer}>
			<View style={styles.container_back_timer}>
				<SvgXml xml={svgs.svgBackTimer}/>
				<View style={styles.circle_timer_image}/>
				<Image 
					source={require('../../../../assets/images/backgroundTimer.png')} 
					style={{position:'absolute'}}/>
			</View>
			
			<Svg style={{transform:[{rotate:'120deg'}]}} width={width} height={height}>
				<Circle cx={cx} cy={cy} r={r} stroke='rgba(205, 193,255, 0.8)' strokeWidth={10} fill='none' />
				<Path
					stroke={meterColor}
					strokeWidth={10}
					fill='none'
					d={value === 360 
						? `M${startCoord.x} ${startCoord.y} A ${r} ${r} 0 1 0 ${startCoord.x - 0.01} ${endCoord.y}`
						: `M${startCoord.x} ${startCoord.y} A ${r} ${r} 0 ${value > 180 ? 1 : 0} 1 ${endCoord.x} ${endCoord.y}`
				}			 
				/>
				<G x={endCoord.x - 7.5} y={endCoord.y - 7.5}>
					<Circle
						cx={7.5}
						cy={7.5}
						r={10}
						fill={meterColor}
						{...(disabled ? {} : panResponder.panHandlers)}
					/>
				</G>
			</Svg>
		</View>
  );
};

export default CircularSlider;
