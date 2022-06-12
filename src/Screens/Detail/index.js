import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import { AntDesign, Ionicons, MaterialIcons } from 'react-native-vector-icons'
import DetailScreen from './DetailScreen'
const HEADER_HEIGHT = 200

const DATA = [0, 1, 2, 3, 4]
const identity = (v) => v + ''

const Header = () => {

  const [offset, setOffset] = React.useState({ x: 0, y: 50 });

  const getOffset = (offset) => {
    if (offset.y <= 0) return true
    return false
  }
  return <View style={styles.header}
  >

    <TouchableOpacity style={getOffset(offset) ? styles.goBack : styles.goBack1}>
      <AntDesign name='left' size={25} color={getOffset(offset) ? 'black' : 'white'} />
    </TouchableOpacity>
    <View style={getOffset(offset) ? styles.up_dow : styles.up_dow1}>
      <TouchableOpacity style={{ marginRight: 10, }} onPress={() => console.log("click")}>
        <MaterialIcons name='system-update-alt' size={25} color={getOffset(offset) ? 'black' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 5 }}>
        <Ionicons name='ellipsis-horizontal-outline' size={25} color={getOffset(offset) ? 'black' : 'white'} />
      </TouchableOpacity>
    </View>
    <Text style={getOffset(offset) ? styles.textName : styles.textName1}>One piece</Text>
    <Image source={{ uri: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg" }} style={[styles.image, getOffset(offset) ? { opacity: 0.5 } : null]}
      ref={(view) => {
        if (!view) return;
        view.measureInWindow((x, y) => {
          setOffset({ x, y });
          console.log("🚀 ~ file: index.js ~ line 25 ~ view.measureInWindow ~ y", y)

        })
      }}
    />
  </View>
}

const index = () => {
  const renderItem = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    )
  }, [])

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      minHeaderHeight={70}
      TabBarComponent={props => <MaterialTabBar {...props} indicatorStyle={{ backgroundColor: 'red' }} />}
    >
      <Tabs.Tab name="B">
        <Tabs.ScrollView style={{ flex: 1 }} >
          <DetailScreen />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="A">
        <Tabs.Tab name="B">
          <Tabs.ScrollView>
            <View style={[styles.box, styles.boxA]} />
            <View style={[styles.box, styles.boxB]} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Tab>

    </Tabs.Container>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    flex: 1,
    position: 'relative',
    height: HEADER_HEIGHT,
    width: '100%',
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  goBack: {
    zIndex: 10,
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  goBack1: {
    zIndex: 10,
    position: 'absolute',
    top: 10,
    left: 20,
  },
  up_dow: {
    flexDirection: "row",
    zIndex: 10,
    position: 'absolute',
    bottom: 40,
    width: 80,
    right: 20,
    justifyContent: "space-between"
  },
  up_dow1: {
    flexDirection: "row",
    zIndex: 10,
    position: 'absolute',
    top: 10,
    width: 80,
    right: 20,
    justifyContent: "space-between"
  },
  textName: {
    zIndex: 10,
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: "black"
  },
  textName1: {
    zIndex: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }

})

export default index