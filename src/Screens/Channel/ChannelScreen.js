import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenNameConstants'

const ChannelScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>ChannelScreen</Text>
      <Button
        title='Filter'
        onPress={() => navigation.navigate(ScreenName.filterScreen)}
      />
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default ChannelScreen