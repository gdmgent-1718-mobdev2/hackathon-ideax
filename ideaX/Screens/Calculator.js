import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CalculatorScreen extends React.Component{
    static navigationOptions = {
        tableBarLabel: 'Calculator',
        drawerIcon: ({tintColor}) =>{
            return(
                <MaterialIcons
                name="euro-symbol"
                size={24}
                style={{color: tintColor}}
                >
                </MaterialIcons>
            );
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Calculator</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 30,
        color: "blue"
    }
  });