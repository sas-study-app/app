import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MainMenu from "./src/view/MainMenu";
import TopBar from "./src/components/TopBar";

export default function App() {
  return (
      <View style={styles.main}>
        <TopBar></TopBar>
        <MainMenu></MainMenu>
      </View>
  );
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
})
