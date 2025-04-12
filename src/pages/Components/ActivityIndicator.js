import React, {useEffect} from 'react';
import { StyleSheet,Text,View, Modal } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';


export default function ActivityIndicator({message}) {
	const imageWidth = useSharedValue(150);
	const imageHeight = useSharedValue(150);

	const imageStyles = useAnimatedStyle(() => ({
		width: imageWidth.value,
		height: imageHeight.value,
	}));

	
	//withRepeat(animation, repeatCount, reverse)
  //-1 significa infinitas vezes
	useEffect(() => {
		imageWidth.value = withRepeat(withSpring(imageWidth.value - 50), -1, true);
		imageHeight.value = withRepeat(withSpring(imageHeight.value - 50), -1, true);

	}, []);

  return (
   <Modal
		transparent
	 >
			<View style={styles.container}>
				<View style={styles.container_body}>
					<View style={styles.container_loading}>
						<View style={styles.box}>
							<Animated.Image
								source={require('../../../assets/images/icon_studus.png')}
								style={[imageStyles, styles.image]}
							/>
						</View>
						<Text style={styles.text}>{message}</Text>
					</View>
				</View>
			</View>
	 </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor:'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	container_body:{
		width:300,
		height:300,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:20,
		backgroundColor:'white'
	},
	container_loading:{
		height:230,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
	},
	box:{
		width:200,
		height:200,
		alignItems:'center',
		justifyContent:'center'
	},
	image:{
		borderRadius:100
	},
	text:{
		fontFamily:"Quicksand-Bold",
		fontSize:20,
		paddingHorizontal:30,
		textAlign:'center',
		paddingBottom:10
	}
});
