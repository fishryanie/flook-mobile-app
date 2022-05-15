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
import { StoryGenreData } from '../../Constants/StoryGenreData';

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
            viewItem={styles.viewItem}
            Img={styles.Img} />
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
          widthItem={150}
          heightItem={110}
          widthImg={"100%"}
          heightImg={"78%"}
          heightViewText={"22%"}
          widthViewText={"100%"} />

        <View style={styles.viewText}>
          <Text>{"Thể loại"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <GirdList
          data={StoryGenreData}
          numColumns={4}
          viewItem={styles.viewItemGenre}
          Img={styles.ImgGenre}
          TextTitle={styles.textTitle}
        />

        <View style={styles.viewText}>
          <Text>{"Truyện chat"}</Text>
          <Text style={{ color: COLORS.GREY_01, fontSize: 10 }}>{"Thêm >"}</Text>
        </View>
        <GirdList
          data={DataTruyenChat}
          numColumns={3}
          viewItem={styles.viewItem}
          Img={styles.Img}
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
  },
  viewItem: {
    height: 200,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  },
  Img:
    { width: "100%", height: "80%", resizeMode: "cover", borderRadius: 10 },

  viewItemGenre: {
    height: 110,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  },
  ImgGenre:
    { width: "100%", height: "80%", resizeMode: "cover", borderRadius: 50, },
  textTitle: {
    width: "100%",
    fontSize: 10,
    textAlign: 'center',
    // backgroundColor: "blue"
  }
})


