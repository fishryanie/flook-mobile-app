import { View, Text, Button } from 'react-native'
import React from 'react'

const ChatStoryScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>StoryChatScreen</Text>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default ChatStoryScreen