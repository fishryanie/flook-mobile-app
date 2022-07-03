import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HorizontalList from '../../Components/FlatList/HorizontalList'
import { Avatar } from 'react-native-paper'
const data = [{ id: "1", type: "Tất cả" }, { id: '2', type: "Bình luận" }, { id: '3', type: "Bài đăng" }]
const dataUser = [{ _id: "1", name: 'Sanh', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb8GNxnF1eOJ5Cegkkt2NbfECtO39hN8-TWEJvQ9SoiutgZp04mWkh1u5FPmSwyG837A&usqp=CAU",
comment: "Hay quá", dateComment: "02/20/2022 12:23", comicImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb8GNxnF1eOJ5Cegkkt2NbfECtO39hN8-TWEJvQ9SoiutgZp04mWkh1u5FPmSwyG837A&usqp=CAU", comicName: "One piece" },
{ _id: "2", name: 'Quân', 
avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb8GNxnF1eOJ5Cegkkt2NbfECtO39hN8-TWEJvQ9SoiutgZp04mWkh1u5FPmSwyG837A&usqp=CAU",
comment: "Hay quá", dateComment: "02/20/2022 12:23", comicImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb8GNxnF1eOJ5Cegkkt2NbfECtO39hN8-TWEJvQ9SoiutgZp04mWkh1u5FPmSwyG837A&usqp=CAU", comicName: "One piece" }]

const Activities = () => {

  const renderItem = (value) => {
    const {
      item: { name, _id,avatar, comment, comicImg, comicName, dateComment }
    } = value

    return (
      <View style={{marginBottom:20}}>
        <View style={styles.viewInfo}>
          <Image style={{ width: 40, height: 40 , borderRadius:50}} source={{ uri: avatar }} />
          <Text style={{marginLeft:10}}>{name}</Text>
        </View>
        <Text style={{marginLeft:65}}>{comment}</Text>
        <View style={styles.viewEbook}>
            <Image style={{width:40, height:50,borderRadius:5}} source={{uri:comicImg}}/>       
            <Text style={{marginLeft:10}}>{comicName}</Text>
        </View>
        <View style={{marginTop:5, marginLeft:65}}>
          <Text style={{fontSize:10}}>{dateComment}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 15, marginTop: 15 }} >
        <HorizontalList data={data} />
      </View>
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={dataUser}
          renderItem={renderItem}
          numColumns={1}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Activities

const styles = StyleSheet.create({
  viewFlatlist: {
    marginTop: "10%",
    paddingHorizontal: "3%",
    height: 30,
    flexWrap: "nowrap"
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems:'center',
    marginLeft:15,
    
  },
  viewEbook:{
    marginLeft:65,
    marginTop:10, 
    flexDirection:'row',
    alignItems:'center', 
    backgroundColor:"#e6e3e3",
    borderRadius:5,
    width:"80%"
  }

})