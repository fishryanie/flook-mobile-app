import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../Components/TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]
const Test2 = () => {
  return (

    <ScrollView style={{ flex: 1, flexGrow: 1, backgroundColor: "red", zIndex: 1 }}>
      <TopTab listTopTab={listTopTab2}
        ChildrenIcon1={null}
        ChildrenIcon2={null}
      />
    </ScrollView>

  )
}

export default Test2

const styles = StyleSheet.create({})