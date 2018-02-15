const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    backImg:{
        height: 120,
        width: "100%",
        alignSelf: "stretch",
        position: "absolute",
    }, 
    frontImg:{
        height: 80,
        width: 70,
        position: "absolute",
        alignSelf: "center",
        top: 20,
    },
    listMargin:{ 
        marginTop: 120, 
    },
    boldText:{
        fontWeight: 'bold',
    }
}); 