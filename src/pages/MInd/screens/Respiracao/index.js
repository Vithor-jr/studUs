import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
    Easing,
    runOnJS,
    withDelay
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../../assets/svg';

const { width } = Dimensions.get('window');

export default function Respiracao() {
    const navigate = useNavigation();
    const sizeCircle3 = useSharedValue(0);
    const [running, setRunning] = useState(false);
    const [message, setMessage] = useState('Inspire');

    const circle3Styles = useAnimatedStyle(() => ({
        width: sizeCircle3.value,
        height: sizeCircle3.value,
    }));

    useEffect(() => {
        if (running) {
            sizeCircle3.value = withRepeat(
                withSequence(
                    withDelay(200, withTiming(width * 0.68, {
                        duration: 5000,
                        easing: Easing.linear,
                    }, () => {
                        runOnJS(setMessage)('Expire');
                    })),
                    withDelay(500, withTiming(0, {
                        duration: 5000,
                        easing: Easing.linear,
                    }, () => {
                        runOnJS(setMessage)('Inspire');
                    }))
                ), -1, true
            );
        }
    }, [running]);

    function expirar() {
        if (running) {
            sizeCircle3.value = withTiming(0, {
                duration: 500,
                easing: Easing.linear,
            });
        }
        setRunning(!running);
    }

    return (
        <ImageBackground source={require('../../../../../assets/Mind_Images/background/background_respiracao.png')} style={styles.container}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <SvgXml xml={svgs.svgBack} height={25} width={40} style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <View style={styles.container_body}>
                <ImageBackground style={styles.circle4} source={require('../../../../../assets/Mind_Images/background/circle_4.png')} >
                    <Animated.View style={[styles.cicle3, circle3Styles]}>
                        <View style={styles.cicle2}>
                            <View style={styles.circle1}>
                                <Text style={styles.text}>{message}</Text>
                            </View>
                        </View>
                    </Animated.View>
                </ImageBackground>
            </View> 
                        
            <TouchableOpacity style={styles.button} onPress={expirar}>
                <Text style={styles.label}>{running ? 'Parar' : 'Começar'}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}