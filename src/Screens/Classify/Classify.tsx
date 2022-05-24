import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import HeaderComponent from '../../Components/HeaderComponent'
import TopTapNavigator from '../../Components/TopTap'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ChatStory from '../../Screens/ChatStory/ChatStory';
import Manga from '../../Screens/Manga/Manga';
import Novel from '../../Screens/Novel/Novel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// many item
const listTopTab = [{ _id: "ahdkfahkfd", title: "Tiểu Thuyết Mới Ra Mắt", component: Novel }, { _id: "ahdkfahkfd", title: "Tiểu Thuyết", component: Novel }, { _id: "piuyfahkfd", title: "Manga", component: Manga },{ _id: "piuyfahkfd", title: "Truyen chat1", component: Manga }]

// 3 item
const listTopTab1 = [{ _id: "ahdkfahkfd", title: "Tiểu Thuyet", component: Novel }, { _id: "ahdkfahkfd", title: "Manga", component: Novel},  { _id: "piuyfahkfd", title: "Truyen chat", component: Manga  },]

// 2 item
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Tiểu Thuyet", component: Novel }, { _id: "ahdkfahkfd", title: "Manga", component: Novel},]

export default function ClassifyScreen() {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white" , marginTop:insets.top}}>
      {/* <ListAccordion /> */}
      {/* <HeaderComponent />
      <TopBarNavigator /> */}
     <TopTapNavigator
     listTopTab={listTopTab2}
    //  Có icon
    //  ChildrenIcon1={<Ionicons name='pencil' size={22} style={{}}/>}
    // ChildrenIcon2={<AntDesign name='menu-fold' size={22} style={{}}/>}

    // không có icon
     ChildrenIcon1={null}
     ChildrenIcon2={null}
     />

    </SafeAreaView>

  )
}

