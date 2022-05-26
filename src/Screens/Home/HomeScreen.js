import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenNameConstants'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>HomeScreen</Text>
      <Button
        title='Go to Detail!'
        onPress={() => navigation.navigate(ScreenName.detailScreen) }
      />
      <Button
        title='Go to Ranking!'
        onPress={() => navigation.navigate(ScreenName.rankingScreen) }
      />
      <Button
        title='Go to Category!'
        onPress={() => navigation.navigate(ScreenName.categoryScreen) }
      />
      <Button
        title='Go to PointMe!'
        onPress={() => navigation.navigate(ScreenName.pointMeScreen) }
      />
      <Button
        title='Go to Daily!'
        onPress={() => navigation.navigate(ScreenName.dailyScreen) }
      />
    </View>
  )
}

export default HomeScreen