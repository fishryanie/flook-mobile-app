import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import BottomSheet from '../BottomSheet'
import { EvilIcons } from 'react-native-vector-icons'

import ReviewCard from './ReviewCard'
import { ScrollView } from 'react-native-gesture-handler'

import BookCard from './BookCard'
const ReviewDetail = forwardRef((props, ref) => {
  const screenHeight = Dimensions.get('screen').height;
  const childRef = useRef()
  useImperativeHandle(ref, () => ({
    handleOpen() {
      childRef.current.handleOpenBottomSheet()
    },
  }));


  return (

    <BottomSheet ref={childRef} height={screenHeight * 0.9}>
      <ScrollView>
        <View style={styles.containerView}>
          <View style={styles.topView}>
            <Text style={styles.detailText}>Chi tiết Review</Text>
            <TouchableOpacity style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }} onPress={() => childRef.current.handleCloseBottomSheet()}>
              <EvilIcons name="close-o" size={40} color="#737375" />
            </TouchableOpacity>
          </View>
          <ReviewCard children={<BookCard />} disable={true} />
          <View style={{ width: "100%", height: 10, backgroundColor: "#dedddc" }}></View>
          <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>Tổng số 8 câu trả lời</Text>
          <ReviewCard disable={true} />
        </View>
      </ScrollView>
    </BottomSheet>

  )
})

export default ReviewDetail

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#f0efed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  topView: {
    paddingVertical: 10,
    flexDirection: "row",

  },
  detailText: {
    flex: 2.5,
    // backgroundColor: "red",
    textAlign: "center",
    marginLeft: 30,
    fontSize: 20
  }
})