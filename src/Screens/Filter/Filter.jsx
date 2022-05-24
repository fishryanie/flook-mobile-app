import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Action from '../../Store/Actions';
import Selector from '../../Store/Selectors';
import ListFilterData from '../../Constants/ListFilterData';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ListAccordion from '../../Components/ListAccordion'
const Filter = (props) => {
  // const {
  //   route: {
  //     params: { onFilterList, screen },
  //   },
  // } = props;

  const navigation = useNavigation();

  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()

  const listAuthor = Selector.book.DataAllAuthor()
  const listGenre = Selector.book.DataAllGenre()


  const [listFiter, setListFilter] = useState({
    author: [],
    genre: [],
    allowed: ListFilterData.listAllowed,
    chapter: ListFilterData.listChapter,
    status: ListFilterData.listStatus,
  })

  const handleSetListFilter = (value) => {
    setListFilter(value)
  }

  useEffect(() => {
    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [dispatch])


  useEffect(() => {
    let authorArr = listAuthor.map((item) => {
      return { ...item, isSelected: true }
    })
    authorArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    console.log({ ...listFiter })
    let genreArr = listGenre.map((item) => {
      return { ...item, isSelected: true }
    })
    genreArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    handleSetListFilter({ ...listFiter, author: authorArr, genre: genreArr });
  }, [listAuthor])




  const clearFilter = () => {
    const clearAuthor = listFiter.author.map((value) => {
      return { ...value, isSelected: false }
    })


    const clearGenre = listFiter.genre.map((value) => {
      return { ...value, isSelected: false }
    })


    const clearStatus = listFiter.status.map((value) => {
      return { ...value, isSelected: false }
    })


    const clearAllowed = listFiter.allowed.map((value) => {
      return { ...value, isSelected: false }
    })


    const clearChapter = listFiter.chapter.map((value) => {
      return { ...value, isSelected: false }
    })
    handleSetListFilter({ ...listFiter, genre: clearGenre, author: clearAuthor, chapter: clearChapter, allowed: clearAllowed, status: clearStatus })
  }

  const getFilterObj = () => {
    const newChapter = []
    const newAuthor = []
    const newGenre = []
    const newStatus = []
    const newAllowed = []

    for (let value in listFiter.chapter) {

      if (listFiter.chapter[value].isSelected == true && listFiter.chapter[value].name == "All") {
        // console.log("bbbb")
        newChapter.push(...listFiter.chapter.map((item) => { return item.chapter }))
        newChapter.shift()
      }
      if (listFiter.chapter[value].isSelected == true && listFiter.chapter[value].name != "All") {
        // console.log("aaaaaaa")
        newChapter.push(listFiter.chapter[value].chapter)
      }
    }

    // console.log(newChapter.flat())
    for (let value in listFiter.author) {
      if (listFiter.author[value].isSelected == true && listFiter.author[value].name !== "All") {
        newAuthor.push(listFiter.author[value]._id)
      }
      else if (listFiter.author[value].isSelected == true && listFiter.author[value].name == "All") {
        newAuthor.push(...listFiter.author.map((item) => { return item._id }))
        newAuthor.shift()
      }
    }
    // console.log(newAuthor.flat())
    for (let value in listFiter.genre) {
      if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name !== "All") {
        newGenre.push(listFiter.genre[value]._id)
      } else if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name == "All") {
        newGenre.push(...listFiter.genre.map((item) => { return item._id }))
        newGenre.shift()
      }
    }
    // console.log(newGenre.flat())
    for (let value in listFiter.status) {
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name == "All") {
        // console.log("bbbb")
        newStatus.push(...listFiter.status.map((item) => { return item.status }))
        newStatus.shift()
      }
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name != "All") {
        // console.log("aaaaaaa")
        newStatus.push(listFiter.status[value].status)
      }
    }

    for (let value in listFiter.allowed) {
      if (listFiter.allowed[value].isSelected == true && listFiter.allowed[value].name == "All") {
        // console.log("bbbb")
        newAllowed.push(...listFiter.allowed.map((item) => { return item.chapter }))
        newAllowed.shift()
      }
      if (listFiter.allowed[value].isSelected == true && listFiter.allowed[value].name != "All") {
        // console.log("aaaaaaa")
        newAllowed.push(listFiter.allowed[value].allowedAge)
      }
    }
    // console.log("value", newStatus.flat())
    let filterObj = {
      author: newAuthor,
      genre: newGenre,
      status: newStatus.flat().slice(0),
      chapter: newChapter,
      allowed: newAllowed
    }
    // console.log("filterObj", filterObj)
    return filterObj


  }


  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <View style={styles.ViewHeader}>
        {/* onPress={() => props.navigation.goBack()} */}
        <TouchableOpacity style={styles.TouchableOpacityHeader}>
          <Text style={styles.TextHeader}>{"Cancle"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader}
          onPress={clearFilter}>
          <Text style={styles.TextHeader} >{"Clear"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader} onPress={getFilterObj} >
          <Text style={styles.TextHeader}>{"Refine"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <ListAccordion title='Author' array={listFiter.author} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />

        <ListAccordion title='Genre' array={listFiter.genre} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />

        <ListAccordion title='Status' array={listFiter.status} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />

        <ListAccordion title='Allowed' array={listFiter.allowed} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />

        <ListAccordion title='Chapter' array={listFiter.chapter} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
      </ScrollView>
    </View>
  )
}

export default Filter
const styles = StyleSheet.create({
  Accordion: {
    paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: "#ebebeb", height: 60, justifyContent: "center"
  },
  TouchableOpacity: {
    flex: 1, marginStart: -40
  },
  ViewInTouchableOpacity: {
    flex: 1, borderBottomWidth: 1, borderBottomColor: "#ebebeb", flexDirection: "row", alignItems: "center"
  },
  ViewHeader: {
    paddingHorizontal: "6%", width: "100%", height: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between"
  },
  TouchableOpacityHeader: {
    height: "100%", width: "20%", alignItems: "center", justifyContent: "center"
  },
  TextHeader: {
    fontWeight: "bold",
    paddingHorizontal: "12%"
  }
}
)