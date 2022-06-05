import { useState } from 'react'
import { Checkbox, List } from 'react-native-paper';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from "react-native";
import typography from '../Constants/Typography'

const ListAccor = (props) => {

  const { title, array, listFilterObj, onSetListFilter } = props
  const [expanded, setExpanded] = useState();

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
    if (id !== "1") {
      newArr[0].isSelected = false
    }
    if (type === title) {
      let propsName = type.toLowerCase()
      onSetListFilter({ ...listFilterObj, [propsName]: newArr })

    }
  }
  return (
    <List.Accordion
      title={title}
      titleStyle={{fontWeight: typography.fontWeights.semibold.toString()}}
      left={props => { title && <List.Icon {...props} />}}
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
                <List.Item title={item.name} style={{ width: "100%" }}/>
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