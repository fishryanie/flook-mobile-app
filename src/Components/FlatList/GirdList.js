import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import DATA_MANGA from '../../../Data_Mobile/Manga.json'

export default function GirdList({ data = DATA_MANGA, numColumns = 2, heightItem, heightImage }) {
  // console.log(Manga)
  const renderItem = (value) => {
    const {
      item: { title, image, rating, genre, view }
    } = value
    // console.log(value)

    const viewWidth = numColumns === 2 ? { width: "50%", } : { width: "33.3%" }

    return (
      <View style={[styles.viewItem(heightItem), viewWidth]} >
        <Image source={{ uri: image }} style={styles.Img(heightImage)} ></Image>
        <Text style={{ width: "100%", height: "10%" }}>{title.length < 50 ? title : `${title.slice(0, 50)}...`}</Text>
        {/* {rating ? <Text style={{ height: "10%" }}>{rating}</Text> : <></>} */}
        {genre ? <Text style={{ height: "10%" }}>{genre}</Text> : <></>}
        {/* {view ? <Text style={{  height: "10%" }}>{view}</Text> : <></>} */}
      </View>
    )

  }
  return (
    <View style={styles.viewFlatlist}>
      <FlatList
        style={styles.flatStyle}
        data={data}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}

      // horizontal={true}
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
  viewItem: hieght => ({
    height: hieght,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  }),
  Img: height => (
    { width: "100%", height: height, resizeMode: "cover", borderRadius: 10 }
  )



})