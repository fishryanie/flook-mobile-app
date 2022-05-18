
import ChatStory from '../../Screens/ChatStory/ChatStory';
import Manga from '../../Screens/Manga/Manga';
import Novel from '../../Screens/Novel/Novel';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'native-base';

const Tab = createMaterialTopTabNavigator();

const TopTap = ({ listTopTab }) => {

  return (


    <Tab.Navigator
      initialRouteName="Manga"
      screenOptions={{

        tabBarScrollEnabled: true,
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "red",
        tabBarIndicatorStyle: { width: 0, },
        tabBarLabelStyle: { fontSize: 10, },
        tabBarStyle: {
          width: "75%", height: "5%", elevation: 0,
          shadowOpacity: 0, justifyContent: "center", zIndex: 0
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarPressColor: "transparent"
      }}
    >
      {listTopTab.map((item) => {
        return <Tab.Screen
          name={item.title}
          children={() => <item.component id={item._id} />}
        />
      })}

      {/* <Tab.Screen
        name="Novel"
        component={Novel}
        options={{ tabBarLabel: 'Novel' }}
      />
      <Tab.Screen
        name="ChatStory"
        component={ChatStory}
        options={{ tabBarLabel: 'Chat Story' }}
      /> */}
    </Tab.Navigator>


  );
}
export default TopTap