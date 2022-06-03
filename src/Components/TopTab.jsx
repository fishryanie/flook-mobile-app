import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import appConfigs from '../Configs/app';


const TopTapComponent = ({ listTopTab, Icon1, Icon2 }) => {
  const [isChildren, setIsChildren] = useState()

  const Tab = createMaterialTopTabNavigator();

  const tabBarItemStyleWidth = () => {
    let width = 'auto'
    if (!isChildren) {
      width = appConfigs.DEFAULT_WIDTH * 0.33
    }
    if (!isChildren && listTopTab.length <= 2) {
      width = appConfigs.DEFAULT_WIDTH * 0.5
    }
    return width
  }

  const checkIsChildren = () => {
    Icon1 && Icon2 ? setIsChildren(true) : setIsChildren(false)
  }

  const screenOptions = {
    tabBarScrollEnabled: isChildren,
    tabBarInactiveTintColor: "black",
    tabBarActiveTintColor: "red",
    tabBarIndicatorStyle: isChildren ? { width: 0 } : { backgroundColor: "red", },
    tabBarLabelStyle: { fontSize: 10, },
    tabBarStyle: {
      width: isChildren ? appConfigs.DEFAULT_WIDTH * 0.75 : appConfigs.DEFAULT_WIDTH,
      height: appConfigs.DEFAULT_HEIGHT * 0.05, elevation: 0,
      shadowOpacity: 0,
      zIndex: 0,
    },
    tabBarItemStyle: {
      width: tabBarItemStyleWidth()
    },
    tabBarPressColor: isChildren ? "transparent" : null
  }

  useEffect(() => {
    checkIsChildren()
  }, [Icon1, Icon2])

  return (
    <View style={[styles.viewContainer,]}>
      <Tab.Navigator initialRouteName={listTopTab[0].title} screenOptions={screenOptions}>
        {listTopTab?.map((item, index) => (
          <Tab.Screen key={index} name={item.title} children={() => <item.component id={item._id} />}/>
        ))}
      </Tab.Navigator>
      {(Icon1 && Icon2) && (
        <View style={styles.viewTouchable}>
          <TouchableOpacity onPress={() => { console.log("click") }}>{Icon1}</TouchableOpacity>
          <TouchableOpacity>{Icon2}</TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  viewTouchable: {
    paddingHorizontal: 10,
    width: "18%",
    position: "absolute",
    zIndex: 1,
    right: "2%",
    top: "1.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green"
  }
})

export default TopTapComponent
