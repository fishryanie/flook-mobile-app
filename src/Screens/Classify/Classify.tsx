import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import ListAccordion from '../Filter/ListAccordion'
import TopBarNavigator from '../../Navigators/TopBarNavigator'
import HeaderComponent from '../../Components/HeaderComponent'
import TopTapNavigator from '../../Components/TopTap'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ChatStory from '../../Screens/ChatStory/ChatStory';
import Manga from '../../Screens/Manga/Manga';
import Novel from '../../Screens/Novel/Novel';
const listTopTab = [{ _id: "ahdkfahkfd", title: "Tiểu Thuyết Mới Ra Mắt", component: Novel }, { _id: "ahdkfahkfd", title: "Tiểu Thuyết", component: Novel }, { _id: "piuyfahkfd", title: "Manga", component: Manga }, { _id: "hkjyfahkfd", title: "Truyện Chat", component: ChatStory },]

export default function ClassifyScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white"}}>
      {/* <ListAccordion /> */}
      {/* <HeaderComponent />
      <TopBarNavigator /> */}
     <TopTapNavigator
     listTopTab={listTopTab}
     ChildrenIcon1={<Ionicons name='pencil' size={22} style={{}}/>}
     ChildrenIcon2={<AntDesign name='menu-fold' size={22} style={{}}/>}
     />

    </SafeAreaView>

  )
}

