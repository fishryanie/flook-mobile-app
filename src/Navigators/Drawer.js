import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled, { createGlobalStyle } from 'styled-components'
import { ScreenName } from '../Constants/ScreenNameConstants';
import { useDispatch } from 'react-redux';
import Action from '../Shop/Action';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { getPersistAuth, removePersistAuth } from '../Utils/GlobalFunc';



const Avata = styled.Image`width: 60px; height: 60px; border-radius: 15px;`
const Name = styled.Text`font-weight: 900; font-size: 20px; color: #fff;padding: 15px 0px 5px 0px`
const Email = styled.Text`color: #bdcaf3; margin-left: 15px; font-size:14px `
const TableInfo = styled.View`display: flex; align-items: center; flex-direction: row; justify-content: space-between; text-align: center; margin-top: 60px;`
const Tableth = styled.Text`width:100%; text-align: center; color: #bdcaf3; margin-top:10px; font-size: 14px`
const Tabletd = styled.Text`width:100%; text-align: center; color: #fff; font-weight: bold; font-size: 16px;`
const Tabletr = styled.View`padding: 0px 15px;`
const ItemMenu = styled.View`flex-direction: row; align-items: center; padding: 10px 15px; margin-top:10px ;border-radius: 8px;`




export default function Drawer({ navigation }) {
  const dispatch = useDispatch()
  const [profile, setProfile] = useState(null);
  const [currentTab, setCurrentTab] = useState("Home");

  const TabButton = (currentTab, setCurrentTab, title, icon) => {
    const handleClick = async () => {
      if (title === 'Log out') {
        await removePersistAuth()
        navigation.goBack()
      } else {
        setCurrentTab(title)
      }
    }
    return (
      <TouchableOpacity onPress={handleClick}>
        <ItemMenu style={{ paddingVertical: 8, backgroundColor: currentTab == title ? 'white' : 'transparent' }}>
          <Icon name={icon} color={currentTab == title ? "#5359D1" : "white"} size={22} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 20, color: currentTab == title ? "#5359D1" : "white" }}>{title}</Text>
        </ItemMenu>
      </TouchableOpacity>
    );
  }

  // useEffect(() => {
  //   getPersistAuth().then(data => setProfile(data))
  // }, [])

  return (
    <View style={{ justifyContent: 'flex-start', padding: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginBottom: 15 }}>
        <Icon name='close' color='#fff' size={25} onPress={() => { dispatch(Action.app.onOffDrawerAction(true)) }} />
        <Icon name='pencil-outline' color='#fff' size={25} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Avata source={{ uri: profile?.avatar }} />
        <View style={{ paddingLeft: 15 }}>
          <Name>{profile?.displayName}</Name>
          <Text style={{ color: '#bdcaf3' }}>quanphps14761</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingTop: 20 }}>
        <Icon name="phone" color="#bdcaf3" size={18} />
        <Email>0979.955.925</Email>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingTop: 15 }}>
        <Icon name="email-edit-outline" color="#bdcaf3" size={18} />
        <Email>{profile?.email}</Email>
      </View>
      <TableInfo>
        <Tabletr style={{ borderRightWidth: 1, borderRightColor: '#bdcaf3' }}>
          <Tabletd>{(30000).toLocaleString() + ' đ'}</Tabletd>
          <Tableth>Willet</Tableth>
        </Tabletr>
        <Tabletr style={{ borderRightWidth: 1, borderRightColor: '#bdcaf3' }}><Tabletd>25</Tabletd><Tableth>Order</Tableth></Tabletr>
        <Tabletr><Tabletd>Admin</Tabletd><Tableth>Account type</Tableth></Tabletr>
      </TableInfo>



      <View style={{ flexGrow: 1, marginTop: 30, paddingRight: 20 }}>
        {TabButton(currentTab, setCurrentTab, "Yêu thích", "heart-outline")}
        {TabButton(currentTab, setCurrentTab, "Payment", "credit-card-outline")}
        {TabButton(currentTab, setCurrentTab, "Promotion", "tag-text")}
        {TabButton(currentTab, setCurrentTab, "Change password", "key-variant")}
        <View style={{ padding: 30, paddingBottom: 0, paddingLeft: 20 }}><View style={{ borderBottomColor: '#bdcaf3', borderBottomWidth: 1 }}></View></View>
        {TabButton(currentTab, setCurrentTab, "Introduce", "information-outline")}
        {TabButton(currentTab, setCurrentTab, "GameEzMath", "gamepad-variant-outline")}
        {TabButton(currentTab, setCurrentTab, "Movie management", "database-edit")}
        {TabButton(currentTab, setCurrentTab, "Settings", "cog")}
      </View>
      <View style={{ marginBottom: 20 }}>{TabButton(currentTab, setCurrentTab, "Log out", "logout")}</View>
    </View>
  )
}

