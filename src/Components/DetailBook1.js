import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native'
import React from 'react'
import TopTab from '../Components/TopTap'
import Detail from '../Screens/DetailBook/Detail';
import Chapter from '../Screens/DetailBook/Chapter';
import { ScrollView } from 'react-native-gesture-handler';
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Detail }, { _id: "ahdkfahkfd", title: "Chapter", component: Chapter },]
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 50


const MAX_HEIGHT = 350
const DetailBook1 = ({ book }) => {
  console.log("Book1")
  return (
    <View style={styles.container}>
      {/* <ImageHeaderScrollView

        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        renderHeader={() => (<Image source={{ uri: book.url }} style={styles.image} />)}
      >
        <TriggeringView style={styles.section}>
          <ScrollView style={{ width: "100%", height: "100%", backgroundColor: 'red' }}>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Detail} />
              <Tab.Screen name="Settings" component={Chapter} />
            </Tab.Navigator>
          </ScrollView>
          <View>
            <Text>aaaaaaaaaaaaaa</Text>
          </View>
        </TriggeringView>


        <Detail />
      </ImageHeaderScrollView> */}
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={MIN_HEIGHT}
        renderHeader={() =>
          (<Image source={{ uri: book.url }} style={styles.image} />)
        }
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log('text hidden')} >
            <View style={{ width: "100%", height: "100%", backgroundColor: 'red' }}>
              <Tab.Navigator>
                <Tab.Screen name="Home" component={Detail} />
                <Tab.Screen name="Settings" component={Chapter} />
              </Tab.Navigator>
            </View>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  )
}

export default DetailBook1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
});
