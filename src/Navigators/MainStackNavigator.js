import React from "react";
import { ScreenName } from "../Constants/ScreenNameConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import MovieDetailScreen from "../Screens/MovieDetail/MovieDetail";

import CommentSeeMoreScreen from "../Screens/CommentSeeMore/CommentSeeMore";
import ListAccordion from "../Screens/Filter/ListAccordion";


const MainStack = createNativeStackNavigator()
export default function MainStackNavigator() {
  // console.log("MainStackNavigator")
  return (
    <MainStack.Navigator initialRouteName={ScreenName.mainTabNavigator} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ScreenName.mainTabNavigator} component={MainTabNavigator} />
      <MainStack.Screen name={ScreenName.movieDetailScreen} component={MovieDetailScreen} />

      <MainStack.Screen name={ScreenName.commentSeeMoreScreen} component={CommentSeeMoreScreen} />
      <MainStack.Screen name={ScreenName.filterScreen} component={ListAccordion} />



    </MainStack.Navigator>
  );
}
