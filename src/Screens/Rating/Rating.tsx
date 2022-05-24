import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DetailBook from '../../Components/DetailBook'
import DetailsBook from '../../Components/DetailsBook'
import DetailBook1 from '../../Components/DetailBook1'
import DetailBook2 from '../../Components/DetailBook2'
import Test2 from '../../Components/Test2'
import Test3 from '../../Components/Test3'

const book ={
  title:"One piece",
  url:"https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg"
}
const RatingScreen = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{flex:1, marginTop:insets.top , backgroundColor:'blue'}}>
      {/* <HeaderComponent/>
      <ListSystemCinema /> */}
      {/* <DetailsBook book={book}/> */}
      <DetailBook book={book}/>
      {/* <DetailBook1 book={book}/> */}
      {/* <DetailBook2 /> */}
      {/* <Test2/> */}
      {/* {<Test3/>} */}

    </View>
  )
}

export default RatingScreen
