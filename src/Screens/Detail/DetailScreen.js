import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenNameConstants'

const DetailScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>DetailScreen</Text>
      <Button
        title='Go to Chapter!'
        onPress={() => navigation.navigate(ScreenName.chapterScreen)}
      />
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default DetailScreen