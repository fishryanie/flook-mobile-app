import React from "react";
import { ScreenName } from "../Constants/ScreenNameConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import ComicScreen from "../Screens/Comic/ComicScreen"
import CategoryScreen from "../Screens/Category/CategoryScreen"
import ForumScreen from "../Screens/ForumScreen/ForumScreen"
import NotifyScreen from "../Screens/Notification/NotifyScreen"
import ProfileScreen from  '../Screens/Profile/profileScreen'

import RankingScreen from "../Screens/Ranking/RankingScreen";
import ChannelScreen from "../Screens/Channel/ChannelScreen";
import PointMeScreen from "../Screens/PointMe/PointMeScreen";
import DailyScreen from "../Screens/Daily/DailyScreen";

import DetailScreen from '../Screens/Detail/DetailScreen';
import FilterScreen from '../Screens/Filter/FilterScreen';


const MainStack = createNativeStackNavigator()
export default function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName={ScreenName.mainTabNavigator} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ScreenName.mainTabNavigator} component={MainTabNavigator}/>
      <MainStack.Screen name={ScreenName.comicScreen} component={ComicScreen}/>
      <MainStack.Screen name={ScreenName.categoryScreen} component={CategoryScreen}/>
      <MainStack.Screen name={ScreenName.forumScreen} component={ForumScreen}/>
      <MainStack.Screen name={ScreenName.notifyScreen} component={NotifyScreen}/>
      <MainStack.Screen name={ScreenName.profileScreen} component={ProfileScreen}/>

      <MainStack.Screen name={ScreenName.rankingScreen} component={RankingScreen}/>
      <MainStack.Screen name={ScreenName.channelScreen} component={ChannelScreen}/>
      <MainStack.Screen name={ScreenName.pointMeScreen} component={PointMeScreen}/>
      <MainStack.Screen name={ScreenName.dailyScreen} component={DailyScreen}/>

      <MainStack.Screen name={ScreenName.detailScreen} component={DetailScreen}/>
      <MainStack.Screen name={ScreenName.filterScreen} component={FilterScreen}/>

      <MainStack.Screen name={ScreenName.aboutScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.chapterScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.comicScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.dailyAttendanceScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.downloadScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.followScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.forumTabScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.gameScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.historyScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.novelScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.shortStoryScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.storyChatScreen} component={FilterScreen}/>
      <MainStack.Screen name={ScreenName.writeStoryScreen} component={FilterScreen}/>


      
    </MainStack.Navigator>
  );
}
