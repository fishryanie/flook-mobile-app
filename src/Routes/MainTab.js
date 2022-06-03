// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import NotifyScreen from '../Screens/Notification/NotifyScreen'
import CategoryScreen from '../Screens/Category'
import ForumScreen from '../Screens/ForumScreen/ForumScreen'
import ProfileScreen from '../Screens/Profile/profileScreen'
import HomeScreen from '../Screens/Home/HomeScreen'

const BottomTab = createBottomTabNavigator();

export default function MainTab(props, accessibilityState) {

  const focused = accessibilityState.selected;

  const home = 'Trang Chủ'
  const category = 'Phân Loại'
  const forum = 'Forum'
  const notification = 'Thông Báo'
  const profile = 'Tôi'

  return (
    <BottomTab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName, screenName = route.name;

        if (screenName === home){
          iconName = focused ? 'home' : 'home-outline';
        }else if (screenName === category){
          iconName = focused ? 'cube' : 'cube-outline';
        }else if (screenName === forum){
          iconName = focused ? 'pinwheel' : 'pinwheel-outline';
        }else if (screenName === notification){
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
    }}
    >
      
      <BottomTab.Screen name={home} component={HomeScreen}/>
      <BottomTab.Screen name={category} component={CategoryScreen}/>
      <BottomTab.Screen name={forum} component={ForumScreen}/>
      <BottomTab.Screen name={notification} component={NotifyScreen}/>
      <BottomTab.Screen name={profile} component={ProfileScreen}/>
        
   </BottomTab.Navigator>
  );
};