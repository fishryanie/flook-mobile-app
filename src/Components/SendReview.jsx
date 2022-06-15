import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import BottomSheet from '../Components/BottomSheet'
import { EvilIcons } from 'react-native-vector-icons'

import { ScrollView } from 'react-native-gesture-handler'
import Rating from './Review/Rating'


const SendReview = forwardRef((props, ref) => {
  const screenHeight = Dimensions.get('screen').height;
  const childRef = useRef()
  useImperativeHandle(ref, () => ({
    handleOpen() {
      childRef.current.handleOpenBottomSheet()
    },
  }));


  return (

    <BottomSheet ref={childRef} height={screenHeight * 0.4}>
      <View style={styles.containerView}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => childRef.current.handleCloseBottomSheet()}>
            <Text>Hủy</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20 }}>Đánh giá</Text>

          <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 3, backgroundColor: "red", borderRadius: 20 }} onPress={() => childRef.current.handleCloseBottomSheet()}>
            <Text style={{ color: "white" }}>Gửi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rating_view}>
          <Rating onClick={true} starSize={35} />
        </View>
        <View style={{
          height: 1, borderWidth: 1, borderColor: "#f5f5f5", width: "100%",
          marginTop: 10
        }} />
        <View style={styles.text_input_view}>
          <TextInput placeholder='Viết đánh giá' />
        </View>

      </View>

    </BottomSheet>

  )
})

export default SendReview

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // backgroundColor: "#f0efed",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center"
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },

  rating_view: {
    marginTop: 20,
    width: "70%"
  },
  text_input_view: {
    marginTop: 10,
    paddingHorizontal: 15,
    width: "100%",
    height: "50%",
    // backgroundColor: "red"
  }
})