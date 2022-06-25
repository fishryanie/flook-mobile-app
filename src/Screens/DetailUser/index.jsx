import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Tabs, MaterialTabBar, Tab } from 'react-native-collapsible-tab-view'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Avatar } from 'react-native-elements';
import appConfigs from '../../Configs/app'
import typography from '../../Constants/Typography';
import Activities from './Activities'
import TacPham from './TacPham'


const HEADER_HEIGHT = 260

const Header = () => {

  const [offset, setOffset] = React.useState({ x: 0, y: 50 });

  const getOffset = (offset) => {
    if (offset.y <= 0) return true
    return false
  }

  return <View style={styles.header}>
    {/* <Text style={getOffset(offset) && styles.textName}>{'Phuoc Sanh'}</Text> */}
    <View style={{ height: "50%", position: 'relative' }}>
      <Image source={{ uri: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg" }} style={[styles.image, getOffset(offset) ? { opacity: 0.5 } : null]}
        ref={(view) => {
          if (!view) return;
          view.measureInWindow((x, y) => {
            setOffset({ x, y });
          })
        }}
      />
      <View style={styles.avatar}>
        <Avatar rounded size="large" source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyKpE2UFNx9kzoBgSvMW0oTyuHu2dP7RwKw&usqp=CAU'
        }} />
      </View>

    </View>
    <View style={{ flexDirection: 'row', marginTop: 45, marginLeft: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: typography.fontSizes.lg }}>{"Phuoc Sanh"}</Text>
      <MaterialCommunityIcons onPress={() => {
        console.log("🚀 ~ file: index.jsx ~ line 46 ~ Header ~ MaterialCommunityIcons")
      }} name='account-edit-outline' color={"#bab7b6"} size={30} style={{ marginLeft: 15 }} />
    </View>

    <Text style={styles.textVip}>Vip</Text>
    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
      <Text style={{ fontSize: 10 }}>Nguời theo dõi 10</Text>
      <Text style={{ fontSize: 10, marginLeft: 15 }}>Theo dõi 5</Text>
    </View>
    <View style={{ marginTop: 10, height: 1, borderColor: "#fafafa", borderWidth: 1, width: '100%' }}></View>
  </View>
}

const Index = () => {
  const [tabName, setTabName] = React.useState();
  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      minHeaderHeight={90}
      onIndexChange={(tab) => setTabName(tab)}
      TabBarComponent={props => {
        return (
          <MaterialTabBar {...props} indicatorStyle={{ backgroundColor: 'red' }} >
          </MaterialTabBar>
        )
      }
      }
    >
      <Tabs.Tab name="Hoạt động">
        <Tabs.ScrollView style={{ flex: 1 }}  >
          <Activities />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="Tác phẩm" >
        <Tabs.ScrollView style={{ flex: 1 }}>
          <TacPham />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  )
}

const styles = StyleSheet.create({
  topbar: {
    paddingHorizontal: 10,
    marginTop: 1,
    flexDirection: "row",
    height: 60,
    backgroundColor: '#f0f0f0'
  },
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
    bottom: 40 + 0,
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
    color: "red"
  },
  textName1: {
    zIndex: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  textVip: {
    height: 20,
    fontSize: 12,
    width: 40,
    marginLeft: 20,
    textAlign: "center",
    color: "white",
    borderRadius: 10,
    backgroundColor: '#6dbbf2',

  },
  avatar: {

    position: 'absolute',
    bottom: 0,
    left: 15,
    translateY: 35
  },
  topViewBtSheeet: {
    flexDirection: "row",
    alignItems: 'center',
    width: '100%',

    justifyContent: "space-between"
  },
  itemPage: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: appConfigs.FULL_WIDTH / 3.35,

    // backgroundColor: "red"
  },
  choosePageTouchable: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 5,
    paddingVertical: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

})

export default Index