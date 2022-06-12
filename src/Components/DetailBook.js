import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import React, { useState, useRef } from 'react';
import { PageScrollView } from 'pagescrollview'
import AnimatedHeader from 'react-native-animated-header';
import { AntDesign, Ionicons, MaterialIcons } from 'react-native-vector-icons'
import TopTab from './TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';

const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]

import ReviewCard from '../Components/Review/ReviewCard'
import ReviewDetail from '../Components/Review/ReviewDetail'
import ReviewCardChild from '../Components/Review/ReviewCardChild'

const DetailBook = ({ book }) => {

  const childDetail = useRef()
  const handleOpen = () => {
    childDetail.current.handleOpen()
  }
  console.log("DetailBook")
  const screen = Dimensions.get("screen");

  return (
    <View style={{ flex: 1 }}>
      <AnimatedHeader
        style={{ flex: 1 }}
        backText='Back'
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
        imageSource={{ uri: `${book.url}` }}
        toolbarColor='#FFF'
        disabled={false}
      >

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, Width: screen.width, minHeight: 2000, marginTop: 50 }}>

            <TopTab listTopTab={listTopTab2} />
          </View>


        </ScrollView>

      </AnimatedHeader>

    </View>
  );
}


export default DetailBook

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1, backgroundColor: 'red'
  },
  itemView: {
    width: '100%',
    margin: 5,
    padding: 40,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});