import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

// SideNav
import SideBar from "../SideBar/SideBar.js";

// Screens
import HomeScreen from "./HomeScreen.js";
import BlogScreen from '../BlogScreen/index.js';
import ProfileScreen from "../ProfileScreen/index.js";
import TipsScreen from '../TipsScreen/index.js';
import CalcScreen from "../Calculator/index.js";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Tips: { screen: TipsScreen },
    Blog: { screen: BlogScreen },
    Calculator: { screen:CalcScreen },
    ProfileScreen: { screen: ProfileScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
