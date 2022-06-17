import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'
import { FlatGrid } from 'react-native-super-grid';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import screenName from '../Constants/ScreenName';

export default function FlatGird(props) {
  const { data } = props

  const [openGridorList, setOpenGirdOrList] = useState(true)

  const navigation = useNavigation()

  const handleOpenGirdOrList = () => {
    setOpenGirdOrList(!openGridorList)
  }
  const handleOpenFilter = () => {
    navigation.navigate(screenName.filterScreen, {
      screenNameBefore: "Channel"
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.childrenView}>
          <Text>{"3 Titles"}</Text>
          <Text>{"3 Titles"}</Text>
        </View>
        <View style={styles.childrenView1}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={handleOpenGirdOrList}>
            <MaterialIcons size={20} name={openGridorList ? "view-list" : 'view-module'} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenFilter}>
            <MaterialIcons size={20} name="filter-list" color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatGrid
        itemDimension={openGridorList ? 130 : 300}
        data={data}
        style={styles.gridView}
        // staticDimension={500}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewItem: {
    height: 200,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
  },
  Img: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 10
  },

  container: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    paddingHorizontal: "5%",
    borderBottomWidth: 0.2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)"
  },
  childrenView: {
    flex: 1,
    justifyContent: "center"
  },
  childrenView1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  touchableOpacity: {
    marginRight: "10%"
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
})
