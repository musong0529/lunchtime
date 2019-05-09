import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	Button,
	ListView,
	TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
	routeName: 'Other',
	params: {},

	// navigate can have a nested navigate action that will be run inside the child router
	action: NavigationActions.navigate({ routeName: 'Detail' })
});

const REQUEST_URL =
	'http://killpass.godohosting.com/datas/movie/json/top-rated-movies-02.json';

_pressRow = () => {
	console.log('clicked');
};

class OtherScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			// movies: null,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		};
	}

	getMoviesFromApiAsync() {
		return fetch(REQUEST_URL)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					// movies: responseJson.movies
					loaded: true,
					dataSource: this.state.dataSource.cloneWithRows(responseJson)
					// dataSource: this.state.dataSource.cloneWithRows(responseJson.movies)
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	componentDidMount() {
		this.getMoviesFromApiAsync();
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>Loading movies...</Text>
			</View>
		);
	}

	renderMovie2(movie) {
		const genresMap = movie.genres.map((genre, i, arr) => {
			if (arr.length - 1 === i) {
				return genre;
			} else {
				return genre + ',';
			}
		});

		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.container}
					onPress={() =>
						this.props.navigation.navigate('Detail', {
							movieTitle: movie.title,
							movieYear: movie.year,
							movieGenres: movie.genres,
							movieRating: movie.imdbRating,
							moviePoster: movie.posterurl,
							movieActors: movie.actors,
							movieStoryline: movie.storyline
						})
					}
				>
					<Image style={styles.thumbnail} source={{ uri: movie.posterurl }} />
					<View style={styles.rightContainer}>
						<Text style={styles.title}>
							{movie.year} {movie.title}
						</Text>
						<Text style={styles.title}>{genresMap}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<SafeAreaView>
				<Button
					title="Go To Detail"
					onPress={() => this.props.navigation.navigate('Detail')}
				/>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderMovie2.bind(this)}
					style={styles.listView}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rightContainer: {
		flex: 1
	},
	thumbnail: {
		width: 53,
		height: 81
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center'
	},
	year: {
		textAlign: 'center'
	},
	listView: {
		paddingTop: 20
		// backgroundColor: 'red'
	}
});

export default OtherScreen;
