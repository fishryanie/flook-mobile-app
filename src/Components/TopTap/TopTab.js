import { Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTap = ({ listTopTab, isChildren }) => {
  const screen = Dimensions.get("screen");
  const tabBarItemStyleWidth = () => {
    let width = 'auto'

    if (!isChildren) {
      width = screen.width * 0.33
    }
    if (!isChildren && listTopTab.length <= 2) {
      width = screen.width * 0.5
    }

    return width
  }
  return (
    <Tab.Navigator
      initialRouteName="Manga"
      screenOptions={{
        tabBarScrollEnabled: isChildren,
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "red",
        tabBarIndicatorStyle: isChildren ? { width: 0 } : { backgroundColor: "red", },
        tabBarLabelStyle: { fontSize: 10, },
        tabBarStyle: {
          width: isChildren ? screen.width * 0.75 : screen.width,
          height: screen.height * 0.05, elevation: 0,
          shadowOpacity: 0,
          zIndex: 0,
        },
        tabBarItemStyle: {
          width: tabBarItemStyleWidth()
        },
        tabBarPressColor: isChildren ? "transparent" : null
      }}
    >
      {
        listTopTab.map((item, index) => {
          return <Tab.Screen key={index}
            name={item.title}
            children={() => <item.component id={item._id} />}
          />
        })
      }
    </Tab.Navigator>
  );
}
export default TopTap