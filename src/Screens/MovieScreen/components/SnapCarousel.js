import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { styles } from './MovieStyles';
import { ScreenName } from '../../../Constants/ScreenNameConstants';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { width, height } from '../../../Constants/DimensionsConstants';

export default function SnapCarousel(props) {

 

  const renderItem = ({item, index}) => {
    const navigateToDetailScreen = id => {
      console.log('id',id)
      props.navigation.push(ScreenName.movieDetailScreen, id)
    }

    return (
      <TouchableOpacity activeOpacity={0.9} key={index} onPress={()=>navigateToDetailScreen(item._id)}>
        <Image source={{url: item.images.image}} style={{width: width/1.5, height:400}}/>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{backgroundColor:'#fff', paddingVertical:height/50}}>
      <View style={styles.headerItem}>
        <View style={styles.headerItem_content}>
          <Text style={styles.headerItem_title}>{props.title}</Text>
          <TouchableOpacity onPress={() => Alert.alert("See More")}>
            <Text style={styles.headerItem_seeMore}>See All</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:'gray'}}>Upcoming movie list</Text>
      </View>
      <Carousel
        layout={'stack'} layoutCardOffset={`18`}
        autoplay
        automaticallyAdjustContentInsets
        loop={true}
        data={props.data}
        sliderWidth={550}
        itemWidth={500}
        initialNumToRender={5}
        initialPage={5}
        ItemSeparatorComponent
        renderItem={renderItem}
      />
    </View>
  )
}
