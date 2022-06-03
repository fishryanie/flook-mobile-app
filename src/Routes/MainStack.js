import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'
import screenName from "../Constants/ScreenName";
import MainTab from "./MainTab";

import HomeScreen from "../Screens/Home/HomeScreen"
import ForumScreen from "../Screens/ForumScreen/ForumScreen"
import NotifyScreen from "../Screens/Notification/NotifyScreen"
import ProfileScreen from  '../Screens/Profile/profileScreen'

import RankingScreen from "../Screens/Ranking";
import ChannelScreen from "../Screens/Channel/ChannelScreen";
import PointMeScreen from "../Screens/PointMe/PointMeScreen";
import DailyScreen from "../Screens/Daily/DailyScreen";

import ComicScreen from "../Screens/Comic"
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
import NovelScreen from "../Screens/Novel";
import ShortStoryScreen from "../Screens/ShortStory";
import StoryChatScreen from "../Screens/ChatStory";
import WriteStoryScreen from "../Screens/WriteStory/WriteStoryScreen";


const MainStack = createNativeStackNavigator()
export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={screenName.mainTabNavigator} screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={screenName.mainTabNavigator} component={MainTab}/>
        
        <MainStack.Screen name={screenName.homeScreen} component={HomeScreen}/>
        <MainStack.Screen name={screenName.forumScreen} component={ForumScreen}/>
        <MainStack.Screen name={screenName.notifyScreen} component={NotifyScreen}/>
        <MainStack.Screen name={screenName.profileScreen} component={ProfileScreen}/>

        <MainStack.Screen name={screenName.comicScreen} component={ComicScreen}/>
        <MainStack.Screen name={screenName.rankingScreen} component={RankingScreen}/>
        <MainStack.Screen name={screenName.channelScreen} component={ChannelScreen}/>
        <MainStack.Screen name={screenName.pointMeScreen} component={PointMeScreen}/>
        <MainStack.Screen name={screenName.dailyScreen} component={DailyScreen}/>

        <MainStack.Screen name={screenName.detailScreen} component={DetailScreen}/>
        <MainStack.Screen name={screenName.filterScreen} component={FilterScreen}/>

        <MainStack.Screen name={screenName.aboutScreen} component={AboutScreen}/>
        <MainStack.Screen name={screenName.chapterScreen} component={ChapterScreen}/>
        <MainStack.Screen name={screenName.commentScreen} component={CommentScreen}/>
        <MainStack.Screen name={screenName.dailyAttendanceScreen} component={DailyAttendanceScreen}/>
        <MainStack.Screen name={screenName.downloadScreen} component={DownloadScreen}/>
        <MainStack.Screen name={screenName.followScreen} component={FollowScreen}/>
        <MainStack.Screen name={screenName.forumTabScreen} component={ForumTabScreen}/>
        <MainStack.Screen name={screenName.gameScreen} component={GameScreen}/>
        <MainStack.Screen name={screenName.historyScreen} component={HistoryScreen}/>
        <MainStack.Screen name={screenName.novelScreen} component={NovelScreen}/>
        <MainStack.Screen name={screenName.shortStoryScreen} component={ShortStoryScreen}/>
        <MainStack.Screen name={screenName.storyChatScreen} component={StoryChatScreen}/>
        <MainStack.Screen name={screenName.writeStoryScreen} component={WriteStoryScreen}/>       
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
