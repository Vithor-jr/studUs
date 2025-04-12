import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { View, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useUserContext } from '../../context/UserContext';
import Ip from "../../values/ip";

const { width: screenWidth } = Dimensions.get("window");

export default function SplashScreen() {
  const navigation = useNavigation();
  const uTranslateX = useSharedValue(0);
  const uImageSize = useSharedValue(screenWidth * 0.3);
  const containerOpacity = useSharedValue(0);
  const { setUserData } = useUserContext();
  
  const valueIp = Ip()

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        try {
          const userDataResponse = await axios.get(`https://${valueIp}/user/dados`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(userDataResponse.data);
          navigation.reset({ index: 0, routes: [{ name: 'Menu' }] });
        } catch (error) {
          console.log('Erro ao buscar dados do usuário:', error);
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        }
      } else {
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
      }
    };

    const showU = async () => {
      uTranslateX.value = withTiming(0, {
        duration: 0,
        easing: Easing.ease,
      });

      await new Promise(resolve => setTimeout(resolve, 1000));

      uTranslateX.value = withTiming(screenWidth * 0.16, {
        duration: 500,
        easing: Easing.ease,
      });
      uImageSize.value = withTiming(screenWidth * 0.2, {
        duration: 500,
        easing: Easing.ease,
      });
      runOnJS(startTextContainerAnimation)();
    };

    const startTextContainerAnimation = () => {
      containerOpacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.ease,
      });

      setTimeout(() => {
        runOnJS(checkAuth)();
      }, 500); 
    };

    runOnJS(showU)();
  }, [navigation, setUserData]);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: uTranslateX.value },
        { translateY: 0 },
        { scale: uImageSize.value / (screenWidth * 0.3) },
      ],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: containerOpacity.value,
    };
  });

  return (
    <View style={style.container}>
      <View style={style.center}>
        <Animated.Image
          source={require("../../../assets/images/u.png")}
          style={[style.imageU, animatedImageStyle]}
        />
      </View>
      <View style={style.textContainer}>
        <Animated.Text style={[style.text, animatedContainerStyle]}>stud</Animated.Text>
        <Animated.Text style={[style.text, animatedContainerStyle]}>s</Animated.Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#24125A",
  },
  center: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  imageU: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.35,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth * 0.2,
  },
  text: {
    fontFamily: 'Varela-Round',
    fontSize: screenWidth * 0.2,
    color: "#F78223",
  },
  textU: {
    fontFamily: 'Varela-Round',
    color: "#8856BB",
  },
});