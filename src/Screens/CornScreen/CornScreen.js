import React from 'react'
import ListSystemCinema from '../ShowTimeScreen/components/ListSystemCinema'
import { View } from 'react-native'
import HeaderComponent from '../../Components/HeaderComponent'






const CornScreen = () => {
  return (
    <View style ={{flex:1}}>
      <HeaderComponent/>
      <ListSystemCinema />
    </View>
  )
}

export default CornScreen
