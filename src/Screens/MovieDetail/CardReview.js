import React from 'react'
import UserAvatar from "@muhzi/react-native-user-avatar";

import { View, StyleSheet, Text } from 'react-native'

export default function CardReview(props) {
  const { item, index } = props

  return (
    <View style={{ backgroundColor: '#141520', padding: 20, width: 350, borderRadius: 15, marginRight: 12, marginLeft: index === 0 ? 5 : 0 }} key={index}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View style={{ flex: 1 }}>
          <UserAvatar
            size={50}
            active

            src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg"
          />
        </View>
        <View style={{ flex: 3, paddingLeft: 20 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Trần Thị Bảo Châu</Text>
          <Text style={{ color: '#fff' }}>15 phút trước</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 50 }}>
          <Text style={{ fontSize: 20, color: 'green', textAlign: 'center' }}>8.5</Text>
          <Text style={{ fontSize: 6, textAlign: 'center' }}>⭐⭐⭐⭐⭐</Text>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi in quam fugiat deserunt ut architecto sapiente dolorem reprehenderit. Modi quae facere explicabo quibusdam officia odio. Exercitationem eum magnam totam.
        </Text>
      </View>
    </View>
  )
}
