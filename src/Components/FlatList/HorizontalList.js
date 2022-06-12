import { View, Text, Touchable, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'

import AntDesign from "react-native-vector-icons/AntDesign"


const filterType = [{ type: "Genre" }, { type: "Authur" }, { type: "Allowed" }, { type: "Title" }, { type: "aaaa" }, { type: "bbbb" }]
const HorizontalList = ({ onOpenModal }) => {
  const [openModal, setOpenModal] = useState(0);

  useEffect(() => {
    onOpenModal(openModal)
    // console.log("openModalHorizontal", openModal)
  }, [openModal])
  const handleOpenModal = (item) => {
    setOpenModal(openModal + 1)
    console.log("value hozri", item)
  }

  const renderItem = (value) => {
    const {
      item: { type, id = Math.random(10, 100000) }
    } = value
    // console.log(value)


    return (
      <View style={styles.viewItem}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={(item) => { handleOpenModal(item) }}>
          <Text style={styles.text}>{type}</Text>
          <AntDesign name="caretdown" size={15} color="#707371" style={{ marginStart: 3 }} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.viewFlatlist}>
      <FlatList
        style={styles.flatStyle}
        data={filterType}
        renderItem={renderItem}
        numColumns={1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default HorizontalList
const styles = StyleSheet.create({
  flatStyle: {
    width: "100%",
    height: "80%",
    // backgroundColor: "red",
  },
  viewFlatlist: {

    marginTop: "10%",
    paddingHorizontal: "3%",
    width: "100%",
    height: "4%",
    // backgroundColor: "green",
  },
  viewItem: {
    flex: 1,
    height: "100%",

    marginRight: 15,
    // backgroundColor: "blue",
  },
  touchableOpacity: {
    flex: 1,
    height: "100%",
    paddingVertical: "5%",
    paddingHorizontal: 10,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#707371",
    borderRadius: 50,
    alignItems: 'center',


  },
  text: {
    height: "100%",
    flex: 1,
    // backgroundColor: "red"
  }
}
)