import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopFilterBar from '../../Components/TopFilterBar'
import GirdList from '../../Components/FlatList/GirdList'
import VerticalList from '../../Components/FlatList/VerticalList'

const Manga = (props) => {
  const [openGridorList, setOpenGirdOrList] = useState(true)
  const [filterList, setFilterList] = useState({})

  const handleOpenGirdOrList = () => {
    setOpenGirdOrList(!openGridorList)
  }
  const getFilterList = (data) => {
    setFilterList(data)
  }
  console.log("filterList", filterList)
  const handleOpenFilter = () => {
    props.navigation.navigate("filterScreen", { onFilterList: getFilterList, screen: "manga" })
  }

  // console.log("openGridorList", openGridorList)
  return (
    <View style={{ flex: 1 }}>
      <TopFilterBar
        onOpenGirdOrList={handleOpenGirdOrList}
        onOpenFilter={handleOpenFilter} />
      {openGridorList ? <GirdList viewItem={styles.viewItem}
        Img={styles.Img} /> : <VerticalList />}

    </View>
  )
}
const styles = StyleSheet.create({

  viewItem: {
    height: 200,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  },
  Img:
    { width: "100%", height: "80%", resizeMode: "cover", borderRadius: 10 }

})

export default Manga