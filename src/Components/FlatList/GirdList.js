import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import DATA_MANGA from '../../../Data_Mobile/Manga.json'

export default function GirdList({ data = DATA_MANGA, numColumns = 2, Img, viewItem, TextTitle }) {
  // console.log(Manga)
  const renderItem = (value) => {
    const {
      item: { title, image, rating, genre, view }
    } = value
    // console.log(value)



    const viewWidth1 = () => {

      if (numColumns === 2) {
        return { width: "50%" }
      }
      if (numColumns === 3) {
        return { width: "33.333%" }
      }
      if (numColumns === 4) {
        return { width: "25%" }
      }

    }
    return (
      <View style={[viewItem, viewWidth1()]} >
        <Image source={{ uri: image }} style={Img} ></Image>
        <Text style={TextTitle}>{title.length < 30 ? title : `${title.slice(0, 30)}...`}</Text>

        {/* {rating ? <Text style={{ height: "10%" }}>{rating}</Text> : <></>} */}
        {/* {genre ? <Text style={{ height: "10%" }}>{genre}</Text> : <></>} */}
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
  viewItem: {
    height: 200,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  },
  Img:
    { width: "100%", height: "80%", resizeMode: "cover", borderRadius: 10 }




})