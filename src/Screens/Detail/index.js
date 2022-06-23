import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Tabs, MaterialTabBar, Tab } from 'react-native-collapsible-tab-view'
import { AntDesign, Ionicons, MaterialIcons } from 'react-native-vector-icons'
import ChapterScreen from './ChapterScreen'
import DetailScreen from './DetailScreen'
import BottomSheet from '../../Components/BottomSheet'
import typography from '../../Constants/Typography'
import appConfigs from '../../Configs/app'


const createTotalPages = (totalPages = 879) => {
  const newTotalPages = Math.floor(totalPages / 50)

  let page = []

  let from = 50
  let to = 1
  for (let i = 1; i <= newTotalPages; i++) {

    page.push({
      to,
      from
    })

    if (i === 1) {
      to += 49
      from += 50
    } else if (i === (newTotalPages - 1)) {
      to += 50
      from = totalPages
    } else {
      to += 50
      from += 50
    }
  }
  return page
}


const listChoosePages = () => {
  const list = createTotalPages()
  return list.map((item) => {
    return (<View style={styles.itemPage}>
      <TouchableOpacity style={styles.choosePageTouchable}>
        <Text style={{ fontSize: typography.fontSizes.md }}>{`${item.to} - ${item.from}`}</Text>
      </TouchableOpacity>

    </View>)
  })
}
const HEADER_HEIGHT = 200

const Header = () => {

  const [offset, setOffset] = React.useState({ x: 0, y: 50 });

  const getOffset = (offset) => {
    if (offset.y <= 0) return true
    return false
  }
  return <View style={styles.header}>
    {/* <TouchableOpacity style={styles.goBack1}>
      <AntDesign name='left' size={25} color={getOffset(offset) ? 'black' : 'white'} />
    </TouchableOpacity>
    <View style={getOffset(offset) ? styles.up_dow : styles.up_dow1}>
      <TouchableOpacity style={{ marginRight: 10, }} onPress={() => console.log("click")}>
        <MaterialIcons name='system-update-alt' size={25} color={getOffset(offset) ? 'black' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 5 }}>
        <Ionicons name='ellipsis-horizontal-outline' size={25} color={getOffset(offset) ? 'black' : 'white'} />
      </TouchableOpacity>
    </View> */}
    <Text style={getOffset(offset) ? styles.textName : styles.textName1}>One piece</Text>
    <Image source={{ uri: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg" }} style={[styles.image, getOffset(offset) ? { opacity: 0.5 } : null]}
      ref={(view) => {
        if (!view) return;
        view.measureInWindow((x, y) => {
          setOffset({ x, y });
        })
      }}
    />

  </View>
}

const Index = () => {
  const [tabName, setTabName] = React.useState();
  const refBtSheet = useRef()

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      minHeaderHeight={70}
      onIndexChange={(tab) => setTabName(tab)}
      TabBarComponent={props => {
        return (
          <View>
            <MaterialTabBar {...props} indicatorStyle={{ backgroundColor: 'red' }} >

            </MaterialTabBar>
            {
              tabName === 1 ?
                <View style={styles.topbar}>
                  <View style={{ justifyContent: "center", flex: 1.5 }}>
                    <Text>{`Cập nhật đến chương 345`}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: 'flex-end' }}>
                    <AntDesign name='appstore-o' size={20} style={{ marginRight: 15, zIndex: 3, }} onPress={() => refBtSheet.current.handleOpenBottomSheet()} />
                    <Ionicons name='swap-vertical' size={25} />
                  </View>
                </View> : null
            }
          </View>
        )
      }
      }
    >
      <Tabs.Tab name="Chi tiết">
        <Tabs.ScrollView style={{ flex: 1 }}  >
          <DetailScreen />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="Chapter" >
        <Tabs.ScrollView >
          <ChapterScreen />

          <BottomSheet height={300} ref={refBtSheet}>
            <View style={{ paddingHorizontal: 20, height: "85%", width: '100%', alignItems: 'center', }}>
              <View style={styles.topViewBtSheeet}>
                <Text >Chương</Text>
                <MaterialIcons name='close' size={25} onPress={() => { refBtSheet.current.handleCloseBottomSheet() }} />
              </View>
              <ScrollView style={{ marginTop: 20 }}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  {listChoosePages()}
                </View>
              </ScrollView>
            </View>
          </BottomSheet>

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
  }

})

export default Index