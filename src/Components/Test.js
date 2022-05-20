import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../Components/TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]
const Test = () => {
  return (
    <View>
      <TopTab listTopTab={listTopTab2}
        ChildrenIcon1={null}
        ChildrenIcon2={null}
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})