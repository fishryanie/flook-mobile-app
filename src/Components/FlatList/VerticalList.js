import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import Manga from "../../../Data_Mobile/Manga.json"

export default function List({
  data = Manga, viewItem = styles.viewItem
}) {
  const renderItem = (value) => {
    const {
      item: { title, image, rating, genre, view, _id }
    } = value
    return (
      <View style={viewItem}>
        <Image source={{ uri: image }} style={{ width: "35%", height: "100%", resizeMode: "cover", borderRadius: 10 }} ></Image>
        <View style={styles.viewText}>
          <Text>{title}</Text>
          {rating ? <Text>{rating}</Text> : <></>}
          {genre ? <Text>{genre}</Text> : <></>}
          {view ? <Text>{view}</Text> : <></>}
        </View>

      </View>
    )

  }
  return (
    <View style={styles.viewFlatlist} >
      <FlatList
        style={styles.flatStyle}
        data={data}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={1}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  flatStyle: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",

  },
  viewFlatlist: {
    paddingHorizontal: "2%",
    flex: 0.98
  },
  viewItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 150,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue",
    position: "relative"
  },
  viewText: {
    width: "100%",
    height: "100%",
    paddingHorizontal: "3%",
    paddingVertical: "0.1%",
    // backgroundColor: "red"
  }
}
)