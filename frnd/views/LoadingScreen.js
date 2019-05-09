import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {
	componentDidMount() {
		this.checkIfLoggedIn();
	}

	checkIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged(user => {
			console.log('Auth State Changed Called');
			if (user) {
				this.props.navigation.navigate('Dashboard');
			} else {
				this.props.navigation.navigate('Login');
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default LoadingScreen;
