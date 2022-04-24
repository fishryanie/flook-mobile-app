import React from 'react'
import SignInScreen from '../Screens/SignInScreen/SignIn' 
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen'
import { ScreenName } from '../Constants/ScreenNameConstants';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthStack = createNativeStackNavigator();
export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={ScreenName.signinScreen} screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ScreenName.signinScreen} component={SignInScreen}/>
      <AuthStack.Screen name={ScreenName.signupScreen} component={SignUpScreen}/>
    </AuthStack.Navigator>
  )
}
