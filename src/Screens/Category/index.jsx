import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { ScreenName } from '../../Constants/ScreenNameConstants'
import { View } from 'react-native'
import TopTab from '../../Components/TopTap'
import NovelScreen from "../Novel"
import ComicScreen from '../Comic'
import ShortStory from '../ShortStory'
import ChatStoryScreen from '../ChatStory'

const listTopTab2 = [
  { _id: "ahdkfahkfd", title: "ComicScreen", component: ComicScreen }, 
  { _id: "ahdkfahkfdqw1", title: "NovelScreen", component: NovelScreen },
  { _id: "ahdkfahkfdqw12", title: "ShortStoryScreen", component: ShortStory },
  { _id: "ahdkfahkfdqw13", title: "ChatStoryScreen", component: ChatStoryScreen },
]

const CategoryScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TopTab listTopTab={listTopTab2}
      Icon1={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}
      Icon2={<MaterialCommunityIcons name={'home'} size={20} color={'red'} />}/>
      {/* <Text>CategoryScreen</Text>
      <Button
        title='Go to Comic'
        onPress={() => navigation.navigate(ScreenName.comicScreen)}
      />
      <Button
        title='Story Chat'
        onPress={() => navigation.navigate(ScreenName.storyChatScreen)}
      />
      <Button
        title='Novel'
        onPress={() => navigation.navigate(ScreenName.novelScreen)}
      />
      <Button
        title='Channel'
        onPress={() => navigation.navigate(ScreenName.channelScreen)}
      />
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  )
}

export default CategoryScreen