import React from 'react'
import { View, Text } from 'react-native'
import { OTP } from 'react-native-otp-form'

export default function ForumScreen() {
  return (
    <View>
      <Text>profile</Text>
      <OTP
        codeCount={6}
        containerStyle={{ marginTop: 50 }}
        otpStyles={{ backgroundColor: '#eee' }}
      />
    </View>
  )
}
