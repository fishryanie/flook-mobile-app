// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native'
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
  { _id: "1", screenName:screenName.pointMeScreen, title:'Điểm của tôi', component:PointMeScreen, }, 
  { _id: "2", screenName:screenName.newsFeedScreen, title:'Bảng tin', component:ShortStoryScreen },
  { _id: "3", screenName:screenName.forumScreen, title:'Cộng đồng', component:ForumScreen },
  { _id: "4", screenName:screenName.writeStoryScreen, title:'Viết truyện', component:WriteStoryScreen },
  { _id: "5", screenName:screenName.followScreen, title:'Đang theo dõi', component:FollowScreen },
]

const arrayCategoryTab = [
  { _id: "1", screenName:screenName.comicScreen, title:'Truyện tranh', component:ComicScreen }, 
  { _id: "2", screenName:screenName.novelScreen, title:'Tiểu thuyết', component:NovelScreen },
  { _id: "3", screenName:screenName.shortStoryScreen, title:'Truyện ngắn', component:ShortStoryScreen },
  { _id: "4", screenName:screenName.chatStoryScreen, title:'Truyện chat', component:ChatStoryScreen },
  { _id: "5", screenName:screenName.movieScreen, title:'Phim', component:ChatStoryScreen },
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
      <BottomTab.Screen name={screenName.newsFeedScreen} options={{title : 'Trang chủ'}} children={() => (
        <View style={{flex: 1}}>
          <TopTab arrayCategory={arrayHomeTab}
            Icon1={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
            Icon2={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
          />
        </View>
      )}/>
      <BottomTab.Screen name={screenName.categoryScreen} options={{title: 'Danh mục', headerShown: false}} children={() => (
        <View style={{flex: 1, marginTop: SafeAreaInsets.top}}>
          <TopTab arrayCategory={arrayCategoryTab} onPressicon2={handlePress}
            Icon1={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
            Icon2={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
          />
        </View>
      )}/>
      <BottomTab.Screen name={screenName.rankingScreen} options={{title:'Xếp hạng'}} component={RankingScreen}/>
      <BottomTab.Screen name={screenName.notifyScreen} options={{title:'Thông báo'}} component={NotifyScreen}/>
      <BottomTab.Screen name={screenName.profileScreen} options={{title:'Cá nhân'}} component={ProfileScreen}/>
   </BottomTab.Navigator>
  );
};