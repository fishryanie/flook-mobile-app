import { View, Text } from 'react-native'
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
      {openGridorList ? <GirdList heightImage={"80%"}
        heightItem={200} /> : <VerticalList />}

    </View>
  )
}

export default Manga