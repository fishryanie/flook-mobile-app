import React, { useEffect, useState } from 'react'
import moment from 'moment';
import SearchComponent from './SearchComponent';
import ProfileHeader from "react-native-profile-header";
import { useDispatch } from 'react-redux';
import { height, width } from '../Constants/DimensionsConstants';
import { View, Text, StyleSheet } from 'react-native'
import { getPersistAuth } from '../Utils/GlobalFunc';
import Action from '../Shop/Action';

export default function HeaderComponent(props) {
  const [profile, setProfile] = useState(null)
  const newDate = moment(new Date).format('LL')
  const titleText = `Hello ${profile?.displayName?.split(' ').reverse()[0] || ''} !`
  const avatarDefault = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  const avatar = profile?.avatar ? profile?.avatar : avatarDefault
  const dispatch = useDispatch()

  const onPressPic = () => {
    dispatch(Action.app.onOffDrawerAction())
  }
  const onPressCart = () => {
    // dispatch(onOffCartAction())
  }
  const onPressSearch = () => {
    dispatch(Action.app.onOffSearchAction())
  }
  const onPressNotify = () => {
    // dispatch(onOffNotificationAction())
  }

  useEffect(() => {
    getPersistAuth().then(result => setProfile(result))
  }, [])

  return (
    <View style={styles.header}>
      <Text style={styles.largeTitle}>
        <ProfileHeader
          style={{ width: width }}
          titleText={titleText}
          profileImageSource={{ uri: avatar }}
          disableLeftAlignedButton={true}
          onFirstIconPress={onPressSearch}
          onSecondIconPress={onPressCart}
          onThirdIconPress={onPressNotify}
          onProfilePicPress={onPressPic}
        />
        {newDate}
        <SearchComponent
          data={props?.dataSearch}
          titleSearch={props?.titleSearch}
        />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: width,
    paddingTop: height / 15,
    paddingBottom: height / 50,
    paddingHorizontal: width / 40,
    backgroundColor: '#fff',
  },
  largeTitle: {
    width: width,
    fontSize: 25,
    color: 'gray',
    paddingHorizontal: width / 40,
    fontWeight: 'bold'
  }
})

