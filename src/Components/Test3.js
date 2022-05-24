import { useEffect, useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, ScrollView, StyleSheet, View, Animated, Text, ImageBackground, Image, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import TopTab from '../Components/TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]

const Test3 = () => {

  const insets = useSafeAreaInsets()
  console.log("Test 3")
  const [valueAnimateHeaderHeight, setValueAnimateHeaderHeight] = useState()
  const [isMinHeight, setIsMinHeight] = useState()
  const dummyData = [
    'Text',
    'Input',
    'Button',
    'Card',
    'CheckBox',
    'Divider',
    'Header',
    'List Item',
    'Pricing',
    'Rating',
    'Search Bar',
    'Slider',
    'Tile',
    'Icon',
    'Avatar',
  ];
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 170;
  //Max Height of the Header
  const Header_Minimum_Height = 70;
  //Min Height of the Header

  const animateHeaderBackgroundColor =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height],
      outputRange: ['white', 'white',],
      extrapolate: 'clamp',
    });

  const animateHeaderHeight =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });


  useEffect(() => {
    console.log("uf")
    // if (valueAnimateHeaderHeight == 70) {
    //   console.log("animateHeaderHeight70")

    //   setIsMinHeight(true)
    // } else {
    //   setIsMinHeight(false)

    // }
  }, [animateHeaderHeight.__getValue()])

  console.log(animateHeaderHeight.__getValue())
  return (
    <SafeAreaView style={[styles.container, { marginTop: -insets.top }]}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,

            },

          ]}>
          <Image style={[styles.image,]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIZcAh5Wr83DKYuXeZ6Tk3ZuSgdlTuAEMqQ&usqp=CAU" }} />


        </Animated.View>
        <ScrollView
          stickyHeaderHiddenOnScroll={true}
          // onScrollEndDrag={() => {
          //   setValueAnimateHeaderHeight(animateHeaderHeight.__getValue())
          // }
          // }
          scrollEventThrottle={40}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: AnimatedHeaderValue }
              }
            }],
            { useNativeDriver: false },

          )}>
          {/* Put all your Component here inside the ScrollView */}
          {/* {dummyData.map((item, index) => (
            <Text style={styles.textStyle} key={index}>
              {item}
            </Text>
          ))} */}
          <View style={{ flex: 1, height: 2000 }}>
            <TopTab listTopTab={listTopTab2}
              ChildrenIcon1={null}
              ChildrenIcon2={null}
            />
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Test3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    zIndex: 3
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },
  image: { width: "100%", height: "100%", resizeMode: "cover", zIndex: -1, position: "absolute" }
});