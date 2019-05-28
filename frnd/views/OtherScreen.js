import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
<<<<<<< HEAD
	ListView,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import ScrollToTop from 'react-native-scroll-to-top';
=======
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
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d

const REQUEST_URL =
	'http://killpass.godohosting.com/datas/movie/json/top-rated-movies-02.json';

<<<<<<< HEAD
=======
_pressRow = () => {
	console.log('clicked');
};

>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
class OtherScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
<<<<<<< HEAD
=======
			// movies: null,
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		};
	}

<<<<<<< HEAD
	static navigationOptions = {
		title: 'Movie Lists',
		headerStyle: {
			backgroundColor: '#EDDBB4'
		},
		headerTintColor: '#231F20',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};

=======
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
	getMoviesFromApiAsync() {
		return fetch(REQUEST_URL)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
<<<<<<< HEAD
					loaded: true,
					dataSource: this.state.dataSource.cloneWithRows(responseJson)
=======
					// movies: responseJson.movies
					loaded: true,
					dataSource: this.state.dataSource.cloneWithRows(responseJson)
					// dataSource: this.state.dataSource.cloneWithRows(responseJson.movies)
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
			<View style={[styles.container, styles.centerHV]}>
				<ActivityIndicator size="large" />
=======
			<View style={styles.container}>
				<Text>Loading movies...</Text>
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
							movieStoryline: movie.storyline,
							movieImdbRating: movie.imdbRating
						})
					}
				>
					<Card
						// wrapperStyle={{ backgroundColor: '#877D66' }}
						containerStyle={{ borderColor: '#877D66' }}
						style={styles.card}
						image={{ uri: movie.posterurl }}
					>
						{/* <Image
								style={styles.thumbnail}
								source={{ uri: movie.posterurl }}
							/> */}
						<View style={styles.rightContainer}>
							<Text style={styles.title}>
								{movie.year} {movie.title}
							</Text>
							<Text style={styles.title}>{genresMap}</Text>
						</View>
					</Card>
=======
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
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
=======
				<Button
					title="Go To Detail"
					onPress={() => this.props.navigation.navigate('Detail')}
				/>
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
<<<<<<< HEAD
		flex: 1
	},
	centerHV: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		flex: 1,
		borderRadius: 10
=======
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
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
<<<<<<< HEAD
		textAlign: 'center',
		color: '#877D66'
=======
		textAlign: 'center'
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
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
