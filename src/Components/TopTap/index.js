import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import TopTap from './TopTab'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
const index = ({ listTopTab, ChildrenIcon1, ChildrenIcon2 }) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.viewContainer, { marginTop: insets.top }]}>
      <TopTap listTopTab={listTopTab} />

      <View style={styles.viewTouchable}>
        <TouchableOpacity onPress={() => { console.log("click") }}>
          {ChildrenIcon1}
        </TouchableOpacity>
        <TouchableOpacity>
          {ChildrenIcon2}
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    position: 'relative',
  },
  viewTouchable: {
    paddingHorizontal: 5,
    width: "20%",
    position: "absolute",
    zIndex: 1,
    right: "3%",
    top: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green"
  }


})

export default index

