import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BookCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbAXFrB7BY8g1B80o5HumeIwCfJtnaAY5MQAVxIOcJsNKyNbCsMlbQv1_4ggY7iX3tkQ&usqp=CAU" }} />
      </View>
      <View style={styles.infoBook}>
        <Text>Tên Của bộ truyện</Text>
        <Text>Cái gì đó chưa biết</Text>
      </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dedddc",
    paddingLeft: "2%"
  },
  infoBook: {
    flex: 3,
    // backgroundColor: 'red',
    marginLeft: 10,
  },
  imageView: {
    paddingVertical: "2%"
  },
  image: {
    width: 40,
    height: 50,
    resizeMode: "cover",
    borderRadius: 5
  }
})