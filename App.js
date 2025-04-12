import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar, View, Text } from 'react-native';
import { UserProvider } from './src/context/UserContext';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

console.disableYellowBox = true;


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Varela-Round': require('./src/fonts/VarelaRound-Regular.ttf'),
    'Quicksand-Bold': require('./src/fonts/Quicksand-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <UserProvider>
      <NavigationContainer>
       <View onLayout={onLayoutRootView} style={{flex:1}}>
          <StatusBar backgroundColor="#3B267B" barStyle="light-content" />
          <Routes />
       </View>
      </NavigationContainer>
    </UserProvider>
  );
}
