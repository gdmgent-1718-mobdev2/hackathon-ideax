import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import TextFieldInput from './TextFieldInput';
import style from '../Assets/style';

class SignInForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onSignInPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
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