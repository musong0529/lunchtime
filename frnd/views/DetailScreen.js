import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class DetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { navigation } = this.props;
		const moviePoster = navigation.getParam('moviePoster', 'No Poster');
		const movieStoryline = navigation.getParam(
			'movieStoryline',
			'No Storyline'
		);
		const movieRating = navigation.getParam('movieRating');
		return (
			<View>
				<Image style={styles.thumbnail} source={{ uri: moviePoster }} />
				<Text> {JSON.stringify(movieRating)} </Text>
				<Text>{JSON.stringify(movieStoryline)}</Text>
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
	},
	thumbnail: {
		width: 290,
		height: 350
	}
});

export default DetailScreen;
