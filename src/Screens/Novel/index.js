import { View, Text, Button } from 'react-native'
import React from 'react'

const NovelScreen = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>NovelScreen</Text>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default NovelScreen