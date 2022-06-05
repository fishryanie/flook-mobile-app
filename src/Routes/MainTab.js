// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'
import screenName from "../Constants/ScreenName";
import TopTab from '../Components/TopTab'
import NotifyScreen from '../Screens/Notification/NotifyScreen'
import ForumScreen from '../Screens/ForumScreen/ForumScreen'
import ProfileScreen from '../Screens/Profile/profileScreen'
import ComicScreen from "../Screens/Comic";
import NovelScreen from "../Screens/Novel";
import ShortStoryScreen from "../Screens/ShortStory";
import ChatStoryScreen from "../Screens/ChatStory";
import RankingScreen from "../Screens/Ranking";
import WriteStoryScreen from "../Screens/WriteStory/WriteStoryScreen";
import FollowScreen from "../Screens/Follow/FollowScreen";
import PointMeScreen from "../Screens/PointMe/PointMeScreen";


const arrayHomeTab = [
  { _id: "1", title:'screenName.pointMeScreen', component:PointMeScreen }, 
  { _id: "2", title:'screenName.newsFeedScreen', component:ShortStoryScreen },
  { _id: "3", title:'screenName.forumScreen', component:ForumScreen },
  { _id: "4", title:'screenName.writeStoryScreen', component:WriteStoryScreen },
  { _id: "5", title:'screenName.followScreen', component:FollowScreen },
]

const arrayCategoryTab = [
  { _id: "1", title:screenName.comicScreen, component:ComicScreen }, 
  { _id: "2", title:screenName.novelScreen, component:NovelScreen },
  { _id: "3", title:screenName.shortStoryScreen, component:ShortStoryScreen },
  { _id: "4", title:screenName.chatStoryScreen, component:ChatStoryScreen },
  { _id: "5", title:screenName.movieScreen, component:ChatStoryScreen },
]


export default function MainTab(props, accessibilityState) {
  const BottomTab = createBottomTabNavigator();
  const navigation = useNavigation();
  const SafeAreaInsets = useSafeAreaInsets()

  const focused = accessibilityState.selected;

  const tabBarOptions = {
    activeTintColor: 'tomato', 
    inactiveTintColor: 'gray'
  }

  const screenOptions = ({ route }) => ({
    headerShown: true,
    tabBarIcon: ({ focused, color, size }) => {
    let iconName
    switch (route.name) {
      case screenName.newsFeedScreen:
        iconName = focused ? 'home' : 'home-outline'; break;
      case screenName.categoryScreen:
        iconName = focused ? 'cube' : 'cube-outline'; break;
      case screenName.rankingScreen:
        iconName = focused ? 'pinwheel' : 'pinwheel-outline'; break;
      case screenName.notifyScreen:
        iconName = focused ? 'bell-circle' : 'bell-circle-outline'; break;
      case screenName.profileScreen:
        iconName = focused ? 'emoticon' : 'emoticon-outline'; break;
      default: break;
    }
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
    },
  })

  const handlePress = () => {
    navigation.navigate(screenName.channelScreen)
  }

  return (
    <BottomTab.Navigator initialRouteName={screenName.categoryScreen} screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={screenName.newsFeedScreen} children={() => (
        <View style={{flex: 1}}>
          <TopTab arrayCategory={arrayHomeTab}
            Icon1={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
            Icon2={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
          />
        </View>
      )}/>
      <BottomTab.Screen name={screenName.categoryScreen} options={{ headerShown: false}} children={() => (
        <View style={{flex: 1, marginTop: SafeAreaInsets.top}}>
          <TopTab arrayCategory={arrayCategoryTab} onPressicon2={handlePress}
            Icon1={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
            Icon2={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
          />
        </View>
      )}/>
      <BottomTab.Screen name={screenName.rankingScreen} component={RankingScreen}/>
      <BottomTab.Screen name={screenName.notifyScreen} component={NotifyScreen}/>
      <BottomTab.Screen name={screenName.profileScreen} component={ProfileScreen}/>
   </BottomTab.Navigator>
  );
};