import React, { useRef, useEffect } from "react";
import Drawer from "./Drawer";
import TabStack from "./TabStack";
import MovieScreen from '../Screens/MovieScreen/MovieScreen'
import CornScreen from '../Screens/CornScreen/CornScreen'
import NewScreen from  '../Screens/NewsScreen/NewScreen'
import NotifiScreen from  '../Screens/NotificationScreen/NotificationScreen'
import ProfileScreen from  '../Screens/ProfileScreen/ProfileScreen'
import { width, height } from "../Constants/DimensionsConstants";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Animated} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenName } from "../Constants/ScreenNameConstants";
import { onOffDrawerSelector } from "../Redux/Selector/AppSelector";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const arrayScreenName = [ 
  {screenName: ScreenName.movieScreen, label:'Movie' ,component: MovieScreen},
  {screenName: ScreenName.newsScreen, label:'News',component: NewScreen},
  {screenName: ScreenName.cornScreen, label:'Corn & drink', component: CornScreen},
  {screenName: ScreenName.notifiScreen, label:'Notification', component: NotifiScreen},
  {screenName: ScreenName.profileScreen, label:'Profile', component: ProfileScreen},
]

const MainTab = createBottomTabNavigator()

export default function MainTabNavigator(props) {

  const showMenu = onOffDrawerSelector()
  const MainTab = createBottomTabNavigator();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' },
    homeView: { 
      top: 0, left: 0, right: 0, bottom: 0, 
      flexGrow: 1, 
      position: 'absolute', 
      backgroundColor: 'white',
      borderRadius: !showMenu ? 15 : 0, 
      transform: [{ scale: scaleValue },{ translateX: offsetValue }]
    },
    animationDrawer:{ 
      flex:1, justifyContent:'flex-end',
      borderRadius: !showMenu ? 15 : 0, 
      transform: [{translateY: closeButtonOffset }] 
    }
  });

  useEffect(() => {
    Animated.timing(scaleValue, { toValue: showMenu ? 1 : 0.9, duration: 300, useNativeDriver: true}).start()
    Animated.timing(offsetValue, { toValue: showMenu ? 0 : 330, duration: 300, useNativeDriver: true}).start()
    Animated.timing(closeButtonOffset, { toValue: !showMenu ? -30 : 0, duration: 300,useNativeDriver: true }).start()
  }, [showMenu])

  return (
    <LinearGradient style={styles.container} colors={['#5560ff', '#aa52a1','#ff4343']} start={{x: 0,y: 1 }} end={{x: 1.5, y: 0 }}>
      <Drawer navigation={props.navigation}/>
      <Animated.View style={styles.homeView}>
        <Animated.View style={styles.animationDrawer}>
          <MainTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {height: height / 12}}} >
            {arrayScreenName.map((item, index) => (
              <MainTab.Screen key={index}
                name={item.screenName}
                component={item.component}
                options={{ tabBarButton: props => <TabStack label={item.label} {...props}/> }}
              />
            ))}
          </MainTab.Navigator>
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
};