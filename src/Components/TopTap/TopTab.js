import { Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const TopTap = ({ listTopTab, isChildren }) => {
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  console.log("window", window)
  console.log("screen", screen)
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
        listTopTab.map((item) => {
          return <Tab.Screen
            name={item.title}
            children={() => <item.component id={item._id} />}
          />
        })
      }

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
    </Tab.Navigator >


  );
}
export default TopTap