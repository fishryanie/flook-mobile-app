import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import COLORS from '../Constants/ColorConstants'

const TopFilterBar = ({ onOpenGirdOrList, onOpenFilter }) => {

  return (
    <View style={styles.container}>
      <View style={styles.childrenView}>
        <Text>{"3 Titles"}</Text>
        <Text>{"3 Titles"}</Text>
      </View>
      <View style={styles.childrenView1}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={onOpenGirdOrList}>
          <Ionicons size={30} name="list-sharp" color={COLORS.GREY_01} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpenFilter}>
          <Ionicons size={30} name="filter" color={COLORS.GREY_01} />
        </TouchableOpacity>

      </View>

    </View>


  )
}
const styles = StyleSheet.create({
  container: {

    width: "100%",
    height: "7%",
    // backgroundColor: "red",
    flexDirection: "row",
    paddingHorizontal: "5%"

  },
  childrenView: {
    flex: 1,
    // flexDirection: "row",
    // backgroundColor: "green"
    justifyContent: "center"


  },
  childrenView1: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center"


  },
  touchableOpacity: {
    marginRight: "10%"
  }

})

export default TopFilterBar