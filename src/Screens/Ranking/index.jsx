import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DetailBook from '../../Screens/DetailBook/DetailBook'

const book = {
  title: "One piece",
  url: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg"
}

const RankingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets()


  return (
    <View style={{ flex: 1, marginTop: insets.top, paddingHorizontal: 10 }}>



      <DetailBook book={book} />


      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default RankingScreen