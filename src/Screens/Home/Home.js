import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../Components/HeaderComponent';
import { useDispatch } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native'
import COLORS from '../../Constants/ColorConstants'
import SearchComponent from '../../Components/SearchComponent';
import BannerCarousel from '../../Components/BannerCarousel'
import HorizontalListBook from '../../Components/FlatList/HorizontalListBook';
import GirdList from '../../Components/FlatList/GirdList'
import DeXuatManga from '../../../Data_Mobile/DeXuatManga.json'
import DataTruyenChat from '../../../Data_Mobile/DataTruyenChat.json'

export default function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1 }}>
      <HeaderComponent
        // dataSearch={data}
        titleSearch='Search movie'
      />
      <ScrollView>

        <BannerCarousel />

        <View style={styles.viewText}>
          <Text>{"Lịch sử đọc"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>

        {<HorizontalListBook
          widthItem={80}
          heightItem={120}
          widthImg={"100%"}
          heightImg={"85%"}
          heightViewText={"15%"}
          widthViewText={"100%"} />
        }

        <View style={styles.viewText}>
          <Text>{"Top lượt xem"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <HorizontalListBook
          heightFlatlist={170}
          widthItem={110}
          heightItem={170}
          widthImg={"100%"}
          heightImg={"78%"}
          heightViewText={"22%"}
          widthViewText={"100%"} />


        <View style={styles.viewText}>
          <Text>{"Đề xuất"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>

        <View>
          <GirdList
            data={DeXuatManga}
            heightImage={"80%"}
            heightItem={200} />
        </View>

        <View style={styles.viewText}>
          <Text>{"Truyện mới"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <HorizontalListBook
          heightFlatlist={170}
          widthItem={110}
          heightItem={170}
          widthImg={"100%"}
          heightImg={"78%"}
          heightViewText={"22%"}
          widthViewText={"100%"} />

        <View style={styles.viewText}>
          <Text>{"Đang cập nhật"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <HorizontalListBook
          heightFlatlist={110}
          widthItem={170}
          heightItem={110}
          widthImg={"100%"}
          heightImg={"78%"}
          heightViewText={"22%"}
          widthViewText={"100%"} />

        <View style={styles.viewText}>
          <Text>{"Truyện chat"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <GirdList
          data={DataTruyenChat}
          numColumns={3}

          heightImage={"80%"}
          heightItem={200}
        />

      </ScrollView>


    </View>
  )
}
const styles = StyleSheet.create({
  viewText: {
    marginTop: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "2%"
  }
})


