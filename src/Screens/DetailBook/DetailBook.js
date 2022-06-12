import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react';
import AnimatedHeader from 'react-native-animated-header';
import { AntDesign, Ionicons, MaterialIcons } from 'react-native-vector-icons'

import screenName from '../../Constants/ScreenName';
import Detail from './DetailScreen';
import Chapter from './ChapterScreen';
import TopTap from '../../Components/TopTab';
import appConfigs from '../../Configs/app'
import { useSelector } from 'react-redux';
const listTopTab2 = [{ _id: "1", screenName: screenName.detailScreen, title: "Chi Tiết", component: Detail }, { _id: "2", screenName: screenName.chapterScreen, title: "Chapter", component: Chapter },]

const DetailBook = ({ book }) => {

  const childDetail = useRef()
  const handleOpen = () => {
    childDetail.current.handleOpen()
  }
  console.log("DetailBook")
  const height = useSelector((state) => state.AppReducer.heightDetailScreen)
  console.log("🚀 ~ file: DetailBook.js ~ line 22 ~ DetailBook ~ height", height)

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

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

          <View style={{ height: height ? height + 50 : 1000 + 50 }}>
            <TopTap arrayCategory={listTopTab2} />
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