import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import SignInForm from '../Components/SignInForm';

export default class Login extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
          <View>
            <SignInForm isLoggedIn={isLoggedIn} />
          </View>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);
