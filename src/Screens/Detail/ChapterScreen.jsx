import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { AntDesign, Ionicons, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'
import typography from '../../Constants/Typography'
import BottomSheet from '../../Components/BottomSheet'
import appConfigs from '../../Configs/app'
const dataChapter = () => {
  let array = []
  for (let i = 1; i <= 100; i++) {
    array.push({
      title: "Chương " + i,
      view: i,
      like: i,
      comment: i,
      createAt: "08/23/2022"
    })
  }
  return array
}
const createTotalPages = (totalPages = 879) => {
  const newTotalPages = Math.floor(totalPages / 50)

  let page = []

  let from = 50
  let to = 1
  for (let i = 1; i <= newTotalPages; i++) {

    page.push({
      to,
      from
    })

    if (i === 1) {
      to += 49
      from += 50
    } else if (i === (newTotalPages - 1)) {
      to += 50
      from = totalPages
    } else {
      to += 50
      from += 50
    }

  }
  return page
}


const listChoosePages = () => {
  const list = createTotalPages()
  return list.map((item) => {
    return (<View style={styles.itemPage}>
      <TouchableOpacity style={styles.choosePageTouchable}>
        <Text style={{ fontSize: typography.fontSizes.md }}>{`${item.to} - ${item.from}`}</Text>
      </TouchableOpacity>

    </View>)
  })
}

const ChapterScreen = () => {


  const renderItem = (value) => {
    const {
      item: { title, createAt, like, comment, view }
    } = value
    return (
      <View style={styles.viewItem} >
        <Text style={styles.chapterName}>{title}</Text>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{createAt}</Text>
          <View style={styles.item}>
            <MaterialCommunityIcons name='eye-outline' size={18} />
            <Text style={[styles.itemText, { marginLeft: 5 }]}>{view}</Text>
          </View>
          <View style={styles.item}>
            <SimpleLineIcons name='like' size={15} />
            <Text style={[styles.itemText, { marginLeft: 5 }]}>{like}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name='ios-chatbox-outline' size={15} />
            <Text style={[styles.itemText, { marginLeft: 5 }]}>{comment}</Text>
          </View>
        </View>

      </View>
    )

  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ zIndex: 0 }}
        data={dataChapter()}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        numColumns={1}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}


export default ChapterScreen

const styles = StyleSheet.create({
  container: {

    height: '100%',
    paddingHorizontal: 10,
  },

  viewItem: {
    zIndex: 0,
    paddingVertical: 10,
    height: 70,
    marginRight: 20
    // backgroundColor: 'red'
  },
  chapterName: {
    flex: 1,
    flexDirection: 'row'
  },
  itemContainer: {
    flexDirection: 'row'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  itemText: {
    fontSize: typography.fontSizes.xxs
  },


})