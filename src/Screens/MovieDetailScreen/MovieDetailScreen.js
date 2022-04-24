import React,{ useState, useEffect } from 'react'
import CardReview from './CardReview'
import ListNew from './components/ListNew';
import MyButton from '../../Components/ButtonComponent'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { width, height } from '../../Constants/DimensionsConstants';
import { useDispatch } from 'react-redux';
import { Avatar } from "react-native-elements";
import { getPersistAuth } from '../../Utils/GlobalFunc';
import { PutLikeMovieAction } from '../../Redux/Action/AuthAction';
import { getListMovieFavoriteAction, getMovieByIdAction } from '../../Redux/Action/movieAction';
import { getListMovieFavoriteSelector, getMovieByIdSelector } from '../../Redux/Selector/MovieSelector'
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons'

import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Share, Alert } from 'react-native'


export default function MovieDetailScreen({route, navigation}) {
  const dispatch = useDispatch()
  const data = getMovieByIdSelector()
  const listIdMovieFavorite = getListMovieFavoriteSelector()
  const arrReview = [
    { id: 1, img:'', nickName:'', scores: '', content: '' },
    { id: 2, img:'', nickName:'', scores: '', content: '' },
    { id: 3, img:'', nickName:'', scores: '', content: '' },
    { id: 4, img:'', nickName:'', scores: '', content: '' },
    { id: 5, img:'', nickName:'', scores: '', content: '' },
    { id: 6, img:'', nickName:'', scores: '', content: '' },
    { id: 7, img:'', nickName:'', scores: '', content: '' },
    { id: 8, img:'', nickName:'', scores: '', content: '' },
    { id: 9, img:'', nickName:'', scores: '', content: '' },
  ]
 
 
  const {detail,img,header,movieTitle,headerRow01,row,c16,digital,textLight,imgGalerry} = styles
 
  const [ profile, setProfile ] = useState(null)
  const [ liked, setLiked] = useState({
    colorIconLike: 'white',
    nameIconLike: 'heart-outline'
  });

  console.log('route?.params', route?.params)
  useEffect(() => {
    dispatch(getMovieByIdAction(route?.params))
    dispatch()
    getPersistAuth().then(data => setProfile({...data}))
  }, [])
  

  useEffect(() => {
    for(let i=0; i < listIdMovieFavorite?.length; i++){
      if(listIdMovieFavorite[i] === route?.params){
        setLiked({...liked, colorIconLike:'red', nameIconLike:'heart'})
      }else{
        setLiked({...liked, colorIconLike:'white', nameIconLike:'heart-outline'})
      }
    }
  }, [])

  
  
  const handleLike = () => {
    if(profile === null){
      alert('Bạn chưa đăng nhập')
    }else{
      Alert.alert('Xác nhận',
        `Thêm ${data.name} vào danh sách yêu thích`, [
          { text: "Cancel" }, { 
            text: "Accept",  
            onPress: () => dispatch(PutLikeMovieAction({
              movieId: { movieId:route?.params }, 
              token: profile?.accessToken
            }))
          }
        ]
      );
    }
  }

  const onShare = async () => {
      try {
        const result = await Share.share({
          message: data.name,
          url: data.images.image
          // url: 'http://localhost:8000/api/movie-management/getMovieById/' + route?.params
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };    


  const RenderHeader = () => {
    return (
      <View style={header}>
        <View style={{flex:10}}>
          <Text style={movieTitle}>{data.name}</Text>
          <View style ={headerRow01}>
            <View style={row}>
              <View style={c16}><Text style={textLight}>C16</Text></View>
              <Text style={textLight}>IMDB 7.6</Text>
            </View>
            <View style={[digital,{alignSelf:'center'}]}><Text style={textLight}>3D/2D/Digital</Text></View>
            <Text style ={[textLight,{alignSelf:'center'}]}>120 mins</Text>
          </View>  
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <TouchableOpacity onPress={handleLike}>
            <MaterialCommunityIcons name={liked.nameIconLike} color={liked.colorIconLike} size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:20}} onPress={onShare}>
            <MaterialIcons name='share' size={25} color='white'/>
          </TouchableOpacity>
        </View> 
      </View>
        
    )
  } 
  
  return (
    <View style={detail}>     
      <ImageBackground style={img} source={{ uri: data?.images?.image}} resizeMode="stretch">
        <MaterialIcons onPress={()=> navigation.goBack()} style = {{padding:30}}name='arrow-back' color='#fff' size={30}/> 
      </ImageBackground>
      <ScrollBottomSheet 
        componentType="ScrollView" 
        snapPoints={[50, '45%']} 
        initialSnapIndex={1} 
        showsVerticalScrollIndicator={false}
        renderHandle={()=>RenderHeader()}>
        <View style ={{backgroundColor:'#000',}}>
          <View style={{padding:10}}>
            <Text style={textLight}>Story line</Text>
            <Text style={[textLight,{paddingVertical:10}]}>{data.discription}</Text>
          </View>
          <View style={[row,{padding:10}]}>
            <Text style={textLight}>Did you know ?</Text>
            <Text style={{color:'red'}}>View all</Text>
          </View>
          <FlatList 
            horizontal
            data={arrReview}
            renderItem = {CardReview}
            keyExtractor={item => `${item.id}`}   
            showsVerticalScrollIndicator={false}
          />
          <Text style={{padding:10,color:'#fff',marginTop:20}}>{'Video & Galerry'}</Text>
          <View style={{flexDirection:'row',width: width, height:200,padding:5}}>
            <View style ={{flex:1,paddingRight:5}}>
              <Image source={{url: data?.images?.otherImage[0]}} style={imgGalerry}/>
            </View>
            <View style={{flex:1,paddingLeft:5}}>
              <View style ={{flex:1,paddingBottom:5}}>
                <Image source={{url: data?.images?.otherImage[1]}} style={imgGalerry}/>
              </View>
              <View style ={{flex:1,paddingTop:5,flexDirection:'row'}}>
                <View style ={{flex:1,paddingRight:5}}>
                  <Image source={{url: data?.images?.otherImage[2]}} style={imgGalerry}/>
                </View>
                <View style ={{flex:1,paddingLeft:5}}>
                  <Avatar title="+8" containerStyle={[imgGalerry,{backgroundColor:'#141520'}]}  />
                </View>
              </View>
            </View>
          </View>
          <Text style={{padding:10,color:'#fff',marginTop:20}}>Cast</Text>
          <View style={{paddingVertical:10}}>
            <FlatList 
              horizontal
              data={data.cast}
              renderItem = {({item,index})=> (
                <View style={{marginHorizontal:10,maxWidth:80}}>
                  <Avatar key ={index} source={{url:item.castImage}} size="large" rounded />
                  <Text style={[textLight,{textAlign:'center',paddingVertical:10}]}>{item.castName}</Text>
                </View>
              )}
              keyExtractor={item => `${item.id}`}   
              showsHorizontalScrollIndicator={false}  
            />
          </View>

          <ListNew/>
          <View style={{paddingVertical:30}}>
            <MyButton name ='Buy ticket'/>
          </View>
        </View>

      </ScrollBottomSheet> 
    </View>
  )
}


const styles = StyleSheet.create({
  detail:{ flex:1, position: 'relative'},
  imgGalerry:{width:'100%',height:'100%',borderRadius:15},
  textLight:{color:'#fff'},
  img:{ width: width, height: height/ 1.8, },
  header: {
    padding:10,
    backgroundColor:'rgba(0,0,0,0.4)',
    shadowColor:'#000',
    flexDirection:'row',
    shadowOpacity:0.5,
    shadowRadius: 3,
    shadowOffset: { height: 1, width: 0 },
    
  },
  row:{ flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  c16:{ paddingRight:5,backgroundColor:'red', color:'#fff',marginRight:5,borderRadius:5},
  digital:{ paddingHorizontal:10, marginHorizontal:10, borderRightWidth:1, borderLeftWidth:1, borderColor:'#fff',color:'#fff'},
  movieTitle:{
    color:'#fff',
    fontSize:26,
    fontWeight:'bold'
  },
  headerRow01:{
    flexDirection:'row',padding:10,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  
  panelHandle: {
    width: 40, height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },

})
