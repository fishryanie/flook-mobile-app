import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewMoreText from 'react-native-view-more-text';
import { FontAwesome } from 'react-native-vector-icons'

const ViewMoreTextComponent = ({ text, style }) => {
  // console.log("style", style)
  const renderViewMore = (onPress) => {
    return (
      <View style={{ flex: 1, alignItems: "center", }}>
        <FontAwesome onPress={onPress} name="angle-down" size={25} />
      </View>

    )
  }
  const renderViewLess = (onPress) => {
    return (
      <View style={{ flex: 1, alignItems: "center", }}>
        <FontAwesome onPress={onPress} name="angle-up" size={25} />
      </View>
    )
  }
  return (
    <ViewMoreText
      numberOfLines={3}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}
      textStyle={[{ textAlign: "left" }, style]}
    >
      <Text>
        {text}
      </Text>
    </ViewMoreText>
  )
}

export default ViewMoreTextComponent

const styles = StyleSheet.create({})