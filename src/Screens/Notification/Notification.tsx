
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import DetailBook from '../../Components/DetailBook'
const book = {
  title: "One piece",
  url: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_04_25/tac_gia_one_piece_ca_ngoi_thanh_cong_cua_kimetsu_no_yaiba_va_khong_muon_thua_cuoc_fvvh_rfza.jpg"
}
export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
       <DetailBook book={book} />
       {/* <HorizontalList/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

