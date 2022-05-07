import React, { Component, useEffect, useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Checkbox, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Action from '../../Shop/Action';
import Selector from '../../Shop/Selector';
import ListFilterData from '../../Constants/ListFilterData';

const ListAccordion = () => {
  const dispatch = useDispatch()
  let filterObj
  const listAuthor = Selector.book.DataAllAuthor()
  const listGenre = Selector.book.DataAllGenre()
  const [author, setAuthor] = useState([])
  const [genre, setGenre] = useState([])
  const [allowed, setAllowed] = useState(ListFilterData.listAllowed)
  const [chapter, setChapter] = useState(ListFilterData.listChapter)
  const [status, setStatus] = useState(ListFilterData.listStatus)
  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    dispatch(Action.book.findAuthor())
    dispatch(Action.book.findGenre())
  }, [])

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

  const handlePress = (e) => {
    console.log("eeeeeeee", e)
    setExpanded(!expanded)
  };

  let getFilterObj = () => {
    const newChapter = []
    const newAuthor = []
    const newGenre = []
    const newStatus = []
    for (let value in chapter) {
      // console.log("value", chapter[value])
      if (chapter[value].isSelected == true && chapter[value].name == "All") {
        console.log("bbb")
        newChapter.push(chapter[value].chapter)
      }
      if (chapter[value].isSelected == true && chapter[value].name != "All") {
        console.log("aa")
        newChapter.push(chapter[value].chapter)
      }
    }
    // console.log(newChapter.flat())
    for (let value in author) {
      if (author[value].isSelected == true && author[value].name !== "All") {
        console.log("bbb")
        newAuthor.push(author[value]._id)
      }
    }
    // console.log(newAuthor.flat())
    for (let value in genre) {
      if (genre[value].isSelected == true && genre[value].name !== "All") {
        console.log("bbb")
        newGenre.push(genre[value]._id)
      }
    }
    // console.log(newGenre.flat())
    for (let value in status) {
      if (status[value].isSelected == true && status[value].name != "All") {
        console.log("aa")
        newStatus.push(status[value].status)
      }
    }
    console.log("value", newStatus.flat())
    filterObj = {
      author: newAuthor,
      genre: newGenre,
      status: newStatus.flat()
    }
    console.log("filterObj", filterObj)
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
    if (newArr[0].isSelected === true && id == "1") {
      // console.log("Click alll")
      let newArr1 = arr.map((value) => {
        return { ...value, isSelected: true }
      })
      if (type === "author") {
        setAuthor(newArr1)
      } else if (type === "genre") {
        setGenre(newArr1)
      } else if (type === "allowed") {
        setAllowed(newArr1)
      } else if (type === "chapter") {
        setChapter(newArr1)
      } else if (type === "status") {
        setStatus(newArr1)
      }
      return
    }
    if (newArr[0].isSelected === false && id == "1") {
      // console.log("Click alll")
      let newArr1 = arr.map((value) => {
        return { ...value, isSelected: false }
      })
      if (type === "author") {
        setAuthor(newArr1)
      } else if (type === "genre") {
        setGenre(newArr1)
      } else if (type === "allowed") {
        setAllowed(newArr1)
      } else if (type === "chapter") {
        setChapter(newArr1)
      } else if (type === "status") {
        setStatus(newArr1)
      }
      return
    }

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
    <View style={{ flex: 1 }} >
      <View style={styles.ViewHeader}>
        <TouchableOpacity onPress={getFilterObj} style={styles.TouchableOpacityHeader}>
          <Text style={styles.TextHeader}>{"Cancle"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader}>
          <Text style={styles.TextHeader}>{"Clear"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityHeader}>
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

    </View>
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
    marginTop: "10%",
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