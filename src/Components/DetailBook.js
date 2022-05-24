import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, Animated, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import AnimatedHeader from 'react-native-animated-header';
import { AntDesign, Ionicons, MaterialIcons } from 'react-native-vector-icons'
import TopTab from './TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]



const DetailBook = ({ book }) => {
  console.log("DetailBook")
  const screen = Dimensions.get("screen");

  return (
    <View style={{ flex: 1 }}>
      <AnimatedHeader
        style={{ flex: 1, backgroundColor: "red" }}
        // backText='Back'
        onBackPress={() => console.log("on back1")}
        title={book.title}
        renderLeft={() => (
          <TouchableOpacity style={{ marginLeft: 5 }}>
            <AntDesign name='left' size={25} />
          </TouchableOpacity>
        )}

        renderRight={() => (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ marginRight: 10, }} onPress={() => console.log("click")}>
              <MaterialIcons name='system-update-alt' size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 5 }}>
              <Ionicons name='ellipsis-horizontal-outline' size={25} />
            </TouchableOpacity>
          </View>

        )}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{ fontSize: 14, color: '#000' }}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
        headerMaxHeight={200}
        // imageSource={() => <Image source={{ uri: book.url }} style={{ height: MAX_HEIGHT, width: Dimensions.get('window').width }} />}
        imageSource={{ uri: `${book.url}` }}
        toolbarColor='#FFF'

        disabled={false}
      >


        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView style={{ height: screen.height, width: screen.width }}>
            <TopTab listTopTab={listTopTab2}
              ChildrenIcon1={null}
              ChildrenIcon2={null}
            />
          </SafeAreaView>
        </ScrollView>

      </AnimatedHeader>

    </View>
  );
}


export default DetailBook

const styles = StyleSheet.create({})