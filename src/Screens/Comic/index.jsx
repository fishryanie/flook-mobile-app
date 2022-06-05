import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import BannerCarousel from '../../Components/BannerCarousel';
import HorizontalListBook from '../../Components/FlatList/HorizontalListBook';
import GirdList from '../../Components/FlatList/GirdList';
import DeXuatManga from '../../../Data_Mobile/DeXuatManga.json';
import DataTruyenChat from '../../../Data_Mobile/DataTruyenChat.json';

const StoryGenreData = [
  { _id: "1", title: "Huyền Huyễn", image:"https://i.pinimg.com/736x/78/54/57/7854578882c0f62cb740757ea80d6407.jpg" }, 
  { _id: "2", title: "Mạo Hiểm",image:"https://blog.hamtruyentranh.com/wp-content/uploads/2020/07/anime-phieu-luu-phap-thuat-hap-dan-majo-no-tabitabi-tung-trailer-dau-tien.jpg" },
  { _id: "3", title: "Trường Học",image:"https://s199.imacdn.com/ta/2017/02/10/6434f59cf4f29ee3_4362f2af85393b6e_21150514866906003154671.jpg"  },
  { _id: "4", title: "Tổng Tài", image:"https://suna.vn/wp-content/uploads/2022/03/Danh-sach-List-truyen-ngon-tinh-nam-chinh-lam-giam-doc-tong-tai-sieu-hay.jpg" },
  { _id: "5", title: "Đam Mỹ", image:"https://chuuniotaku.com/wp-content/uploads/2020/06/junjou-romantica-banner.jpg" },
  { _id: "6", title: "Nữ Cường",image:"https://img5.thuthuatphanmem.vn/uploads/2021/11/23/top-20-truyen-xuyen-khong-nu-cuong-hay-nhat_024406091.jpg"  },
  { _id: "7", title: "Kinh Dị",image:"https://i.pinimg.com/474x/31/3b/b6/313bb6d2ccf9c55d865b34b263f820fc--female-characters-chara-undertale-art.jpg"  },
  { _id: "8", title: "Hài Hước",image:"http://images6.fanpop.com/image/answers/2953000/2953997_1345168413638.15res_220_212.jpg"  }
]

export default function ComicScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <BannerCarousel/>

        <View style={styles.viewText}>
          <Text>{'Lịch sử đọc'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>

        {<HorizontalListBook widthItem={80} heightItem={120} widthImg={'100%'} heightImg={'85%'} heightViewText={'15%'} widthViewText={'100%'} />}

        <View style={styles.viewText}>
          <Text>{'Top lượt xem'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>
        <HorizontalListBook heightFlatlist={170} widthItem={110} heightItem={170} widthImg={'100%'} heightImg={'78%'} heightViewText={'22%'} widthViewText={'100%'} />

        <View style={styles.viewText}>
          <Text>{'Đề xuất'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>

        <View>
          <GirdList data={DeXuatManga} viewItem={styles.viewItem} Img={styles.Img} />
        </View>

        <View style={styles.viewText}>
          <Text>{'Truyện mới'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>
        <HorizontalListBook heightFlatlist={170} widthItem={110} heightItem={170} widthImg={'100%'} heightImg={'78%'} heightViewText={'22%'} widthViewText={'100%'} />

        <View style={styles.viewText}>
          <Text>{'Đang cập nhật'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>
        <HorizontalListBook heightFlatlist={110} widthItem={150} heightItem={110} widthImg={'100%'} heightImg={'78%'} heightViewText={'22%'} widthViewText={'100%'} />

        <View style={styles.viewText}>
          <Text>{'Thể loại'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>
        <GirdList data={StoryGenreData} numColumns={4} viewItem={styles.viewItemGenre} Img={styles.ImgGenre} TextTitle={styles.textTitle} />

        <View style={styles.viewText}>
          <Text>{'Truyện chat'}</Text>
          <Text style={{ color: 'black', fontSize: 10 }}>{'Thêm >'}</Text>
        </View>
        <GirdList data={DataTruyenChat} numColumns={3} viewItem={styles.viewItem} Img={styles.Img} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  viewText: {
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  viewItem: {
    height: 200,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    // backgroundColor: "blue"
  },
  Img: { width: '100%', height: '80%', resizeMode: 'cover', borderRadius: 10 },

  viewItemGenre: {
    height: 110,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    // backgroundColor: "blue"
  },
  ImgGenre: { width: '100%', height: '80%', resizeMode: 'cover', borderRadius: 50 },
  textTitle: {
    width: '100%',
    fontSize: 10,
    textAlign: 'center',
    // backgroundColor: "blue"
  },
});
