import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator,
	NavigationActions
} from 'react-navigation';
import { useScreens } from 'react-native-screens';
useScreens();

import Icon from '@expo/vector-icons/Ionicons';

import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

import LoadingScreen from './views/LoadingScreen';
import LoginScreen from './views/LoginScreen';
import DashboardScreen from './views/DashboardScreen';
import OtherScreen from './views/OtherScreen';
import DetailScreen from './views/DetailScreen';
import PhotolistsScreen from './views/PhotolistsScreen';

export default class App extends Component {
	componentWillMount() {}

	render() {
		return <AppContainer />;
	}
}

// const AppDrawerNavigator = createDrawerNavigator({
// 	Dashboard: {
// 		screen: DashboardStackNavigator
// 	}
// });

// const DashboardStackNavigator = createStackNavigator({
// 	Dashboard: DashboardScreen
// });

const UserAddStackNavigator = createStackNavigator({
	Login: LoginScreen,
	Dashboard: DashboardScreen,
	Photolists: PhotolistsScreen
});

const OtherStackNavigator = createStackNavigator({
	Other: {
		screen: OtherScreen,
		navigationOptions: () => ({
			headerBackTitle: null
		})
	},
	Detail: DetailScreen
});

const AppSwitchNavigator = createSwitchNavigator(
	{
		Loading: LoadingScreen,
		Login: UserAddStackNavigator,
		Other: OtherStackNavigator
		// DetailModal: OtherStackNavigator
	},
	{
		initialRouteName: 'Login'
		// mode: 'modal',
		// headerMode: 'none'
	}
);

const AppContainer = createAppContainer(AppSwitchNavigator);
