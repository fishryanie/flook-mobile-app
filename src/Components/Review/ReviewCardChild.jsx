import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReviewCardChild = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        <Text style={styles.nameText}>Sanh: </Text>
        <Text style={styles.reviewText1}>Ninh Tịch vốn là đại tiểu thư của Ninh gia nhưng từ nhỏ bị bế nhầm. 18 tuổi cô được người nhà họ Ninh đón về nhưng chỉ nhận được sự khinh thường, chán ghét.</Text>
      </Text>
      <Text style={styles.textContainer1}>
        <Text style={styles.nameText}>Quân: </Text>
        <Text style={styles.reviewText1}>Tỉnh dậy, cô quay trở lại ngày mình bị cô gái xấu xa Bạch Lạc Lạc bỏ
          thuốc dẫn đến có quan hệ với một người đàn ông lạ mặt.
        </Text>
      </Text>



      <Text style={styles.totalComments}>Tổng 130 câu trả lời</Text>

    </View>
  )
}

export default ReviewCardChild

const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    backgroundColor: "#e6e3e3",
    borderRadius: 5,

  },
  nameText: {
    color: "#bdbdbd",
    fontSize: 16,
    fontWeight: "bold"
  },
  totalComments: {
    color: "red",
    paddingVertical: "4%"
  },
  textContainer: {
    paddingVertical: "1%",
    // backgroundColor: "red"
  },
  textContainer1: {
    paddingVertical: "1%",
    // backgroundColor: "blue"
  },
  reviewText1: {
    color: "black"
  }
})