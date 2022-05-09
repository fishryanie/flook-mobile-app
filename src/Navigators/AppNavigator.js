import React from 'react'
import { ScreenName } from '../Constants/ScreenNameConstants';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStackNavigator from './MainStackNavigator'
import AuthStackNavigator from './AuthStackNavigator';

const AppStack = createNativeStackNavigator();
export default function AppNavigator() {

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={ScreenName.authStackNavigator} screenOptions={{ headerShown: false }}>
        <AppStack.Screen name={ScreenName.authStackNavigator} component={AuthStackNavigator} />
        <AppStack.Screen name={ScreenName.mainStackNavigator} component={MainStackNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}


