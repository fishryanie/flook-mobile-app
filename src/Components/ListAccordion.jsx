
import { useState } from 'react'
import { Checkbox, List } from 'react-native-paper';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from "react-native";
const ListAccor = (props) => {

  const { title, array, listFilterObj, onSetListFilter } = props
  const [expanded, setExpanded] = useState();
  // console.log("listFiterObj", listFilterObj)

  const handlePress = title => () => {
    setExpanded(title === expanded ? null : title);
  }

  const handelClickItem = (id, isClicked, arr, type) => {
    // console.log("id isselected", id, isClicked)
    let newArr = arr.map((value) => {
      if (id == value._id) {
        return { ...value, isSelected: isClicked }
      }
      return value
    })
    if (id !== "1") {
      newArr[0].isSelected = false
    }



    if (type === title) {
      let propsName = type.toLowerCase()
      onSetListFilter({ ...listFilterObj, [propsName]: newArr })

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
  }
  return (
    <List.Accordion
      title={title}
      left={props => <List.Icon {...props} />}
      style={styles.Accordion}
      expanded={expanded === title ? true : false}
      onPress={handlePress(title)}
    >
      {
        array.map((item) => {
          return (
            <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, array, title)}>
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
  )
}

export default ListAccor

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
})