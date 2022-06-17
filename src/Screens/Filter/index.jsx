import { useEffect, useRef, useState } from 'react';
import { View, ScrollView, } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../Store/Actions';
import ListFilterData from '../../Constants/ListFilterData';
import ListAccordion from '../../Components/Accordion'
import typography from '../../Constants/Typography'
import actionTypes from '../../Store/Actions/constants';

const FilterScreen = ({ route }) => {

  const navigation = useNavigation();
  const { screenNameBefore } = route.params;


  // const refSort = useRef()

  const dispatch = useDispatch()

  const listAuthor = useSelector(state => state.BookReducer.listAuthor)
  const listGenre = useSelector(state => state.BookReducer.listGenre)
  const sortObj = useSelector(state => state.BookReducer.sortObj)


  const [listFiter, setListFilter] = useState({
    author: [],
    genre: [],
    allowedage: ListFilterData.listAllowed,
    chapter: ListFilterData.listChapter,
    status: ListFilterData.listStatus,
    sort: ListFilterData.listSort
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
    console.log("clear")
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

    handleSetListFilter({ ...listFiter, genre: clearGenre, author: clearAuthor, chapter: clearChapter, allowedage: clearAllowed, status: clearStatus })
  }

  const getFilterObj = () => {
    const newChapter = [], newAuthor = [], newGenre = [], newStatus = [], newAllowedAge = []

    for (let value in listFiter.author) {
      if (listFiter.author[value].isSelected == true && listFiter.author[value].name !== "All") {
        newAuthor.push(listFiter.author[value]._id)
      }
      else if (listFiter.author[value].isSelected == true && listFiter.author[value].name == "All") {
        newAuthor.push('All')
      }
    }

    for (let value in listFiter.genre) {
      if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name !== "All") {
        newGenre.push(listFiter.genre[value]._id)
      } else if (listFiter.genre[value].isSelected == true && listFiter.genre[value].name == "All") {
        newGenre.push('All')
      }
    }

    for (let value in listFiter.chapter) {
      if (listFiter.chapter[value].isSelected == true && listFiter.chapter[value].name == "All") {
        newChapter.push('All')
      }
      if (listFiter.chapter[value].isSelected == true && listFiter.chapter[value].name != "All") {
        newChapter.push(listFiter.chapter[value].chapter)
      }
    }

    for (let value in listFiter.status) {
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name == "All") {
        newStatus.push('All')
      }
      if (listFiter.status[value].isSelected == true && listFiter.status[value].name != "All") {
        newStatus.push(listFiter.status[value].status)
      }
    }

    for (let value in listFiter.allowedage) {
      if (listFiter.allowedage[value].isSelected == true && listFiter.allowedage[value].name == "All") {
        newAllowedAge.push('All')
      }
      if (listFiter.allowedage[value].isSelected == true && listFiter.allowedage[value].name != "All") {
        newAllowedAge.push(listFiter.allowedage[value].allowed)
      }
    }

    return {
      author: newAuthor,
      genre: newGenre,
      status: newStatus,
      chapter: newChapter,
      allowedAge: newAllowedAge,
      sortByName: sortObj.sortByName,
      sortByDate: sortObj.sortByDate,
      sortByView: sortObj.sortByView,
      sortByReview: sortObj.sortByReview
    }
  }



  useEffect(() => {
    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [dispatch])

  useEffect(() => {
    const lisFilter = getFilterObj()
    dispatch({ type: actionTypes.setListFilter, payload: lisFilter })
  })

  useEffect(() => {
    let authorArr = listAuthor.map((item) => {
      return { ...item, isSelected: false }
    })
    authorArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    let genreArr = listGenre.map((item) => {
      return { ...item, isSelected: false }
    })
    genreArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })

    handleSetListFilter({ ...listFiter, author: authorArr, genre: genreArr });
  }, [listAuthor, listGenre])




  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {screenNameBefore === "Channel" && (
          <>
            <ListAccordion title='Author' array={listFiter.author} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
            <ListAccordion title='Genre' array={listFiter.genre} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
            <ListAccordion title='Status' array={listFiter.status} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
            <ListAccordion title='Allowed Age' array={listFiter.allowedage} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
            <ListAccordion title='Chapter' array={listFiter.chapter} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} />
            <ListAccordion title='Sort' array={listFiter.sort} sort={true} onSetListFilter={handleSetListFilter} listFilterObj={listFiter} onGetFilterObj={getFilterObj} />
          </>
        )
        }


      </ScrollView>
    </View>
  )
}

export default FilterScreen
