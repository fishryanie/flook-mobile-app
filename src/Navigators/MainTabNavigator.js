import React, { useRef, useEffect } from "react";
import Drawer from "./Drawer";
import TabStack from "./TabStack";
import HomeScreen from '../Screens/Home/Home'
import RatingScreen from '../Screens/Rating/Rating'
import ClassifyScreen from '../Screens/Classify/Classify'
import NotifiScreen from '../Screens/Notification/Notification'
import ForumScreen from '../Screens/Forum/Forum'
import { width, height } from "../Constants/DimensionsConstants";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenName } from "../Constants/ScreenNameConstants";
import Selector from '../Store/Selectors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const arrayScreenName = [
  { screenName: ScreenName.movieScreen, label: 'Home', component: HomeScreen },
  { screenName: ScreenName.newsScreen, label: 'Classify', component: ClassifyScreen },
  { screenName: ScreenName.cornScreen, label: 'Rating', component: RatingScreen },
  { screenName: ScreenName.notifiScreen, label: 'Notification', component: NotifiScreen },
  { screenName: ScreenName.profileScreen, label: 'Forum', component: ForumScreen },
]



export default function MainTabNavigator(props) {

  const showMenu = Selector.app.onOffDrawer()
  // console.log("showMenu", showMenu)
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
      transform: [{ scale: scaleValue }, { translateX: offsetValue }]
    },
    animationDrawer: {
      flex: 1, justifyContent: 'flex-end',
      borderRadius: !showMenu ? 15 : 0,
      transform: [{ translateY: closeButtonOffset }]
    }
  });

  useEffect(() => {
    Animated.timing(scaleValue, { toValue: showMenu ? 1 : 0.9, duration: 300, useNativeDriver: true }).start()
    Animated.timing(offsetValue, { toValue: showMenu ? 0 : 330, duration: 300, useNativeDriver: true }).start()
    Animated.timing(closeButtonOffset, { toValue: !showMenu ? -30 : 0, duration: 300, useNativeDriver: true }).start()
  }, [showMenu])

  return (
    <LinearGradient style={styles.container} colors={['#5560ff', '#aa52a1', '#ff4343']} start={{ x: 0, y: 1 }} end={{ x: 1.5, y: 0 }}>
      <Drawer navigation={props.navigation} />
      <Animated.View style={styles.homeView}>
        <Animated.View style={styles.animationDrawer}>
          <MainTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: height / 15, } }} >
            {arrayScreenName.map((item, index) => (
              <MainTab.Screen key={index}
                name={item.screenName}
                component={item.component}
                options={{ tabBarButton: props => <TabStack label={item.label} {...props} /> }}
              />
            ))}
          </MainTab.Navigator>
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
};