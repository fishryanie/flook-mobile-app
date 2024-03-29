import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopTap from './TopTab'
import React, { useState, useEffect } from 'react'
const index = ({ listTopTab, ChildrenIcon1, ChildrenIcon2 }) => {

  const [isChildren, setIsChildren] = useState()
  useEffect(() => {
    checkIsChildren()
  }, [ChildrenIcon1, ChildrenIcon1])
  const checkIsChildren = () => {
    ChildrenIcon1 && ChildrenIcon1 ? setIsChildren(true) : setIsChildren(false)
  }
  console.log("isChildren", isChildren)
  return (
    <View style={[styles.viewContainer,]}>
      <TopTap listTopTab={listTopTab} isChildren={isChildren} />
      {ChildrenIcon1 && ChildrenIcon2 ?
        <View style={styles.viewTouchable}>
          <TouchableOpacity onPress={() => { console.log("click") }}>
            {ChildrenIcon1}
          </TouchableOpacity>
          <TouchableOpacity>
            {ChildrenIcon2}
          </TouchableOpacity>
        </View> : <></>
      }

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

