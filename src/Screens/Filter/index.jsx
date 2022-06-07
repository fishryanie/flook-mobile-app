import { useEffect, useState } from 'react';
import { View, ScrollView, } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../Store/Actions';
import ListFilterData from '../../Constants/ListFilterData';
import ListAccordion from '../../Components/Accordion'
import typography from '../../Constants/Typography'
import actionTypes from '../../Store/Actions/constants';

const FilterScreen = () => {

  const navigation = useNavigation();

  const insets = useSafeAreaInsets()
  
  const dispatch = useDispatch()

  const listAuthor = useSelector(state => state.BookReducer.listAuthor)
  console.log("🚀 ~ file: index.jsx ~ line 21 ~ FilterScreen ~ listAuthor", listAuthor)
  const listGenre = useSelector(state => state.BookReducer.listGenre)
  console.log("🚀 ~ file: index.jsx ~ line 22 ~ FilterScreen ~ listGenre", listGenre)

  

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
        newChapter.push(...listFiter.chapter.map((item) => { return item.chapter }))
        newChapter.shift()
      }
      if (listFiter.chapter[value].isSelected == true && listFiter.chapter[value].name != "All") {
        newChapter.push(listFiter.chapter[value].chapter)
      }
    }

    for (let value in listFiter.author) {
      if (listFiter.author[value].isSelected == true && listFiter.author[value].name !== "All") {
        newAuthor.push(listFiter.author[value]._id)
      }
      else if (listFiter.author[value].isSelected == true && listFiter.author[value].name == "All") {
        newAuthor.push(...listFiter.author.map((item) => { return item._id }))
        newAuthor.shift()
      }
    }
    for (let value in listFiter.genre) {
      if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name !== "All") {
        newGenre.push(listFiter.genre[value]._id)
      } else if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name == "All") {
        newGenre.push(...listFiter.genre.map((item) => { return item._id }))
        newGenre.shift()
      }
    }
    for (let value in listFiter.status) {
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name == "All") {
        newStatus.push(...listFiter.status.map((item) => { return item.status }))
        newStatus.shift()
      }
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name != "All") {
        newStatus.push(listFiter.status[value].status)
      }
    }

    for (let value in listFiter.allowed) {
      if (listFiter.allowed[value].isSelected == true && listFiter.allowed[value].name == "All") {
        newAllowed.push(...listFiter.allowed.map((item) => { return item.chapter }))
        newAllowed.shift()
      }
      if (listFiter.allowed[value].isSelected == true && listFiter.allowed[value].name != "All") {
        newAllowed.push(listFiter.allowed[value].allowedAge)
      }
    }
    let filterObj = {
      author: newAuthor,
      genre: newGenre,
      status: newStatus.flat().slice(0),
      chapter: newChapter,
      allowed: newAllowed
    }
    return filterObj


  }

  useEffect(() => {
    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [dispatch])

  useEffect(() => {
    const lisFilter = getFilterObj()
    dispatch({type: actionTypes.setListFilter, payload:lisFilter})
  })

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


  return (
    <View style={{flex: 1}}>
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

export default FilterScreen
