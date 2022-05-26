import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenNameConstants'

const RankingScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>RankingScreen</Text>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default RankingScreen