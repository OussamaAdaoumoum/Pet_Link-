import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './src/Screens/LoginScreen';


import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
// import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" /> */}
        {/* <LoginScreen/> */}
        <AuthStack />
        <Text>iudeniudzehiudn</Text>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
