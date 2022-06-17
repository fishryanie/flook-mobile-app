import { useEffect, useState } from 'react'
import { Checkbox, List } from 'react-native-paper';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from "react-native";
import typography from '../Constants/Typography'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { useDispatch } from 'react-redux';
import actionTypes from '../Store/Actions/constants';
const ListAccor = (props) => {

  const { title, array, listFilterObj, onSetListFilter, onGetFilterObj, sort } = props
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState();
  const [isClickSortByDateASC, setisClickSortByDateASC] = useState(true);
  const [isClickSortByNameASC, setisClickSortNameASC] = useState(true);
  const [isClickSortByViewASC, setisClickSortByViewASC] = useState(true);
  const [isClickSortByReviewASC, setisClickSortByReviewASC] = useState(true);
  const [objSort, setObjSort] = useState({
    sortByName: "ASC",
    sortByDate: "ASC",
    sortByView: "ASC",
    sortByReview: "ASC"
  })

  useEffect(() => {

    if (sort) {
      dispatch({ type: actionTypes.setSortObj, payload: objSort })
    }
    // console.log("🚀 ~ file: Accordion.jsx ~ line 23 ~ ListAccor ~ objSort", newObjSort)

  }, [objSort])



  const handClickSortItem = (item) => {
    if (item.name === 'Sort by name') {

      setisClickSortNameASC(!isClickSortByNameASC)
      if (isClickSortByNameASC) {
        setObjSort({ ...objSort, sortByName: "DESC" })
      }
      else setObjSort({ ...objSort, sortByName: "ASC" })

    } if (item.name === 'Sort by date') {

      setisClickSortByDateASC(!isClickSortByDateASC)
      if (isClickSortByDateASC) {
        setObjSort({ ...objSort, sortByDate: "DESC" })
      }
      else setObjSort({ ...objSort, sortByDate: "ASC" })
    } if (item.name === 'Sort by view') {
      setisClickSortByViewASC(!isClickSortByViewASC)
      if (isClickSortByViewASC) {
        setObjSort({ ...objSort, sortByView: "DESC" })
      }
      else setObjSort({ ...objSort, sortByView: "ASC" })
    } if (item.name === 'Sort by review') {
      setisClickSortByReviewASC(!isClickSortByReviewASC)
      if (isClickSortByReviewASC) {
        setObjSort({ ...objSort, sortByReview: "DESC" })
      }
      else setObjSort({ ...objSort, sortByReview: "ASC" })
    }
  }


  const renderIconSort = (item) => {
    if (item.name === "Sort by name") {
      // console.log("isSelect ", item.isSelected)
      return (
        item.isSelected ?
          isClickSortByNameASC ? <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-ascending" size={25} /> : <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-descending" size={25} />
          : <MaterialCommunityIcons name="sort-ascending" size={25} />
      )
    }
    else if (item.name === "Sort by date") {
      return (<>{
        item.isSelected ?
          isClickSortByDateASC ? <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-ascending" size={25} /> : <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-descending" size={25} />
          : <MaterialCommunityIcons name="sort-ascending" size={25} />

      }
      </>
      )
    } else if (item.name === "Sort by view") {
      return (<>{
        item.isSelected ?
          isClickSortByViewASC ? <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-ascending" size={25} /> : <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-descending" size={25} />
          : <MaterialCommunityIcons name="sort-ascending" size={25} />

      }
      </>
      )
    } else {
      return (<>{
        item.isSelected ?
          isClickSortByReviewASC ? <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-ascending" size={25} /> : <MaterialCommunityIcons onPress={() => item.isSelected && handClickSortItem(item)} name="sort-descending" size={25} />
          : <MaterialCommunityIcons name="sort-ascending" size={25} />

      }
      </>
      )
    }
  }
  const handlePress = title => () => {
    setExpanded(title === expanded ? null : title);
  }

  const handelClickItem = (id, isClicked, arr, type) => {
    let newArr = arr.map((value) => {
      if (id == value._id) {
        return { ...value, isSelected: isClicked }
      }
      return value
    })
    if (!props.sort) {
      if (id !== "1") {
        newArr[0].isSelected = false
      } else {
        newArr[0].isSelected = true
        for (let index = 1; index < newArr.length; index++) {
          newArr[index].isSelected = false
        }
      }
    }

    if (type === title) {
      let propsName = type.toLowerCase()
      let newProps = propsName.split(" ").join("");
      onSetListFilter({ ...listFilterObj, [newProps]: newArr })
    }

    if (sort) {
      newArr.forEach((element) => {
        if (!element.isSelected) {
          if (element.name == "Sort by name") {
            setObjSort({ ...objSort, sortByName: "ASC" })
          }
          else if (element.name == "Sort by date") {
            setObjSort({ ...objSort, sortByDate: "ASC" })
          }
          else if (element.name == "Sort by view") {
            setObjSort({ ...objSort, sortByView: "ASC" })
          } else {
            setObjSort({ ...objSort, sortByReview: "ASC" })
          }
        }
      })
    }

  }

  return (
    <List.Accordion
      title={title}
      titleStyle={{ fontWeight: typography.fontWeights.semibold.toString() }}
      left={props => { title && <List.Icon {...props} /> }}
      style={styles.Accordion}
      expanded={expanded === title ? true : false}
      onPress={handlePress(title)}
    >
      {
        array.map((item) => {
          return (
            <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 17 }}>
              <TouchableOpacity key={item._id} style={styles.TouchableOpacity} onPress={() => handelClickItem(item._id, !item.isSelected, array, title)}>
                <View style={styles.ViewInTouchableOpacity}>
                  <Checkbox status={item.isSelected ? 'checked' : "unchecked"} color="#c4c4c4" />
                  <List.Item title={item.name} style={{ width: "100%" }} />
                </View>
              </TouchableOpacity>
              {props.sort &&
                renderIconSort(item)
              }
            </View>
          )
        })
      }
    </List.Accordion>
  )
}

export default ListAccor

const styles = StyleSheet.create({
  Accordion: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
    height: 60,
    fontWeight: typography.fontWeights.extrabold.toString(),
    justifyContent: "center"
  },
  TouchableOpacity: {
    flex: 1, marginStart: -40
  },
  ViewInTouchableOpacity: {
    flex: 1, borderBottomWidth: 1, borderBottomColor: "#ebebeb", flexDirection: "row", alignItems: "center"
  },
})