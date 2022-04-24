import React, { useEffect, useState } from 'react'
import SnapCarousel from './components/SnapCarousel';
import HeaderComponent from '../../Components/HeaderComponent';
import ListHorizontalComponent from './components/ListHorizontalComponent'
import { useDispatch } from 'react-redux';
import { getPersistAuth } from '../../Utils/GlobalFunc';
import { ScreenName } from '../../Constants/ScreenNameConstants';
import { View, ScrollView } from 'react-native'
import { getAllListMovieAction, getListMovieFavoriteAction } from '../../Redux/Action/movieAction';
import { getAllListMovieSelector, getListMovieFavoriteSelector } from '../../Redux/Selector/MovieSelector';
import SearchComponent from '../../Components/SearchComponent';



export default function MovieScreen ({navigation}) {
  const dispatch = useDispatch()
  const data = getAllListMovieSelector()?.data
  const listFavorite = getListMovieFavoriteSelector()
  const [ profile, setProfile ] = useState(null)
  useEffect(() => {
    getPersistAuth().then(data => setProfile(data))
    dispatch(getAllListMovieAction())
  },[])

  useEffect(() => {
    if(profile !== null){
      dispatch(getListMovieFavoriteAction(profile?.accessToken))
    }
  },[profile])

 
  console.log('profile', profile)
  return (
    <View style={{flex:1}}>
      <HeaderComponent
        dataSearch={data}
        titleSearch='Search movie'
      />
      <ScrollView nestedScrollEnabled={false} >
        <SnapCarousel 
          data={data} 
          title='Comming Soon' 
          navigation={navigation}
        />
        <ListHorizontalComponent 
          data={data} 
          title='From Your List Favorite'
          navigation={navigation}
        />
      </ScrollView>
    </View>
  )
}


 
