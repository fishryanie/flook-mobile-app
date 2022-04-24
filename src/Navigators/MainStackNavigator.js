import React from "react";
import { ScreenName } from "../Constants/ScreenNameConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import MovieDetailScreen from "../Screens/MovieDetailScreen/MovieDetailScreen";
import MovieSeeMoreScreen from "../Screens/MovieSeeMoreScreen/MovieSeeMoreScreen";
import CommentSeeMoreScreen from "../Screens/CommentSeeMoreScreen/CommentSeeMoreScreen";


const MainStack = createNativeStackNavigator()
export default function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName={ScreenName.mainTabNavigator} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ScreenName.mainTabNavigator} component={MainTabNavigator}/>
      <MainStack.Screen name={ScreenName.movieDetailScreen} component={MovieDetailScreen}/>
      <MainStack.Screen name={ScreenName.movieSeeMoreScreen} component={MovieSeeMoreScreen}/>
      <MainStack.Screen name={ScreenName.commentSeeMoreScreen} component={CommentSeeMoreScreen}/>


      
    </MainStack.Navigator>
  );
}
