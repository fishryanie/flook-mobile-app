import React from "react";
import { ScreenName } from "../Constants/ScreenNameConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "./MainTab";

import HomeScreen from "../Screens/Home/HomeScreen"
import CategoryScreen from "../Screens/Category/CategoryScreen"
import ForumScreen from "../Screens/ForumScreen/ForumScreen"
import NotifyScreen from "../Screens/Notification/NotifyScreen"
import ProfileScreen from  '../Screens/Profile/profileScreen'

import RankingScreen from "../Screens/Ranking/RankingScreen";
import ChannelScreen from "../Screens/Channel/ChannelScreen";
import PointMeScreen from "../Screens/PointMe/PointMeScreen";
import DailyScreen from "../Screens/Daily/DailyScreen";

import ComicScreen from "../Screens/Comic/ComicScreen"
import DetailScreen from '../Screens/Detail/DetailScreen';
import FilterScreen from '../Screens/Filter/FilterScreen';

import AboutScreen from "../Screens/About/AboutScreen";
import ChapterScreen from "../Screens/Chapter/ChapterScreen";
import CommentScreen from "../Screens/Comment/CommentScreen";
import DailyAttendanceScreen from "../Screens/DailyAttendance/DailyAttendanceScreen";
import DownloadScreen from "../Screens/Download/DownloadScreen";
import FollowScreen from "../Screens/Follow/FollowScreen";
import ForumTabScreen from "../Screens/ForumTab/ForumTabScreen";
import GameScreen from "../Screens/Game/GameScreen";
import HistoryScreen from "../Screens/History/HistoryScreen";
import NovelScreen from "../Screens/Novel/NovelScreen";
import ShortStoryScreen from "../Screens/ShortStory/ShortStoryScreen";
import StoryChatScreen from "../Screens/StoryChat/StoryChatScreen";
import WriteStoryScreen from "../Screens/WriteStory/WriteStoryScreen";


const MainStack = createNativeStackNavigator()
export default function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName={ScreenName.mainTabNavigator} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ScreenName.mainTabNavigator} component={MainTab}/>
      
      <MainStack.Screen name={ScreenName.homeScreen} component={HomeScreen}/>
      <MainStack.Screen name={ScreenName.categoryScreen} component={CategoryScreen}/>
      <MainStack.Screen name={ScreenName.forumScreen} component={ForumScreen}/>
      <MainStack.Screen name={ScreenName.notifyScreen} component={NotifyScreen}/>
      <MainStack.Screen name={ScreenName.profileScreen} component={ProfileScreen}/>

      <MainStack.Screen name={ScreenName.comicScreen} component={ComicScreen}/>
      <MainStack.Screen name={ScreenName.rankingScreen} component={RankingScreen}/>
      <MainStack.Screen name={ScreenName.channelScreen} component={ChannelScreen}/>
      <MainStack.Screen name={ScreenName.pointMeScreen} component={PointMeScreen}/>
      <MainStack.Screen name={ScreenName.dailyScreen} component={DailyScreen}/>

      <MainStack.Screen name={ScreenName.detailScreen} component={DetailScreen}/>
      <MainStack.Screen name={ScreenName.filterScreen} component={FilterScreen}/>

      <MainStack.Screen name={ScreenName.aboutScreen} component={AboutScreen}/>
      <MainStack.Screen name={ScreenName.chapterScreen} component={ChapterScreen}/>
      <MainStack.Screen name={ScreenName.commentScreen} component={CommentScreen}/>
      <MainStack.Screen name={ScreenName.dailyAttendanceScreen} component={DailyAttendanceScreen}/>
      <MainStack.Screen name={ScreenName.downloadScreen} component={DownloadScreen}/>
      <MainStack.Screen name={ScreenName.followScreen} component={FollowScreen}/>
      <MainStack.Screen name={ScreenName.forumTabScreen} component={ForumTabScreen}/>
      <MainStack.Screen name={ScreenName.gameScreen} component={GameScreen}/>
      <MainStack.Screen name={ScreenName.historyScreen} component={HistoryScreen}/>
      <MainStack.Screen name={ScreenName.novelScreen} component={NovelScreen}/>
      <MainStack.Screen name={ScreenName.shortStoryScreen} component={ShortStoryScreen}/>
      <MainStack.Screen name={ScreenName.storyChatScreen} component={StoryChatScreen}/>
      <MainStack.Screen name={ScreenName.writeStoryScreen} component={WriteStoryScreen}/>


      
    </MainStack.Navigator>
  );
}
