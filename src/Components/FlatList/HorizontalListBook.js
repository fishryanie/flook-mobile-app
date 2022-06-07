import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import Manga from "../../../Data_Mobile/Manga.json"

export default function List({
  data = Manga, widthItem, heightItem, widthImg, heightImg, widthViewText, heightViewText, heightFlatlist
}) {
  const renderItem = (value) => {
    const {
      item: { title, image, rating, genre, view, _id }
    } = value
    // console.log(value)
    return (
      <View style={styles.viewItem(widthItem, heightItem)}>
        <Image source={{ uri: image }} style={styles.image(widthImg, heightImg)} ></Image>
        <View style={styles.viewText(widthViewText, heightViewText)}>
          {heightFlatlist < 170 ?
            <Text style={{ fontSize: 12 }}>{title?.length <= 9 ? title : `${title.slice(0, 9)}...`}</Text> :
            <Text style={{ fontSize: 12 }}>{title?.length <= 25 ? title : `${title.slice(0, 25)}...`}</Text>
          }
          {/* {rating ? <Text>{rating}</Text> : <></>}
          {genre ? <Text>{genre}</Text> : <></>}
          {view ? <Text>{view}</Text> : <></>} */}
        </View>
      </View>
    )
  }
  return (
    <View style={[styles.viewFlatlist, { height: heightFlatlist }]} >
      <FlatList
        style={styles.flatStyle}
        data={data}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  flatStyle: {
    flex: 1,
  },
  viewFlatlist: {
    paddingLeft: 10,
    flex: 1,
    // backgroundColor: "red"
  },
  viewItem: (width, height) => ({
    width: width,
    height: height,
    marginRight: 10,
    

  }),
  image: (width, height) => ({
    width: width,
    height: height,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 5
  }),
  viewText: (width, height) => ({
    width: width,
    height: height,
    paddingHorizontal: "1%",
    paddingVertical: "0.1%",
    // backgroundColor: "black"
  })
}
)