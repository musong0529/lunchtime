import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import firebase from 'firebase';

class DashboardScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			location: '',
			userId: '',
			items: []
		};
	}
	static navigationOptions = {
		title: 'User Lists'
	};

	// componentDidMount() {
	// 	firebase
	// 		.database()
	// 		.ref('users')
	// 		.on('value', snapshot => {
	// 			let data = snapshot.val();
	// 			let items = Object.values(data);
	// 			console.log(items);
	// 		});
	// }

	render() {
		return (
			<View style={styles.container}>
				<Text> DashboardScreen </Text>
				{/* <Button title="sign out" onPress={() => firebase.auth().signOut()} /> */}
				<Button
					title="Go to Add User"
					onPress={() => this.props.navigation.navigate('Other')}
				/>
				{/* <Text>{this.state.items}</Text> */}
				{/* {this.state.items.length > 0 ? (
					<Text>{this.state.items}</Text>
				) : (
					<Text>No Items</Text>
				)} */}
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

export default DashboardScreen;
