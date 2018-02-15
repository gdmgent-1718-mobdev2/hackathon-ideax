import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import TextFieldInput from './TextFieldInput';
import style from '../Assets/style';
import {
    StackNavigator,
} from 'react-navigation';

import HomeScreen from "../Screens/HomeScreen/HomeScreen.js";

const Redirect = StackNavigator({
    Home: { screen: HomeScreen },
});

class SignInForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onSignInPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                console.log('check');
                return navigate('Home');
            })
            .catch(() => {
                console.log('error');
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(() => {
                //         console.log('check2');
                //         this.setState({ error: '', loading: false });
                //         return navigate('Home');
                //     })
                //     .catch(() => {
                //         console.log('error2');
                        this.setState({ error: 'Authentication failed.', loading: false });
                    // });
            });
    }
    renderButtonOrLoading() {
        return <Button onPress={this.onSignInPress.bind(this)} title="Log in" />;
    }
    render() {
        const { isLoggedIn } = this.props;
        return (
            <View>
                <TextFieldInput
                    label='Email Address'
                    placeholder='youremailaddress@domain.com'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    autoCorrect={false}
                />
                <TextFieldInput
                    label='Password'
                    autoCorrect={false}
                    placeholder='Your Password'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <Text style={style.errorTextStyle}>{this.state.error}</Text>
                {this.renderButtonOrLoading()}
            </View>
        );
    }
}
export default SignInForm;