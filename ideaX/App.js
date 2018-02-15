import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Loading from './Components/Loading';
import firebaseApp from './Utils/firebaseConfig';

// Import Screens
import BlogScreen from './Screens/Blog';
import TipsScreen from './Screens/Tips';
import CalculatorScreen from './Screens/Calculator';
import Login from './Screens/Login';
import Secured from './Screens/Secured';

export default class App extends Component {
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
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    const { isLoggedIn } = this.state;

    if (this.state.loading) {
      return (
        <Loading />
      );
    }
    if (this.state.isLoggedIn == true)
      return <Secured />;
    else
      return <Login isLoggedIn={isLoggedIn} onChange={this.onChange}
          // onLoginPress={
          //   () => {
          //     this.setState({isLoggedIn: true})
          //   }
          // }
        />;
  }
}

// Drawer-navigation
const LoggedIn = DrawerNavigator(
  {
    Tips:{
      screen: TipsScreen
    },
    Blog:{
      screen: BlogScreen
    },
    Calculator:{
      screen: CalculatorScreen
    },
    Login:{
      screen: Login
    },
    Logout:{
      screen: Secured
    }
  },
  {
    initialRouteName: 'Blog',
    drawerPosition: 'left',
    contentOptions:{
      activeTintColor:'blue',
    }
  }
)
