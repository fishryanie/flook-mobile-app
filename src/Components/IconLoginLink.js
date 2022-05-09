import React from 'react'
import Hr from 'react-native-hr-component'
import { Icon } from 'react-native-gradient-icon';
import { View } from 'react-native'
export default function IconLoginLink(props) {
  return (
    <React.Fragment>
      <Hr text="OR" fontSize={20} lineColor="#7D7E84" textPadding={15} hrStyles={{ padding: 20 }} />
      <View style={props.style}>
        <Icon size={20} type='font-awesome' mode='radial' color="purple" name="facebook-f" raised />
        <Icon size={20} type='font-awesome' mode='radial' color="purple" name="google-plus" raised />
        <Icon size={20} type='font-awesome' mode='radial' color="purple" name="instagram" raised />
        <Icon size={20} type='font-awesome' mode='radial' color="purple" name="github" raised />
        <Icon size={20} type='font-awesome' mode='radial' color="purple" name="twitter" raised />
      </View>
    </React.Fragment>
  )
}
