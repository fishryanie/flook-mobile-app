import { addDays } from 'date-fns';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

import FlatListShowTime from '../ShowTime/components/ListSystemCinema';

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListShowTime />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

