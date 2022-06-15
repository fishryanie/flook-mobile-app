import { StyleSheet, Text, View, TouchableOpacity, Dimensions, } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { FontAwesome, Feather, MaterialCommunityIcons } from 'react-native-vector-icons'
import { Avatar } from 'react-native-elements'
import { useDispatch } from 'react-redux'

import color from '../../Constants/Color'
import actionTypes from '../../Store/Actions/constants'
import ViewMoreTextComponent from '../../Components/ViewMoreTextComponent'
import HorizontalList from '../../Components/FlatList/HorizontalList'
import ReviewCard from '../../Components/Review/ReviewCard'
import ReviewDetail from '../../Components/Review/ReviewDetail'
import ReviewCardChild from '../../Components/Review/ReviewCardChild'
import SendReview from '../../Components/SendReview'

const widthScreen = Dimensions.get("window").width
const text = "Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos."

const filterType = [{ type: "Dị năng" }, { type: "Bàn tay vàng" }, { type: "Anh hùng cứu mỹ nhân" }, { type: "Kinh dị" }]
const Detail = () => {
  const refReviewDetail = useRef()
  const handleOpenReviewDetail = () => {
    refReviewDetail.current.handleOpen()
  }
  const refSendReview = useRef()
  const handleOpenSendReview = () => {
    refSendReview.current.handleOpen()
  }





  return (

    <View style={{ backgroundColor: "white", flex: 1, width: "100%" }}>
      <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
        <View style={styles.rating}>
          <TouchableOpacity style={styles.itemRating} onPress={handleOpenSendReview}>
            <View style={styles.textRatingView}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16 }}>4.5</Text>
                <FontAwesome name="star" size={20} color="#f5e02a" style={{ marginLeft: 5 }} />
              </View>
              <Text style={{ fontSize: 10 }}>Đánh giá</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.verticleLine}></View>
          <View style={styles.itemRating}>
            <View style={styles.textRatingView}>
              <Text style={{ fontSize: 16 }}>1,34M</Text>
              <Text style={{ fontSize: 10 }}>Lượt xem</Text>
            </View>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.itemRating}>
            <View style={styles.textRatingView}>
              <Text style={{ fontSize: 16 }}>8,8K</Text>
              <Text style={{ fontSize: 10 }}>Số like</Text>
            </View>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.itemRating}>
            <View style={styles.textRatingView}>
              <Text style={{ fontSize: 16 }}>9,18K</Text>
              <Text style={{ fontSize: 10 }}>Lượt theo dõi</Text>
            </View>
          </View>
        </View>
        {/* End View Rating */}

      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 20 }} >
        <ViewMoreTextComponent text={text} />
      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 20 }} >
        <HorizontalList />
      </View>

      <View style={styles.avatarView}>
        <Avatar size="medium" rounded source={{ uri: "https://i.pinimg.com/736x/e9/d6/aa/e9d6aad1ac43fdea81afe2f40caae49a.jpg" }} />
        <Text style={{ marginLeft: 10, fontWeight: '900' }}>phuoc sanh</Text>
      </View>

      <View style={styles.gift_fan_vote_View}>
        <View style={styles.item_gift_fan_voteView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="gift" size={25} color="#f7c00a" />
            <Text style={{ marginLeft: 15 }}>2742 Quà</Text>
          </View>
          <Text style={styles.text_item_gift_fan_voteView}>TẶNG</Text>
        </View>

        <View style={styles.item_gift_fan_voteView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="certificate" size={27} color="#ff3b14" />
            <Text style={{ marginLeft: 15 }}>476 Vote</Text>
          </View>
          <Text style={styles.text_item_gift_fan_voteView}>TẶNG</Text>
        </View>
      </View>

      <View style={{ height: 10, backgroundColor: color.grey[50], marginTop: 20, marginBottom: 20 }} />

      <View style={styles.comment_outstanding}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Bình luận nổi bật</Text>
        <Text style={{ fontSize: 10 }}>{"Tổng số 1390 câu trả lời >"}</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ReviewCard onOpenBottomSheet={handleOpenReviewDetail} children={<ReviewCardChild />} disable={false} />
        <ReviewCard />
        <ReviewDetail ref={refReviewDetail} />
      </View>

      <SendReview ref={refSendReview} />

      <View style={{ height: 2, backgroundColor: color.grey[50] }}></View>

      <View style={{ paddingVertical: 10, alignItems: 'center' }}>
        <Text style={{ color: "red" }}>{"Tất cả bình luận(198)"}</Text>
      </View>

    </View>

  )
}

export default Detail

const styles = StyleSheet.create({

  rating: {
    flexDirection: "row",
    width: widthScreen * 0.93,
    alignItems: "center",
    backgroundColor: color.grey[50],
    borderRadius: 10,
  },
  verticleLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#909090',
  },
  itemRating: {
    width: (widthScreen * 0.93) / 4,
    height: 50,
    justifyContent: "center",

  },
  textRatingView: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red"
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  gift_fan_vote_View: {
    width: widthScreen,
    // backgroundColor: "blue",
    paddingHorizontal: 15
  },
  item_gift_fan_voteView: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text_item_gift_fan_voteView: {
    color: "white",
    borderRadius: 20,
    backgroundColor: '#f58905',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12
  },
  comment_outstanding: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: 'center'
  }

})