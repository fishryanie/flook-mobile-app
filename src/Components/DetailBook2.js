import * as React from 'react';
import { Animated, Image, Text } from 'react-native';
import { useCollapsibleHeader } from 'react-navigation-collapsible';


const data = [];
for (let i = 0; i < 100; i++) {
  data.push(i);
}



const DetailBook2 = () => {
  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } =
    useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          height: 250,
        },
        headerBackground: (
          <Image
            source={{
              uri: 'https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg',
            }}
            style={{ flex: 1 }}
          />
        ),
      },
      config: { collapsedColor: 'red' },
    });

  return (
    <Animated.FlatList
      data={data}
      onScroll={onScroll}
      contentContainerStyle={{ paddingTop: containerPaddingTop }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      renderItem={(item) => {
        (<Text>{item}</Text>)
      }}
      keyExtractor={(item) => item.toString()}
    />
  );
};

export default DetailBook2;