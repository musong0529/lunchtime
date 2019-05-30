import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	ListView,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions
} from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import InfiniteScrollView from 'react-native-infinite-scroll-view';
// import ScrollToTop from 'react-native-scroll-to-top';

const REQUEST_URL =
	'http://killpass.godohosting.com/datas/movie/json/top-rated-movies-02.json';

class OtherScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		};
	}

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

	getMoviesFromApiAsync() {
		return fetch(REQUEST_URL)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					loaded: true,
					dataSource: this.state.dataSource.cloneWithRows(responseJson)
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	componentDidMount() {
		this.getMoviesFromApiAsync();
	}

	renderLoadingView = () => {
		return (
			<View style={[styles.container, styles.centerHV]}>
				<ActivityIndicator size="large" />
			</View>
		);
	};

	renderMovie2 = movie => {
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
					style={styles.card}
					onPress={() =>
						this.props.navigation.navigate('Detail', {
							movieTitle: movie.title,
							movieYear: movie.year,
							movieGenres: movie.genres,
							movieRating: movie.imdbRating,
							moviePoster: movie.posterurl,
							movieActors: movie.actors,
							movieStoryline: movie.storyline,
							movieImdbRating: movie.imdbRating
						})
					}
				>
					<Image style={styles.poster} source={{ uri: movie.posterurl }} />
					<View style={styles.posterDesc}>
						<Text style={styles.title}>
							{movie.year} {movie.title}
						</Text>
						<Text style={styles.genere}>{genresMap}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<SafeAreaView>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderMovie2}
					style={styles.listView}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centerHV: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#F1F1F1'
	},
	poster: {
		width: Dimensions.get('window').width,
		alignSelf: 'stretch',
		resizeMode: 'cover',
		height: 200,
		marginLeft: -20
	},
	posterDesc: {
		paddingTop: 15,
		paddingBottom: 10
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center'
	},
	genere: {
		fontSize: 16,
		textAlign: 'center',
		color: '#877D66'
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
