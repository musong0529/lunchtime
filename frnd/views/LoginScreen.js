import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, AlertIOS } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';
import firebase from 'firebase';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			location: '',
			userId: '',
			error: false
		};
	}

	static navigationOptions = {
		// headerTintColor: '#231F20',
		headerTransparent: true
	};

	writeUserData = (userId, name, age, location) => {
		if (this.state.userId === '') {
			AlertIOS.alert('Please enter your userId!');
		} else {
			firebase
				.database()
				.ref('users/' + this.state.userId)
				.set({
					userName: this.state.name,
					userAge: this.state.age,
					userLocation: this.state.location
				})
				.then(() => {
					this.props.navigation.navigate('Dashboard');
					this.setState({
						name: '',
						age: '',
						location: '',
						userId: ''
					});
				})
				.catch(error => {
					console.error(error);
				});
		}
	};

	isUserEqual = (googleUser, firebaseUser) => {
		if (firebaseUser) {
			var providerData = firebaseUser.providerData;
			for (var i = 0; i < providerData.length; i++) {
				if (
					providerData[i].providerId ===
						firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					providerData[i].uid === googleUser.getBasicProfile().getId()
				) {
					// We don't need to reauth the Firebase connection.
					return true;
				}
			}
		}
		return false;
	};

	onSignIn = googleUser => {
		console.log('Google Auth Response', googleUser);
		// We need to register an Observer on Firebase Auth to make sure auth is initialized.
		var unsubscribe = firebase.auth().onAuthStateChanged(
			function(firebaseUser) {
				unsubscribe();
				// Check if we are already signed-in Firebase with the correct user.
				if (!this.isUserEqual(googleUser, firebaseUser)) {
					// Build Firebase credential with the Google ID token.
					var credential = firebase.auth.GoogleAuthProvider.credential(
						googleUser.idToken,
						googleUser.accessToken
					);
					// Sign in with credential from the Google user.
					firebase
						.auth()
						.signInAndRetrieveDataWithCredential(credential)
						.then(function(result) {
							console.log('User signed in');
							if (result.additionalUserInfo.isNewUser) {
								firebase
									.database()
									.ref('/users/' + result.user.uid)
									.set({
										gmail: result.user.email,
										profile_picture: result.additionalUserInfo.profile_picture,
										locale: result.additionalUserInfo.profile.locale,
										first_name: result.additionalUserInfo.profile.given_name,
										last_name: result.additionalUserInfo.profile.family_name,
										created_at: Date.now()
									})
									.then(function(snapshot) {});
							} else {
								firebase
									.database()
									.ref('/users/' + result.user.uid)
									.update({
										last_logged_in: Date.now()
									});
							}
						})
						.catch(function(error) {
							// Handle Errors here.
							var errorCode = error.code;
							var errorMessage = error.message;
							// The email of the user's account used.
							var email = error.email;
							// The firebase.auth.AuthCredential type that was used.
							var credential = error.credential;
							// ...
						});
				} else {
					console.log('User already signed-in Firebase.');
				}
			}.bind(this)
		);
	};

	signInWithGoogleAsync = async () => {
		try {
			const result = await Expo.Google.logInAsync({
				// androidClientId: your_client_id_here,
				behavior: 'web',
				iosClientId:
					'1064911867996-8ckiiaatf1cflapnqcaupf7sijdjpnrj.apps.googleusercontent.com',
				scope: ['profile', 'email']
			});
			if (result.type === 'success') {
				this.onSignIn(result);
				return result.accessToken;
			} else {
				return {
					cancelled: true
				};
			}
		} catch (e) {
			return {
				error: true
			};
		}
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				{/* <Text h2 style={styles.logo}>
					LoGo
				</Text>
				<Button
					type="solid"
					title="Google Sign in"
					buttonStyle={{ width: '100%' }}
					onPress={() => this.signInWithGoogleAsync()}
				/> */}

				<View style={styles.addInput}>
					<Text h3>Add User</Text>
					<Input
						value={this.state.userId}
						placeholder="UserId"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={userId => this.setState({ userId })}
					/>
					<Input
						value={this.state.name}
						placeholder="Name"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={name => this.setState({ name })}
					/>
					<Input
						value={this.state.age}
						keyboardType="numeric"
						placeholder="Age"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={age => this.setState({ age })}
					/>
					<Input
						value={this.state.location}
						placeholder="Location"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={location => this.setState({ location })}
					/>
					<Button
						title="Add"
						onPress={this.writeUserData}
						buttonStyle={{ width: '100%', marginTop: 20 }}
					/>
					<Button
						title="Go To MovieLists"
						onPress={() => this.props.navigation.navigate('Other')}
						buttonStyle={{ marginTop: 20 }}
					/>
					<Button
						title="Go To PhotoLists"
						onPress={() => this.props.navigation.navigate('Photolists')}
						buttonStyle={{ marginTop: 20 }}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
		// backgroundColor: '#fafafa',
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	addInput: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	logo: {
		marginBottom: 10
	}
});

export default LoginScreen;
