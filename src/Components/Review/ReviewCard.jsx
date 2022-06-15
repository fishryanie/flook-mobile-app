import { StyleSheet, Text, View, Demensions, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
  EvilIcons, Ionicons
} from 'react-native-vector-icons'
import ReviewCardChild from './ReviewCardChild';
import Rating from './Rating';
import { TouchableFeedback } from '../TouchableItem'

const ReviewCard = ({ onOpenBottomSheet, children, disable }) => {

  return (

    <View style={styles.container}>
      <TouchableFeedback disable={disable} onpress={onOpenBottomSheet} >
        <View style={styles.topView}>
          <View style={styles.info}>
            <Image style={styles.image} source={{ uri: "https://bepdaily.com/wp-content/uploads/2021/12/avatar-gai-xinh-41.jpg" }} />
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Phước Sanh</Text>
              <Text style={styles.vipText}>Vip</Text>
            </View>
          </View>
          <View style={styles.rating}>
            {!disable ? <Rating onClick={false} /> : null}
          </View>
        </View>
        <View style={styles.centerView}>
          <View style={styles.myReview}>
            <Text>Mọi khi thường đề cử mọi người list truyện hay đã hoàn theo thể loại như top truyện xuyên không hay hoặc list truyện sư đồ luyến… Nhưng hôm nay mình sẽ giới thiệu list ngôn tình hay hoàn mà mình tâm đắc tổng hợp từ các thể loại. Mối cuốn truyện trong bài viết này có thể không cùng thể loại, không phải tất cả HE nhưng đều là những cuốn sách hay nhất, ấn tượng nhất do chính bạn đọc bình chọn.</Text>
          </View>
        </View>
        <View style={styles.childrenView}>
          {children}
        </View>
        <View style={styles.bottomView}>
          <View style={styles.item1_In_Bottom}>
            <Text>04/06</Text>
          </View>

          <View style={styles.item2_In_Bottom}>
            <Ionicons style={{ flex: 1 }} name="ellipsis-vertical-sharp" size={20} />
            <View style={styles.likeOrCommentView}>
              <Ionicons name="ios-chatbox-ellipses-outline" size={20} />
              <Text style={{ marginLeft: 5 }}>130</Text>
            </View>
            <View style={styles.likeOrCommentView}>
              <EvilIcons name="like" size={25} />
              <Text>20</Text>
            </View>
          </View>

        </View>
      </TouchableFeedback>
    </View>

  )
}

export default ReviewCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red"
  },
  topView: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    height: 60,

  },
  info: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "green"
  },
  image: {
    // flex: 1,
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: "cover"
  },
  titleView: {
    flex: 2,
    paddingLeft: 10
  },
  titleText: {
    // color: "white",
    fontSize: 15,
  },
  vipText: {
    marginTop: 5,
    color: "white",
    borderRadius: 10,
    fontSize: 10,
    textAlign: "center",
    width: 25,
    backgroundColor: "#77b5fc"
  },

  rating: {
    paddingHorizontal: 30,
    flex: 0.6,
    // backgroundColor: "red",
    justifyContent: "center",

  },
  centerView: {
    paddingLeft: "12%",
  },
  childrenView: {
    paddingLeft: "12%",
    marginTop: 20,
    width: "100%",
    // backgroundColor: "green"
  },
  bottomView: {
    flexDirection: "row",
    paddingLeft: "12%",
    paddingVertical: "4%"
  },
  item1_In_Bottom: {
    // backgroundColor: "blue",
    flex: 1,

  },
  item2_In_Bottom: {
    flex: 1,
    flexDirection: "row",
  },
  likeOrCommentView: {

    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue"
  }

})