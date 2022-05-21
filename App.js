import React from 'react'
import AppNavigator from './src/Navigators/AppNavigator'
import { View } from 'react-native';
import Manga from './src/Screen/Manga'
import Novel from './src/Screen/Novel'

import TopTab from './src/Components/TopTap'
const listTopTab2 = [{ _id: "ahdkfahkfd", title: "Chi Tiết", component: Manga }, { _id: "ahdkfahkfd", title: "Chapter", component: Novel },]


export default function App() {
  return (
    <TopTab listTopTab={listTopTab2}
      ChildrenIcon1={null}
      ChildrenIcon2={null} />
  );
}

