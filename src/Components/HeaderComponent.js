import React, { useEffect, useState } from 'react'
import moment from 'moment';
import SearchComponent from './SearchComponent';
import ProfileHeader from "react-native-profile-header";
import { useDispatch } from 'react-redux';
import { height, width, insets } from '../Constants/DimensionsConstants';
import { View, Text, StyleSheet } from 'react-native'
import { getPersistAuth } from '../Utils/GlobalFunc';
import Action from '../Shop/Action';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderComponent(props) {
  const insets = useSafeAreaInsets()
  const [profile, setProfile] = useState(null)
  const newDate = moment(new Date).format('LL')
  const titleText = `Hello ${profile?.displayName?.split(' ').reverse()[0] || ''} !`
  const avatarDefault = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  const avatar = profile?.avatar ? profile?.avatar : avatarDefault
  const dispatch = useDispatch()

  const onPressPic = () => {
    dispatch(Action.app.onOffDrawer())
  }
  const onPressCart = () => {
    // dispatch(onOffCart())
  }
  const onPressSearch = () => {
    dispatch(Action.app.onOffSearch())
  }
  const onPressNotify = () => {
    // dispatch(onOffNotification())
  }

  useEffect(() => {
    getPersistAuth().then(result => setProfile(result))
  }, [])

  return (
    <View style={[styles.header, { marginTop: insets.top }]}>
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
        {/* {newDate} */}
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
    paddingTop: height / 100,
    paddingBottom: height / 100,
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

