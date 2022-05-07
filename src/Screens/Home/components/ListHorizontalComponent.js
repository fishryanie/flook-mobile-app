import React from 'react'
import appConfigs from '../../../Configs/App';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { width, height } from '../../../Constants/DimensionsConstants';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert, SafeAreaView } from 'react-native'


export default function ListHorizontalComponent(props) {
  const {
    listFilmHorizontal,
    listFilmHorizontalHeader,
    title,
    seeMore,
    image,
    cardTitle,
    text,
    icon
  } = styles

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={[{ marginLeft: index == 0 ? width / 40 : 0 }, styles.itemCard]}>
        {/* <Ionicons style={styles.bookmark} name='md-bookmark-sharp' size={50}/> */}
        <Image style={image} source={{ uri: item.images.image }} resizeMode="cover" />
        <View style={cardTitle}>
          <View style={cardTitle}>
            <MaterialCommunityIcons name='star' size={20} style={icon} />
            <Text style={text}>4.5</Text>
          </View>
          <View style={cardTitle}>
            <MaterialCommunityIcons name='clock-outline' size={20} style={icon} />
            <Text style={text}>120p</Text>
          </View>
        </View>
        <Text style={{ paddingHorizontal: width / 50, paddingBottom: height / 100 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={listFilmHorizontal}>
      <View style={listFilmHorizontalHeader}>
        <View style={styles.header_content}>
          <Text style={title}>{props.title}</Text>
          <TouchableOpacity onPress={() => Alert.alert("See More")}>
            <Text style={seeMore}>See All</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'gray' }}>Summary of movies showing at cinema</Text>
      </View>
      <FlatList
        horizontal
        data={props.data}
        renderItem={renderItem}
        automaticallyAdjustContentInsets
        keyExtractor={(_, _id) => _id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listFilmHorizontal: {
    marginTop: height / 50,
    paddingVertical: height / 50,
    backgroundColor: '#fff'
  },
  listFilmHorizontalHeader: {
    padding: width / 40,
    paddingBottom: height / 50
  },
  header_content: {
    borderLeftWidth: 5,
    borderColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width / 40,
    marginBottom: height / 70
  },
  title: {
    fontSize: 25,
    lineHeight: 25,
    color: '#000',
    paddingTop: height / 150,
    fontWeight: 'bold'
  },
  seeMore: {
    fontSize: 14,
    lineHeight: 22,
    color: '#7D7E84',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  image: {
    width: width / 2.5,
    height: height < appConfigs.DEFAULT_HEIGHT ? 225 : 250,
  },
  itemCard: {
    position: 'relative',
    marginRight: width / 50,
    marginBottom: height / 100,
    backgroundColor: '#fff',
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  bookmark: {
    position: 'absolute',
    color: 'orange',
    top: -5, right: -8, zIndex: 10
  },
  cardTitle: {
    paddingTop: height / 250,
    paddingBottom: height / 350,
    marginHorizontal: width / 100,
    flexDirection: 'row',

  },
  icon: {
    color: '#64676D'
  },
  text: {
    marginHorizontal: 5,
    color: '#64676D',
    lineHeight: 20,
    fontSize: 12
  }
})
