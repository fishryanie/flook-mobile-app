import { StyleSheet, Image, View, Dimensions, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;
const images = [
  "https://ss-images.saostar.vn/w800/2020/01/03/6750639/page1.jpg",
  "https://otakugo.net/wp-content/uploads/2018/05/6-anime-tuong-tu-naruto-naruto-shippuden.jpg",
  "https://genk.mediacdn.vn/2019/8/2/photo-1-1564719782720667835081.jpg"
];
const BannerCarousel = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const renderPage = (image, index) => {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode: 'stretch' }} source={{ uri: image }} />
      </View>
    );
  }
  return (

    <View style={styles.container}>

      <Carousel

        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {images.map((image, index) => renderPage(image, index))}
      </Carousel>


    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

export default BannerCarousel