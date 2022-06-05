import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FlatGrid } from 'react-native-super-grid';
import { useState, useEffect } from 'react'
import screenName from '../../Constants/ScreenName';
import TopTap from '../../Components/TopTab'
import { handleToask } from '../../Functions/GlobleFunc';
import { useDispatch } from 'react-redux';
import actionTypes from '../../Store/Actions/constants';

const data = [
  { name: 'TURQUOISE', code: '#1abc9c' },
  { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' },
  { name: 'AMETHYST', code: '#9b59b6' },
  { name: 'WET ASPHALT', code: '#34495e' },
  { name: 'GREEN SEA', code: '#16a085' },
  { name: 'NEPHRITIS', code: '#27ae60' },
  { name: 'BELIZE HOLE', code: '#2980b9' },
  { name: 'WISTERIA', code: '#8e44ad' },
  { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  { name: 'SUN FLOWER', code: '#f1c40f' },
  { name: 'CARROT', code: '#e67e22' },
  { name: 'ALIZARIN', code: '#e74c3c' },
  { name: 'CLOUDS', code: '#ecf0f1' },
  { name: 'CONCRETE', code: '#95a5a6' },
  { name: 'ORANGE', code: '#f39c12' },
  { name: 'PUMPKIN', code: '#d35400' },
  { name: 'POMEGRANATE', code: '#c0392b' },
  { name: 'SILVER', code: '#bdc3c7' },
  { name: 'ASBESTOS', code: '#7f8c8d' },
]

const ListGirdCustom = props => {
  const { data } = props

  const [search, setSearch] = useState('');

  const [openGridorList, setOpenGirdOrList] = useState(true)

  const navigation = useNavigation()

  const dispatch = useDispatch()

  const handleOpenGirdOrList = () => {
    setOpenGirdOrList(!openGridorList)
  }
  const handleOpenFilter = () => {
    navigation.navigate(screenName.filterScreen)
  }
  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      }
    });
  }, [navigation]);

  useEffect(() => {
    handleToask('SHOW', 'Xin chào đây là màn hình chanel')
    dispatch({type: actionTypes.openLoading})
    setTimeout(() => {
      handleToask('HIDEN')
    }, 3000);
  },[])
  
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


const listTopTab2 = [ 
  { _id: "1", screenName:screenName.comicScreen, title: 'Truyện tranh', component: () => <ListGirdCustom data={data}/>},
  { _id: "2", screenName:screenName.novelScreen, title: 'Tiểu thuyết', component: () => <ListGirdCustom data={data}/>},
  { _id: "3", screenName:screenName.chatStoryScreen, title: 'Truyện chat', component: () => <ListGirdCustom data={data}/>}

]

export default function ChannelScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white"}}>
      <TopTap arrayCategory={listTopTab2}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  viewItem: {
    height: 200,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  },
  Img:{ width: "100%", height: "80%", resizeMode: "cover", borderRadius: 10 },

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