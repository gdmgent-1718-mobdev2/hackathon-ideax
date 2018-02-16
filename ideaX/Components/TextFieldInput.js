import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import style from '../Assets/style';
const TextFieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, containerStyle } = style;
return (
        <View style={containerStyle}>
            <Text>{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
            />
        </View>
    );
};
export default TextFieldInput;