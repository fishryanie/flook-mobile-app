import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import color from '../../Constants/Color'
const filterType = [{ id: "1", type: "Dị năng" }, { id: "2", type: "Bàn tay vàng" }, { id: "3", type: "Anh hùng cứu mỹ nhân" }, { id: "4", type: "Hài" }]
const HorizontalList = ({ data = filterType }) => {
  const [isClickItem, setIsClickItem] = useState("1")

  const renderItem = (value) => {
    const {
      item: { type, id }
    } = value
    // console.log(value)
    return (
      <View style={[styles.viewItem, isClickItem === id ? { backgroundColor: "#dedede" } : null]} >
        <TouchableOpacity style={{ width: "100%", height: '100%' }} onPress={() => setIsClickItem(id)}>
          <Text style={styles.text}>{type}</Text>
        </TouchableOpacity>

      </View>
    )
  }
  return (
    <View style={styles.viewFlatlist}>
      <FlatList
        style={styles.flatStyle}
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={item => item.type}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default HorizontalList
const styles = StyleSheet.create({

  viewFlatlist: {
    flex: 1,

    // backgroundColor: "green",
  },
  flatStyle: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: "red",
  },
  viewItem: {
    height: 30,
    marginRight: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.grey[50],
    borderRadius: 50,
    paddingVertical: 3
  },

  text: {
    height: "100%",
    flex: 1,
    fontSize: 12
    // backgroundColor: "red"
  }
}
)