import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, Animated, useWindowDimensions } from 'react-native'
import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import AnimatedHeader from 'react-native-animated-header';
import { AntDesign } from 'react-native-vector-icons'
import TopTab from './TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]

const getListItems = count => {
  const items = [];
  let i = 0;

  while (i < count) {
    i++;
    items.push(
      <View key={i} style={{ backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 64 }}>
        <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
      </View>
    );
  }

  return items;
};

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: Detail,
  second: Chapter,
});

const DetailBook = ({ book }) => {
  console.log("DetailBook")
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);


  return (
    <AnimatedHeader
      style={{ flex: 1, zIndex: 1, positon: "relative", backgroundColor: "red" }}
      backText='Back'
      onBackPress={() => console.log("on back1")}
      title={book.title}
      renderLeft={() => (<AntDesign name='left' size={20} />)}

      renderRight={() => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => console.log("click")}>
            <AntDesign name='left' size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='left' size={20} />
          </TouchableOpacity>
        </View>

      )}
      backStyle={{ marginLeft: 10 }}
      backTextStyle={{ fontSize: 14, color: '#000' }}
      titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
      headerMaxHeight={200}
      // imageSource={() => <Image source={{ uri: book.url }} style={{ height: MAX_HEIGHT, width: Dimensions.get('window').width }} />}
      imageSource={{ uri: `${book.url}` }}
      toolbarColor='#FFF'

      disabled={false}
    >
      <ScrollView style={{ flex: 1 }} >
        {/* <TopTab listTopTab={listTopTab2}
          ChildrenIcon1={null}
          ChildrenIcon2={null}
        /> */}

        {/* <Detail /> */}
        {/* {getListItems(20)} */}
        {/* <View style={{ flex: 1 }}>
          <Tab.Navigator>
            <Tab.Screen name="Detail" component={Detail} />
            <Tab.Screen name="Chapter" component={Chapter} />
          </Tab.Navigator>
        </View> */}
        <View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>


      </ScrollView>


    </AnimatedHeader>


  );
}


export default DetailBook

const styles = StyleSheet.create({})