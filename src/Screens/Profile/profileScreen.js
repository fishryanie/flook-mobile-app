import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, EvilIcons } from 'react-native-vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useRef } from 'react'
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,

  OpenSans_400Regular,
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_600SemiBold

} from "@expo-google-fonts/dev";
import appConfigs from '../../Configs/app';
import ImageVip from '../../Assets/Images/vipProfile.png'
import ActionButton from 'react-native-action-button';
import BottomSheet from '../../Components/BottomSheet';
import typography from '../../Constants/Typography';
import screenName from '../../Constants/ScreenName';
const listItemBanThao = [
  { title: "Xin Việc", iconName: "md-reader-outline" },
  { title: "Ghi âm", iconName: "mic-outline" },
  { title: "Dịch truyện", iconName: "md-language-outline" },
  { title: "Lồng tiếng", iconName: "mic-circle-outline" },
]

const listItem1 = [
  { iconType: Ionicons, title: "Đăng kí hội viên", name: "ios-people-outline" },
  { iconType: MaterialCommunityIcons, title: "Nạp tiền", name: "star-circle-outline" },
  { iconType: MaterialCommunityIcons, title: "Phiếu đọc truyện của tôi", name: "newspaper" }
]

const listItem2 = [
  { iconType: MaterialCommunityIcons, title: "Giới thiệu bạn bè", name: "account-tie-voice-outline" },
  { iconType: MaterialCommunityIcons, title: "Phản hồi ý kiến", name: "alert-circle-outline" },
  { iconType: MaterialCommunityIcons, title: "Giới thiệu chúng tôi", name: "script-text-outline" }
]

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [isLogin, setIsLogIn] = useState(true)
  const insets = useSafeAreaInsets()
  const childRef = useRef();
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_300Light,
    OpenSans_500Medium,
    OpenSans_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }


  const renderItem = (item) => {
    return (item.map((data, index) => {
      return (
        <TouchableOpacity key={index} delayPressIn={50} onPress={() => {
          // console.log("click touch1")
        }} style={styles.listItem}>
          <data.iconType name={data.name} size={20} color={'gray'} />
          <Text style={{ marginLeft: "5%", fontWeight: "bold", width: "auto", fontSize: typography.fontSizes.sm, fontFamily: 'OpenSans_600SemiBold' }}>{data.title}</Text>
        </TouchableOpacity>
      )
    }))
  }

  const handleOpen = () => {
    childRef.current.handleOpenBottomSheet()
  }
  const handleClose = () => {
    childRef.current.handleCloseBottomSheet()
  }

  const handleOpenScreenDetailAcount = () => {
    navigation.navigate(screenName.detailUserScreen)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>

      <ScrollView style={{ flex: 1, }}>

        <View style={styles.containerhead} >

          <View style={[styles.head]}>
            <View style={styles.viewTouchTop}>
              <TouchableOpacity>
                <FontAwesome name="envelope-o" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="md-settings-outline" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <TouchableOpacity onPress={!isLogin ? handleOpen : handleOpenScreenDetailAcount}>
                {
                  isLogin ? <Image style={styles.image} source={{ uri: "https://i.pinimg.com/736x/e9/d6/aa/e9d6aad1ac43fdea81afe2f40caae49a.jpg" }} /> : <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4TKmLL_Yab3zrnGsM-6FzOgBGSm3lcXkndb1E5xQagw5YlZ9ClcBcC46v3Eq9vfBSIQ&usqp=CAU" }} />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpen} style={styles.viewTextInfo}>
                {isLogin ?
                  (<View style={{ flex: 1 }}>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>Sanh Trần Sanh</Text>
                    <View style={styles.textVip}>
                      <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Vip</Text>
                    </View>
                  </View>) : (<Text>Bấm để đăng nhập</Text>)
                }

              </TouchableOpacity>
              <View style={styles.benifit}>
                <Ionicons name="md-calendar-outline" size={15} color="white" />
                <Text style={{ fontSize: 10, color: "white" }}>Điểm danh</Text>
              </View>
            </View>

            <View style={styles.point}>
              <View style={styles.pontItem}>
                <TouchableOpacity>
                  <Text>0</Text>
                </TouchableOpacity>
                <Text style={{ color: 'gray' }}>Xu của tôi</Text>
              </View>
              <View style={styles.pontItem}>
                <TouchableOpacity>
                  <Text>0</Text>
                </TouchableOpacity>
                <Text style={{ color: 'gray' }}>Điểm của tôi</Text>
              </View>
              <View style={styles.pontItem}>
                <TouchableOpacity>
                  <Text>0</Text>
                </TouchableOpacity>
                <Text style={{ color: 'gray' }}>Phiếu</Text>
              </View>
            </View>
          </View>

          <View style={styles.topupVip} >
            <Image source={ImageVip} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
          </View>
          <Text style={{ fontWeight: "bold" }}>Gửi bản thảo</Text>
          <View style={styles.banthaoContainer}>
            {
              listItemBanThao.map((item, index) => {
                return <View key={index} style={styles.ItemBanThao}>
                  <Ionicons color="#673AB7" name={item.iconName} size={25} />
                  <Text style={{ fontSize: typography.fontSizes.xs, fontFamily: 'OpenSans_500Medium', marginTop: "10%" }}>{item.title}</Text>
                </View>
              })
            }
          </View>
        </View>
        <View style={styles.containerChucnang}>
          {renderItem(listItem1)}
        </View>

        <View style={[styles.containerChucnang, { height: 250 }]}>
          {renderItem(listItem2)}
        </View>


      </ScrollView>

      <ActionButton
        style={{ right: -5, bottom: -5 }}
        buttonColor="#673AB7"
        onPress={() => { console.log("hi") }}
        renderIcon={() => <MaterialCommunityIcons name="feather" size={25} color="white" />
        }
      />
      <BottomSheet ref={childRef} height={350}>
        <View style={styles.viewBottomSheet}>
          <View style={styles.closeBottomSheet}>
            <TouchableOpacity onPress={handleClose}>
              <EvilIcons name="close-o" size={40} color="#737375" />
            </TouchableOpacity>
          </View>


          <View style={{ width: "auto", height: 80, justifyContent: "center" }}>
            <Image style={styles.imageBottomSheet} source={{ uri: "https://i.pinimg.com/736x/e9/d6/aa/e9d6aad1ac43fdea81afe2f40caae49a.jpg" }} />
          </View>

          <TouchableOpacity style={styles.touchBottom}>
            <View style={styles.viewTouch}>
              <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require('../../Assets/Images/logoface.png')} />
              <Text> Đăng nhập bằng Facebook</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBottom}>
            <View style={styles.viewTouch}>
              <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require('../../Assets/Images/logoGoogle.png')} />
              <Text> Đăng nhập bằng Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBottom}>
            <View style={styles.viewTouch}>
              <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require('../../Assets/Images/logoface.png')} />
              <Text> Đăng nhập bằng</Text>
            </View>
          </TouchableOpacity>

        </View>

      </BottomSheet>

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({

  containerhead: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  head: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  viewTouchTop: {
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "green",
    width: "20%",
    flexDirection: "row",
    height: 35,
    paddingHorizontal: 5,
  },
  infoContainer: {
    width: "100%",
    // backgroundColor: "green",
    height: 150,
  },
  info: {
    flexDirection: "row",
    flex: 2,
    width: "100%",
    // backgroundColor: "white",

    alignItems: "center"
  },
  point: {
    flex: 1,
    width: "100%",
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pontItem: {
    // backgroundColor: "red",
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover"
  },
  viewTextInfo: {
    flex: 2,
    width: "50%",
    // backgroundColor: "red",
    height: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: "3%"
  },
  textVip: {
    backgroundColor: "#51a1ed",
    borderRadius: 50,
    alignItems: "center",
    width: 40,
  },

  benifit: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#673AB7",
    height: 35,
    borderRadius: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  topupVip: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: "3%"
    // backgroundColor: "red"

  },
  topupLinearGradient: {
    width: "100%",
    margin: 0,
    height: 50,
    borderRadius: 5,
    // backgroundColor: "red"
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  banthaoContainer: {
    width: "100%",
    // paddingHorizontal: "3%",
    paddingVertical: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: 'space-between',

  },
  ItemBanThao: {
    width: "20%",
    height: 80,
    alignItems: "center",
    paddingHorizontal: "1%"
  },
  containerChucnang: {
    marginTop: 10,
    width: "100%",
    height: 200,
    backgroundColor: "white",
    paddingHorizontal: "5%"

  },
  listItem: {
    flexDirection: "row",
    width: "auto",

    alignItems: "center",
    paddingVertical: "5%",
    // backgroundColor: "green"
  },
  viewBottomSheet: {
    flex: 1,
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: "#f2f0f0"
  },
  imageBottomSheet: {
    width: 60,
    height: 60,
    borderRadius: 100,
    paddingVertical: 20,
    backgroundColor: "red"
  },
  touchBottom: {
    justifyContent: "center",
    height: 55,
    width: "65%",

    // backgroundColor: "green",
  },
  viewTouch: {
    height: "80%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: "2%",
    borderRadius: 20
  },
  closeBottomSheet: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: "red",
    paddingTop: 10,
    paddingEnd: 5,
  }
})

export default ProfileScreen
