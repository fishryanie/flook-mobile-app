import React from 'react'
import SignInScreen from '../Screens/SignIn/SignIn'
import SignUpScreen from '../Screens/SignUp/SignUp'
import { ScreenName } from '../Constants/ScreenNameConstants';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthStack = createNativeStackNavigator();
export default function AuthStackNavigator() {
  // console.log("AuthStackNavigator")
  return (
    <AuthStack.Navigator initialRouteName={ScreenName.signinScreen} screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ScreenName.signinScreen} component={SignInScreen} />
      <AuthStack.Screen name={ScreenName.signupScreen} component={SignUpScreen} />
    </AuthStack.Navigator>
  )
}
