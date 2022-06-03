import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenName'

const PointMeScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>PointMeScreen</Text>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default PointMeScreen