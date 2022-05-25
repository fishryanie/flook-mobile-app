// // libs
// import React, { useRef  } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
// import { width, height } from '../Constants/DimensionsConstants'
// import { Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
// import { MaterialCommunityIcons } from 'react-native-vector-icons'
// import { Transition, Transitioning } from 'react-native-reanimated'


// export default function TabStack (props) {

//   const { label, accessibilityState, onPress } = props
//   const focused = accessibilityState.selected;

//   // const styles = StyleSheet.create({
//   //   row_tab: {
//   //     flex: focused ? 1 : 0,
//   //     flexDirection: 'column',
//   //     alignItems: 'center',
//   //     justifyContent: 'center',
//   //     borderRadius: 20,
//   //     backgroundColor: focused ? 'purple' : '#fff',
//   //     marginVertical: 10,
//   //     // padding: width/100,
//   //     marginHorizontal: focused ? width/9 : 10,
//   //     height:'90%'
//   //   }
//   // })

//   // const handelClick = () => {
//   //   ref.current.animateNextTransition()
//   //   onPress()
//   // }
//   // const transition = (
//   //   <Transition.Sequence>
//   //     <Transition.Out type = 'fade' durationMs = {10} />
//   //     <Transition.Change interpolation='all' durationMs={250} />
//   //     <Transition.In type = 'fade' durationMs = {10} />
//   //   </Transition.Sequence>
//   // )

//   // const ref = useRef();
//   // return (
//     // <TouchableWithoutFeedback onPress={handelClick} >
//     //   <Transitioning.View style={styles.row_tab} ref={ref} transition={transition} >
//     //     <MaterialCommunityIcons 
//     //       size = {23}
//     //       color = {focused ? 'white' : 'gray'}
//     //       name = {
//     //         label === 'Truyện Tranh' ? 'movie-roll' 
//     //         : label === 'Tủ Sách' ? 'newspaper-variant-multiple-outline' 
//     //         : label === 'Tiểu Thuyết' ? 'popcorn' 
//     //         : label === 'Forum' ? 'bell-ring-outline' 
//     //         : label === 'Tôi' ? 'account-circle' 
//     //         : null
//     //       }
//     //     />
//     //     { focused && <Text style = {{color: 'white', fontWeight: '600', marginLeft: 4,}}> { label } </Text>}
//     //   </Transitioning.View>
//     // </TouchableWithoutFeedback>

//   //   <Tab.Navigator
//   //   initialRouteName={manga}
//   //   screenOptions={({ route }) => ({
//   //     tabBarIcon: ({ focused, color, size }) => {
//   //       let iconName;
//   //       let rn = route.name;

//   //       if (rn === manga){
//   //         iconName = focused ? 'home' : 'home-outline';
//   //       }else if (rn === novel){
//   //         iconName = focused ? 'book-open' : 'book-open-outline';
//   //       }else if (rn === forum){
//   //         iconName = focused ? 'pinwheel' : 'pinwheel-outline';
//   //       }else if (rn === bookcase){
//   //         iconName = focused ? 'bookmark-minus' : 'bookmark-minus-outline';
//   //       }else{
//   //         iconName = focused ? 'emoticon' : 'emoticon-outline';
//   //       }
//   //       return <MaterialCommunityIcons name={iconName} size={size} color={color} />
//   //       },
//   //   })}
//   //   tabBarOptions={{
//   //     activeTintColor: 'tomato',
//   //     inactiveTintColor: 'gray',
//   //     labelStyle: { paddingBottom: 10, fontSize: 10},
//   //     style: {padding: 10, height: 70}
//   //   }}
//   //   >
      
//   //     <Tab.Screen name={manga} component={ComicScreen}/>
//   //     <Tab.Screen name={novel} component={NovelScreen}/>
//   //     <Tab.Screen name={forum} component={ForumScreen}/>
//   //     <Tab.Screen name={bookcase} component={LibraryScreen}/>
//   //     <Tab.Screen name={profile} component={ProfileScreen}/>
        
//   //  </Tab.Navigator>
//   // )
// }