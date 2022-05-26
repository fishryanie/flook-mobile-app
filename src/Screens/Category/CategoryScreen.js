import { View, Text, Button } from 'react-native'
import React from 'react'
import {ScreenName} from '../../Constants/ScreenNameConstants'

const CategoryScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>CategoryScreen</Text>
      <Button
        title='Go to Comic'
        onPress={() => navigation.navigate(ScreenName.comicScreen)}
      />
      <Button
        title='Story Chat'
        onPress={() => navigation.navigate(ScreenName.storyChatScreen)}
      />
      <Button
        title='Novel'
        onPress={() => navigation.navigate(ScreenName.novelScreen)}
      />
      <Button
        title='Channel'
        onPress={() => navigation.navigate(ScreenName.channelScreen)}
      />
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default CategoryScreen