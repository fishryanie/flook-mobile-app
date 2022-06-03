import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenName'

const ComicScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>ComicScreen</Text>
      <Button
        title='Go to Detail!'
        onPress={() => navigation.navigate(ScreenName.detailScreen) }
      />
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default ComicScreen