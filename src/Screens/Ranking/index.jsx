import { View, Text, Button } from 'react-native'
import screenName from '../../Constants/ScreenName';
import FlatGird from '../../Components/FlatGird';
import TopTap from '../../Components/TopTab'


const data = [
  { name: 'TURQUOISE', code: '#1abc9c' },
  { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' },
  { name: 'AMETHYST', code: '#9b59b6' },
  { name: 'WET ASPHALT', code: '#34495e' },
  { name: 'GREEN SEA', code: '#16a085' },
  { name: 'NEPHRITIS', code: '#27ae60' },
  { name: 'BELIZE HOLE', code: '#2980b9' },
  { name: 'WISTERIA', code: '#8e44ad' },
  { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  { name: 'SUN FLOWER', code: '#f1c40f' },
  { name: 'CARROT', code: '#e67e22' },
  { name: 'ALIZARIN', code: '#e74c3c' },
  { name: 'CLOUDS', code: '#ecf0f1' },
  { name: 'CONCRETE', code: '#95a5a6' },
  { name: 'ORANGE', code: '#f39c12' },
  { name: 'PUMPKIN', code: '#d35400' },
  { name: 'POMEGRANATE', code: '#c0392b' },
  { name: 'SILVER', code: '#bdc3c7' },
  { name: 'ASBESTOS', code: '#7f8c8d' },
]


const listTopTab2 = [
  { _id: "1", screenName: screenName.comicScreen, title: 'Truyện tranh', component: () => <FlatGird data={data} /> },
  { _id: "2", screenName: screenName.novelScreen, title: 'Tiểu thuyết', component: () => <FlatGird data={data} /> },
  { _id: "3", screenName: screenName.chatStoryScreen, title: 'Truyện chat', component: () => <FlatGird data={data} /> }

]

const RankingScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TopTap arrayCategory={listTopTab2} />
    </View>
  )
}

export default RankingScreen