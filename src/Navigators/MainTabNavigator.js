import React, { useRef, useEffect } from "react";
// import Drawer from "./Drawer";
// import TabStack from "./TabStack";
import HomeScreen from "../Screens/Home/HomeScreen"
import CategoryScreen from '../Screens/Category/CategoryScreen'
import NotifyScreen from  '../Screens/Notification/NotifyScreen'
import ForumScreen from  '../Screens/ForumScreen/ForumScreen'
import ProfileScreen from  '../Screens/Profile/profileScreen'
// import { width, height } from "../Constants/DimensionsConstants";
// import { LinearGradient } from 'expo-linear-gradient';
// import { StyleSheet, Animated} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ScreenName } from "../Constants/ScreenNameConstants";
// import { onOffDrawerSelector } from "../Redux/Selector/AppSelector";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { MaterialCommunityIcons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

// const arrayScreenName = [ 
//   {screenName: ScreenName.comicScreen, label:'Truyện Tranh' ,component: ComicScreen},
//   {screenName: ScreenName.novelScreen, label:'Tiểu Thuyết',component: NovelScreen},
//   {screenName: ScreenName.libraryScreen, label:'Tủ Sách', component: LibraryScreen},
//   {screenName: ScreenName.forumScreen, label:'Forum', component: ForumScreen},
//   {screenName: ScreenName.profileScreen, label:'Tôi', component: ProfileScreen},
// ]

export default function MainTabNavigator(props, accessibilityState) {

  const focused = accessibilityState.selected;

  const home = 'Trang Chủ'
  const category = 'Phân Loại'
  const forum = 'Forum'
  const notification = 'Thông Báo'
  const profile = 'Tôi'

  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === home){
          iconName = focused ? 'home' : 'home-outline';
        }else if (rn === category){
          iconName = focused ? 'cube' : 'cube-outline';
        }else if (rn === forum){
          iconName = focused ? 'pinwheel' : 'pinwheel-outline';
        }else if (rn === notification){
          iconName = focused ? 'bell-circle' : 'bell-circle-outline';
        }else{
          iconName = focused ? 'emoticon' : 'emoticon-outline';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        },
        headerShown: true,
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: { paddingBottom: 10, fontSize: 10},
      style: {padding: 10, height: 70}
    }}
    >
      
      <Tab.Screen name={home} component={HomeScreen}/>
      <Tab.Screen name={category} component={CategoryScreen}/>
      <Tab.Screen name={forum} component={ForumScreen}/>
      <Tab.Screen name={notification} component={NotifyScreen}/>
      <Tab.Screen name={profile} component={ProfileScreen}/>
        
   </Tab.Navigator>
  );
};