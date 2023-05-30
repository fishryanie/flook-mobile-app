import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from "react-native";
import { Checkbox, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Action from '../../Shop/Action';
import Selector from '../../Shop/Selector';
import ListFilterData from '../../Constants/ListFilterData';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListAccordion = (props) => {
  const {
    route: {
      params: { onFilterList, screen },
    },
  } = props;
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  // console.log("screen", screen)
  const listAuthor = Selector.book.DataAllAuthor()
  const listGenre = Selector.book.DataAllGenre()
  const [author, setAuthor] = useState([])
  const [genre, setGenre] = useState([])
  const [allowed, setAllowed] = useState(ListFilterData.listAllowed)
  const [chapter, setChapter] = useState(ListFilterData.listChapter)
  const [status, setStatus] = useState(ListFilterData.listStatus)



  useEffect(() => {

    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [dispatch])

  useEffect(() => {
    let authorArr = listAuthor.map((item) => {
      return { ...item, isSelected: true }
    })
    authorArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })
    setAuthor(authorArr);
    let genreArr = listGenre.map((item) => {
      return { ...item, isSelected: true }
    })
    genreArr.splice(0, 0, { _id: "1", name: "All", isSelected: true })
    setGenre(genreArr);
  }, [listAuthor, listGenre])


  const clearFilter = () => {
    const clearAuthor = author.map((value) => {
      return { ...value, isSelected: false }
    })
    setAuthor(clearAuthor)
    const clearGenre = genre.map((value) => {
      return { ...value, isSelected: false }
    })
    setGenre(clearGenre)
    const clearStatus = status.map((value) => {
      return { ...value, isSelected: false }
    })
    setStatus(clearStatus)
    const clearAllowed = allowed.map((value) => {
      return { ...value, isSelected: false }
    })
    setAllowed(clearAllowed)
    const clearChapter = chapter.map((value) => {
      return { ...value, isSelected: false }
    })
    setChapter(clearChapter)
  }

  const getFilterObj = () => {
    const newChapter = []
    const newAuthor = []
    const newGenre = []
    const newStatus = []
    const newAllowed = []
    for (let value in chapter) {
      // console.log("value", chapter[value])

      if (chapter[value].isSelected == true && chapter[value].name != "All") {

        newChapter.push(chapter[value].chapter)
      }
      // else if (chapter[value].isSelected == true && chapter[value].name == "All") {
      //   newChapter.push(...chapter.map((item) => { return item.chapter }))
      //   newChapter.shift()
      // }





    }
    // console.log(newChapter.flat())
    for (let value in author) {
      if (author[value].isSelected == true && author[value].name !== "All") {
        newAuthor.push(author[value]._id)
      }
      else if (author[value].isSelected == true && author[value].name == "All") {
        newAuthor.push(...author.map((item) => { return item._id }))
        newAuthor.shift()
      }
    }
    // console.log(newAuthor.flat())
    for (let value in genre) {
      if (genre[value].isSelected == true && genre[value].name !== "All") {
        newGenre.push(genre[value]._id)
      } else if (genre[value].isSelected == true && genre[value].name == "All") {
        newGenre.push(...genre.map((item) => { return item._id }))
        newGenre.shift()
      }
    }
    // console.log(newGenre.flat())
    for (let value in status) {
      if (status[value].isSelected == true && status[value].name != "All") {
        newStatus.push(status[value].status)
      }


    }

    for (let value in allowed) {
      if (allowed[value].isSelected == true && allowed[value].name != "All") {
        console.log("aa")
        newAllowed.push(allowed[value].status)
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
    return filterObj
    // console.log("filterObj", filterObj)
  }
  const handelClickItem = (id, isClicked, arr, type) => {
    console.log("id isselected", id, isClicked)
    let newArr = arr.map((value) => {
      if (id == value._id) {
        return { ...value, isSelected: isClicked }
      }
      return value
    })
    if (id !== "1") {
      newArr[0].isSelected = false
    }
    // if (newArr[0].isSelected === true && id == "1") {
    //   console.log("Click alll")
    //   let newArr1 = arr.map((value) => {
    //     return { ...value, isSelected: false }
    //   })
    //   if (type === "author") {
    //     setAuthor(newArr1)
    //   } else if (type === "genre") {
    //     setGenre(newArr1)
    //   } else if (type === "allowed") {
    //     setAllowed(newArr1)
    //   } else if (type === "chapter") {
    //     setChapter(newArr1)
    //   } else if (type === "status") {
    //     setStatus(newArr1)
    //   }
    //   return
    // }
    // if (newArr[0].isSelected === false && id == "1") {
    // console.log("Click alll")
    // let newArr1 = arr.map((value) => {
    //   return { ...value, isSelected: false }
    // })
    // if (type === "author") {
    //   setAuthor(newArr1)
    // } else if (type === "genre") {
    //   setGenre(newArr1)
    // } else if (type === "allowed") {
    //   setAllowed(newArr1)
    // } else if (type === "chapter") {
    //   setChapter(newArr1)
    // } else if (type === "status") {
    //   setStatus(newArr1)
    // }
    // return
    // }

    if (type === "author") {
      setAuthor(newArr)
    } else if (type === "genre") {
      setGenre(newArr)
    } else if (type === "allowed") {
      setAllowed(newArr)
    } else if (type === "chapter") {
      setChapter(newArr)
    } else if (type === "status") {
      setStatus(newArr)
    }
  }
  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <View style={styles.ViewHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.TouchableOpacityHeader}>
          <Text style={styles.TextHeader}>{"Cancle"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader} onPress={clearFilter}>
          <Text style={styles.TextHeader}>{"Clear"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader} onPress={() => { props.navigation.goBack(); onFilterList(getFilterObj()) }} >
          <Text style={styles.TextHeader}>{"Refine"}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <List.Accordion
          title="Author"
          left={props => <List.Icon {...props} />}
          style={styles.Accordion}
        >
          {
            author.map((item) => {
              return (
                <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, author, "author")}>
                  <View style={styles.ViewInTouchableOpacity}>
                    <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                    <List.Item title={item.name}
                      style={{ width: "95%" }}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </List.Accordion>

        <List.Accordion
          title="Genre"
          left={props => <List.Icon {...props} />}
          style={styles.Accordion}
        >
          {
            genre.map((item) => {
              return (
                <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, genre, "genre")}>
                  <View style={styles.ViewInTouchableOpacity}>
                    <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                    <List.Item title={item.name}
                      style={{ width: "95%" }}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }

        </List.Accordion>

        <List.Accordion
          title="Allowed"
          left={props => <List.Icon {...props} />}
          style={styles.Accordion}
        >
          {
            allowed.map((item) => {
              return (
                <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, allowed, "allowed")}>
                  <View style={styles.ViewInTouchableOpacity}>
                    <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                    <List.Item title={item.name}
                      style={{ width: "95%" }}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }

        </List.Accordion>

        <List.Accordion
          title="Chapter"
          left={props => <List.Icon {...props} />}
          style={styles.Accordion}
        >
          {
            chapter.map((item) => {
              return (
                <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, chapter, "chapter")}>
                  <View style={styles.ViewInTouchableOpacity}>
                    <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                    <List.Item title={item.name}
                      style={{ width: "95%" }}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </List.Accordion>

        <List.Accordion
          title="Status"
          left={props => <List.Icon {...props} />}
          style={styles.Accordion}
        >
          {
            status.map((item) => {
              return (
                <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, status, "status")}>
                  <View style={styles.ViewInTouchableOpacity}>
                    <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                    <List.Item title={item.name}
                      style={{ width: "95%" }}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </List.Accordion>
      </ScrollView>

    </View >
  )
}
export default ListAccordion
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