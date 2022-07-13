import { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../Store/Actions';
import ListFilterData from '../../Constants/ListFilterData';
import ListAccordion from '../../Components/Accordion'
import typography from '../../Constants/Typography'
import actionTypes from '../../Store/Actions/constants';

const FilterScreen = ({ route }) => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation();
  const { screenNameBefore } = route.params;


  // const refSort = useRef()

  const dispatch = useDispatch()
  const filterObj = useSelector(state => state.BookReducer.listFilter)
  const listAuthor = useSelector(state => state.BookReducer.listAuthor)
  const listGenre = useSelector(state => state.BookReducer.listGenre)
  const listAlowedAge = useSelector(state => state.BookReducer.listAllowed)
  const listStatus = useSelector(state => state.BookReducer.listStatus)
  const listChapter = useSelector(state => state.BookReducer.listChapter)
  const listSort = useSelector(state => state.BookReducer.listSort)

  const sortObj = useSelector(state => state.BookReducer.sortObj)
  // console.log("sortObj useSelector", sortObj)
  const [listFilter, setListFilter] = useState({
    // author: ListFilterData.listFilterAuthor,
    author: [],
    genre: [],
    allowedage: listAlowedAge,
    chapter: listChapter,
    status: listStatus,
    sort: listSort,
  })

  const handleSetListFilter = (value) => {
    setListFilter(value)
  }

  const clearFilter = () => {
    // console.log("clear")
    const clearAuthor = listFilter.author.map((value) => {
      return { ...value, isSelected: false }
    })
    const clearGenre = listFilter.genre.map((value) => {
      return { ...value, isSelected: false }
    })
    const clearStatus = listFilter.status.map((value) => {
      return { ...value, isSelected: false }
    })
    const clearAllowed = listFilter.allowedage.map((value) => {
      return { ...value, isSelected: false }
    })
    const clearChapter = listFilter.chapter.map((value) => {
      return { ...value, isSelected: false }
    })
    const clearSort = listFilter.sort.map((value) => {
      return { ...value, isSelected: false }
    })

    handleSetListFilter({ ...listFilter, genre: clearGenre, author: clearAuthor, chapter: clearChapter, allowedage: clearAllowed, status: clearStatus, sort: clearSort })
  }

  const getFilterObj = () => {
    // console.log("goi get filter obj")
    const newChapter = [], newAuthor = [], newGenre = [], newStatus = [], newAllowedAge = [], newSort = []

    for (let value in listFilter.author) {
      if (listFilter.author[value].isSelected == true && listFilter.author[value].name !== "All") {
        newAuthor.push(listFilter.author[value]._id)
      }
      // else if (listFilter.author[value].isSelected == true && listFilter.author[value].name == "All") {
      //   newAuthor = []
      // }
    }

    for (let value in listFilter.genre) {
      if (listFilter.genre[value].isSelected == true && listFilter.genre[value].name !== "All") {
        newGenre.push(listFilter.genre[value]._id)
       }
        // else if (listFilter.genre[value].isSelected == true && listFilter.genre[value].name == "All") {
      //   newGenre = []
      // }
    }

    for (let value in listFilter.chapter) {

      if (listFilter.chapter[value].isSelected == true) {
        newChapter.push(listFilter.chapter[value].chapter)
      }
    }

    for (let value in listFilter.status) {

      if (listFilter.status[value].isSelected == true) {
        newStatus.push(listFilter.status[value].status)
      }
    }

    for (let value in listFilter.allowedage) {

      if (listFilter.allowedage[value].isSelected == true) {
        newAllowedAge.push(listFilter.allowedage[value].allowed)
      }
    }


    for (let value in listFilter.sort) {
      if (listFilter.sort[value].isSelected == true) {
        sortObj ? newSort.push(sortObj) : newSort.push(listFilter.sort[value])
      }
    }
    console.log("obj filter screen filter", {
      author: newAuthor,
      genre: newGenre,
      status: newStatus,
      chapter: newChapter,
      allowedAge: newAllowedAge,
      sort: newSort
    });
    return {
      author: newAuthor,
      genre: newGenre,
      status: newStatus,
      chapter: newChapter,
      allowedAge: newAllowedAge,
      sort: newSort
    }
  }
  const handleFilterBook = () => {
    // console.log("🚀 ~ file: MainStack.js ~ line 67 ~ handleFilterBook ~ listFilter", filterObj)
    dispatch(Action.book.filterBook(filterObj))
  }

  useEffect(() => {
    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [dispatch])

  useEffect(() => {
    const listFilterObj = getFilterObj()
    dispatch({ type: actionTypes.setListFilter, payload: listFilterObj })
  }, [listFilter, sortObj])

  useEffect(() => {
    let authorArr = listAuthor.map((item) => {
      return { ...item, isSelected: false }
    })
    authorArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    let genreArr = listGenre.map((item) => {
      return { ...item, isSelected: false }
    })
    genreArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    handleSetListFilter({ ...listFilter, author: authorArr, genre: genreArr });
  }, [listAuthor, listGenre])


  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.header, { marginTop: insets.top }]}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Text>Cancle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { clearFilter() }}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handleFilterBook() }}>
          <Text>Refine</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#ededed" }}></View>

      <ScrollView>
        {screenNameBefore === "Channel" && (
          <>
            <ListAccordion title='Author' array={listFilter.author} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} />
            <ListAccordion title='Genre' array={listFilter.genre} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} />
            <ListAccordion title='Status' array={listFilter.status} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} />
            <ListAccordion title='Allowed Age' array={listFilter.allowedage} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} />
            <ListAccordion title='Chapter' array={listFilter.chapter} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} />
            <ListAccordion title='Sort' array={listFilter.sort} sort={true} onSetListFilter={handleSetListFilter} listFilterObj={listFilter} onGetFilterObj={getFilterObj} />
          </>
        )
        }


      </ScrollView>
    </View>
  )
}

export default FilterScreen
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: 'white'
  }
})