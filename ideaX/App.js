import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// Import Screens
import BlogScreen from './Screens/Blog';
import TipsScreen from './Screens/Tips';
import CalculatorScreen from './Screens/Calculator';

// Drawer-navigation
const Drawer = DrawerNavigator(
  {
    Tips:{
      screen: TipsScreen
    },
    Blog:{
      screen: BlogScreen
    },
    Calculator:{
      screen: CalculatorScreen
    }
  },
  {
    initialRouteName: 'Tips',
    drawerPosition: 'left',
    contentOptions:{
      activeTintColor:'blue',
    }
  }
)

export default Drawer;