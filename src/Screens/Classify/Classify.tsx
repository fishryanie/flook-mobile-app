import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import ListAccordion from '../Filter/ListAccordion'
import TopBarNavigator from '../../Navigators/TopBarNavigator'
import HeaderComponent from '../../Components/HeaderComponent'
export default function ClassifyScreen() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      {/* <ListAccordion /> */}
      <HeaderComponent />
      <TopBarNavigator />
    </SafeAreaView>

  )
}

