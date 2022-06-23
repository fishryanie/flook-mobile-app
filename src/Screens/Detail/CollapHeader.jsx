import React, { useRef, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Segmented, MaterialTabBar } from 'react-native-collapsible-segmented-view'
import { AntDesign, Ionicons } from 'react-native-vector-icons'
import Detail from './DetailScreen'
import Chapter from './ChapterScreen'


const Header = () => {
  return (
    <View style={styles.box} pointerEvents="box-none">
      <Image source={{ uri: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg" }} style={{ width: "100%", height: '100%', resizeMode: 'cover' }} />
    </View>
  )
}

const CollapHeader = () => {
  const ref = useRef()

  const buildSegmentDetail = () => {
    const Segment = () => {
      return (
        <View>
          <Segmented.ScrollView >
            <Detail />
          </Segmented.ScrollView>
        </View>
      )
    }
    return Segment
  }

  const buildSegmentChapter = (ref) => {
    const Segment = () => {
      return (
        <View>
          <View style={styles.topbar}>
            <View style={{ justifyContent: "center", flex: 1.5 }}>
              <Text>{`Cập nhật đến chương 345`}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: 'flex-end' }}>
              <AntDesign name='appstore-o' size={20} style={{ marginRight: 15 }} onPress={() => handleOpenBottomSheet()} />
              <Ionicons name='swap-vertical' size={25} />
            </View>
          </View>
          <Segmented.ScrollView >
            <Chapter ref={ref} />
          </Segmented.ScrollView>
        </View>
      )
    }
    return Segment
  }

  const SegmentChapter = buildSegmentChapter(ref)
  const SegmentDetail = buildSegmentDetail()
  return (
    <Segmented.View header={Header}
      control={(props) => <MaterialTabBar {...props} indicatorStyle={{ backgroundColor: "#7105ab" }} />}
    >
      <Segmented.Segment label="Detail" component={SegmentDetail} />
      <Segmented.Segment label="Chapter" component={SegmentChapter} />
    </Segmented.View>
  )
}






const styles = StyleSheet.create({
  box: {
    height: 200,
    width: '100%',
  },
  topbar: {
    marginTop: 40,
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 15
    // backgroundColor: "red"
  },
})

export default CollapHeader