import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class TipsScreen extends React.Component{
    static navigationOptions = {
        tableBarLabel: 'Tips',
        drawerIcon: ({tintColor}) =>{
            return(
                <MaterialIcons
                name="mood"
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
                <Text style={styles.text}>Tips</Text>
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