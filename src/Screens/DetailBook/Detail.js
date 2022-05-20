import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
const Detail = () => {
  console.log("Detail")

  const getListItems = count => {
    const items = [];
    let i = 0;

    while (i < count) {
      i++;
      items.push(
        <View key={i} style={{ backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 64 }}>
          <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
        </View>
      );
    }

    return items;
  };
  return (
    <View style={{ zIndex: 10, backgroundColor: "blue" }}>
      {/* {
        getListItems(20)
      } */}
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>
      <Text>{"aaaaaaaaaaaaaaaaaaaaaaa"}</Text>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})