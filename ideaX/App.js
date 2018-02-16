import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Loading from './Components/Loading';
import firebaseApp from './Utils/firebaseConfig';

import HomeScreen from "./Screens/HomeScreen/index.js";
import Login from './Screens/Login';

export default class AwesomeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoggedIn: false
    };
    this.users = this.getRef().child('users');
  }
  onChange = (isLoggedIn) => {
    console.log(`Data changes to ${isLoggedIn} !`);
    this.setState({ isLoggedIn });
  }
  getRef() {
    return firebaseApp.database().ref();
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    const { isLoggedIn } = this.state;
    if (this.state.loading) {
      return <Loading />;
    }
    return <HomeScreen />
    /*
    if(this.state.isLoggedIn == false) {
      return <Login isLoggedIn={isLoggedIn} onChange={this.onChange} />
    }
    else {
      
    }
    */
  }
}
