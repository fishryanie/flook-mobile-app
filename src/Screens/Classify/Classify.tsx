import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import ListAccordion from '../Filter/ListAccordion'
export default function ClassifyScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListAccordion />
    </SafeAreaView>

  )
}

