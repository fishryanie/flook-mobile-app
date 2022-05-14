
import ChatStory from '../Screens/ChatStory/ChatStory';
import Manga from '../Screens/Manga/Manga';
import Novel from '../Screens/Novel/Novel';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Manga"
      screenOptions={{
        tabBarInactiveTintColor: "#f5211d",
        tabBarActiveTintColor: '#e91e63',
        tabBarIndicatorStyle: { backgroundColor: "red" },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Manga"
        component={Manga}
        options={{ tabBarLabel: 'Manga' }}
      />
      <Tab.Screen
        name="Novel"
        component={Novel}
        options={{ tabBarLabel: 'Novel' }}
      />
      <Tab.Screen
        name="ChatStory"
        component={ChatStory}
        options={{ tabBarLabel: 'Chat Story' }}
      />
    </Tab.Navigator>
  );
}
export default TopBarNavigator