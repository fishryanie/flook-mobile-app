// libs
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { width, height } from '../Constants/DimensionsConstants'
import { Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Transition, Transitioning } from 'react-native-reanimated'


export default function TabStack(props) {

  const { label, accessibilityState, onPress } = props
  const focused = accessibilityState.selected;
  const ref = useRef();
  const styles = StyleSheet.create({
    row_tab: {
      flex: focused ? 1.7 : 0.4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: focused ? 'purple' : '#fff',
      marginVertical: 4,
      // padding: width/100,
      marginHorizontal: focused ? width / 15 : 10,
      height: '90%'
    }
  })

  const handelClick = () => {
    // ref.current.animateNextTransition()
    onPress()
    // console.log("click", ref.current)
  }
  const transition = (
    <Transition.Sequence>
      <Transition.Out type='fade' durationMs={10} />
      <Transition.Change interpolation='all' durationMs={250} />
      <Transition.In type='fade' durationMs={10} />
    </Transition.Sequence>
  )


  return (
    <TouchableWithoutFeedback onPress={handelClick} >
      <Transitioning.View style={styles.row_tab} ref={ref} transition={transition} >
        <MaterialCommunityIcons
          size={23}
          color={focused ? 'white' : 'gray'}
          name={
            label === 'Home' ? 'bank-outline'
              : label === 'Classify' ? 'file-table-box-multiple-outline'
                : label === 'Rating' ? 'chart-areaspline'
                  : label === 'Notification' ? 'bell-ring-outline'
                    : label === 'Forum' ? 'chat-plus-outline'
                      : null
          }
        />
        {focused && <Text style={{ color: 'white', fontWeight: '600', marginLeft: 4 }}> {label} </Text>}
      </Transitioning.View>
    </TouchableWithoutFeedback>
  )
}