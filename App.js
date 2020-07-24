import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Navigator from './src/components/HomeStack';

import MainMenu from "./src/view/MainMenu";
import TopBar from "./src/components/TopBar";
import RnR from "./src/view/RnR";
import { createStackNavigator } from 'react-navigation-stack';
import {createAppNavigator, createAppContainer, StackActions} from 'react-navigation';
import {NativeRouter, Route, Redirect, BackButton} from "react-router-native";

/*const screens = {
  MainMenu: {
    screen:MainMenu
  },
  RnR: {
    screen: RnR
  },

}

const HomeStack = createStackNavigator(screens);*/

export default function App() {
  return (
      <NativeRouter>
          <BackButton />
          <View style={styles.main}>
              <TopBar/>
              <Route exact path="/" component={MainMenu}/>
              <Route path="/rnr" component={RnR}/>
          </View>
      </NativeRouter>

  );
}
//<MainMenu></MainMenu>
const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
})

const NavigatorT = createStackNavigator({
Home: {screen: MainMenu, TopBar},
RnR: {screen: RnR},

});

//const Ap = createAppContainer(NavigatorT);

//export default Ap;
