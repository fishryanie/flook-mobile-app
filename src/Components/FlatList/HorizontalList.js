import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import color from '../../Constants/Color'
const filterType = [{ type: "Dị năng" }, { type: "Bàn tay vàng" }, { type: "Anh hùng cứu mỹ nhân" }]
const HorizontalList = () => {


  const renderItem = (value) => {
    const {
      item: { type, id = Math.random(10, 100000) }
    } = value
    // console.log(value)


    return (
      <View style={styles.viewItem}>

        <Text style={styles.text}>{type}</Text>

      </View>
    )
  }
  return (
    <View style={styles.viewFlatlist}>
      <FlatList
        style={styles.flatStyle}
        data={filterType}
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
  flatStyle: {
    width: "100%",

    height: "100%",
    // backgroundColor: "red",
  },
  viewFlatlist: {
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
  },
  viewItem: {
    flexDirection: "column",
    height: "100%",
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
    // backgroundColor: "red"
  }
}
)