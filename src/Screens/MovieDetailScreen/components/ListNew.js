import React from 'react'
import {View, Text, FlatList, Image, StyleSheet, Dimensions} from 'react-native'

export default function ListNew() {
  const {row, itemCard, imgGalerry} = styles
  const arrNews =[
    {
      img:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/extraction-2.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
      title:"Tyler Rake Lives! Netflix Confirms 'Extraction 2' With New Video Featuring Chris Hemsworth"
    },
    {
      img:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/Bright-Samurai-Soul.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
      title:"New 'Bright: Samurai Soul' Behind the Scenes Video Introduces the Anime Movie's Villain"
    },
    {
      img:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/BEST-85-MOVIES-ON-NETFLIX.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
      title:"The 85 Best Movies on Netflix Right Now (September 2021)"
    },
    {
      img:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/that-70s-show-cast-image.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
      title:"How to Watch 'That 70s Show' Online"
    }
  ]
  return (
    <React.Fragment>
      <View style={row}>
        <Text style={{color:'#fff'}}>Related News</Text>
        <Text style={{color:'red'}}>View all</Text>
      </View>
      <FlatList 
        data={arrNews}
        keyExtractor={(_, _id) => _id.toString()}   
        showsVerticalScrollIndicator={false} 
        renderItem={({item,index})=>(
          <View style={itemCard} key ={index}>
            <View style={{flex:1,paddingRight:5}}>
              <Image source={{url: item.img}} style={imgGalerry}/>
            </View>
            <View style={{flex:3,padding:5}}>
              <Text style={{color:'rgba(255,255,255,0.5)',fontSize:12, marginBottom:5}}>Điện ảnh 24h</Text>
              <Text style={{color:'#fff'}}>{item.title}</Text>
            </View>
          </View>
        )} 
      />
    </React.Fragment>
  )
}
const styles = StyleSheet.create({
  row:{ 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10, marginTop:20
  },
  itemCard:{
    flexDirection:'row', 
    width:Dimensions.get('window').width,
    height:100, padding:5
  },
  imgGalerry:{width:'100%',height:'100%',borderRadius:15},
})

