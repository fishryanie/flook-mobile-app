
import {  SafeAreaView } from 'react-native'

import TopTapNavigator from '../../Components/TopTap'
import Manga from '../Manga/Manga';
import Novel from '../Novel/Novel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// 2 item
const listTopTab2 = [ { _id: "gjdglsdfk", title: "Manga", component: Manga},{ _id: "ahdkfahkfd", title: "Tiểu Thuyết", component: Novel }]

export default function ClassifyScreen() {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white" , marginTop:insets.top}}>
     <TopTapNavigator
     listTopTab={listTopTab2}
    //  Có icon
    //  ChildrenIcon1={<Ionicons name='pencil' size={22} style={{}}/>}
    // ChildrenIcon2={<AntDesign name='menu-fold' size={22} style={{}}/>}

    // không có icon
     ChildrenIcon1={null}
     ChildrenIcon2={null}
     />
    </SafeAreaView>
  )
}

