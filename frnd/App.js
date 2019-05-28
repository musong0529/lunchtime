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
<<<<<<< HEAD
import PhotolistsScreen from './views/PhotolistsScreen';

export default class App extends Component {
	componentWillMount() {}
=======

export default class App extends Component {
	componentWillMount() {
		// firebase
		// 	.database()
		// 	.ref('users')
		// 	.on('value', data => {
		// 		console.log(data.toJSON());
		// 	});
		// setTimeout(() => {
		// 	firebase
		// 		.database()
		// 		.ref('user/004')
		// 		.set({
		// 			name: 'RN04',
		// 			age: 41
		// 		})
		// 		.then(() => {
		// 			console.log('Insert!');
		// 		})
		// 		.catch(error => {
		// 			console.log(error);
		// 		});
		// }, 3000);
	}
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d

	render() {
		return <AppContainer />;
	}
}

<<<<<<< HEAD
=======
// class Feed extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Feed</Text>
// 				<Button
// 					title="Go to Detail Screen"
// 					onPress={() => this.props.navigation.navigate('Detail')}
// 				/>
// 				<Button title='Sign out'
// 					onPress={() => firebase.auth().signOut()}
// 				/>
// 			</View>
// 		);
// 	}
// }

// class Profile extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Profile</Text>
// 			</View>
// 		);
// 	}
// }

// class Settings extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Settings</Text>
// 			</View>
// 		);
// 	}
// }

// const DetailScreen = props => (
// 	<View style={styles.container}>
// 		<Text>Detail</Text>
// 	</View>
// );

// const FeedStack = createStackNavigator(
// 	{
// 		Feed: {
// 			screen: Feed,
// 			navigationOptions: ({ navigation }) => {
// 				return {
// 					headerTitle: 'Feed',
// 					headerLeft: (
// 						<Icon
// 							style={{ paddingLeft: 10 }}
// 							name="md-menu"
// 							size={30}
// 							onPress={() => navigation.openDrawer()}
// 						/>
// 					)
// 				};
// 			}
// 		},
// 		Detail: {
// 			screen: DetailScreen
// 		}
// 	},
// 	{
// 		defaultNavigationOptions: {
// 			gesturesEnabled: false
// 		}
// 	}
// );

// const ProfileStack = createStackNavigator({
// 	Feed: {
// 		screen: Profile,
// 		navigationOptions: ({ navigation }) => {
// 			return {
// 				headerTitle: 'Profile',
// 				headerLeft: (
// 					<Icon
// 						style={{ paddingLeft: 10 }}
// 						name="md-menu"
// 						size={30}
// 						onPress={() => navigation.openDrawer()}
// 					/>
// 				)
// 			};
// 		}
// 	}
// });

// const SettingsStack = createStackNavigator({
// 	Feed: {
// 		screen: Settings,
// 		navigationOptions: ({ navigation }) => {
// 			return {
// 				headerTitle: 'Settings',
// 				headerLeft: (
// 					<Icon
// 						style={{ paddingLeft: 10 }}
// 						name="md-menu"
// 						size={30}
// 						onPress={() => navigation.openDrawer()}
// 					/>
// 				)
// 			};
// 		}
// 	}
// });

// const DashboardTabNavigator = createBottomTabNavigator(
// 	{
// 		Feed: FeedStack,
// 		Profile: ProfileStack,
// 		Settings: SettingsStack
// 	},
// 	{
// 		navigationOptions: ({ navigation }) => {
// 			const { routeName } = navigation.state.routes[navigation.state.index];
// 			return {
// 				header: null,
// 				headerTitle: routeName
// 			};
// 		}
// 	}
// );

// const DashboardStackNavigator = createStackNavigator(
// 	{
// 		DashboardTabNavigator: DashboardTabNavigator
// 	},
// 	{
// 		defaultNavigationOptions: ({ navigation }) => {
// 			return {
// 				headerLeft: (
// 					<Icon
// 						style={{ paddingLeft: 10 }}
// 						name="md-menu"
// 						size={30}
// 						onPress={() => navigation.openDrawer()}
// 					/>
// 				)
// 			};
// 		}
// 	}
// );

>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
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
=======
	Dashboard: DashboardScreen
});

const OtherStackNavigator = createStackNavigator({
	Other: OtherScreen,
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
		initialRouteName: 'Login'
=======
		initialRouteName: 'Other'
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
		// mode: 'modal',
		// headerMode: 'none'
	}
);

const AppContainer = createAppContainer(AppSwitchNavigator);
