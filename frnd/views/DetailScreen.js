import React, { Component } from 'react';
<<<<<<< HEAD
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
	StatusBar,
	SafeAreaView,
	ScrollView
} from 'react-native';
import { Rating } from 'react-native-elements';
import { Header } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import HeaderImageScrollView, {
	TriggeringView
} from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = Header.HEIGHT * 1.38;
const MAX_HEIGHT = 420;
=======
import { View, Text, StyleSheet, Image } from 'react-native';
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d

class DetailScreen extends Component {
	constructor(props) {
		super(props);
<<<<<<< HEAD
		this.state = {
			showNavTitle: false
		};
	}

	static navigationOptions = {
		headerTintColor: '#231F20',
		headerTransparent: true
	};

=======
		this.state = {};
	}

>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
	render() {
		const { navigation } = this.props;
		const moviePoster = navigation.getParam('moviePoster', 'No Poster');
		const movieStoryline = navigation.getParam(
			'movieStoryline',
			'No Storyline'
		);
<<<<<<< HEAD
		const movieTitle = navigation.getParam('movieTitle');
		const movieYear = navigation.getParam('movieYear');
		const movieRating = navigation.getParam('movieRating') / 2;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<HeaderImageScrollView
					maxHeight={MAX_HEIGHT}
					minHeight={MIN_HEIGHT}
					maxOverlayOpacity={0.87}
					minOverlayOpacity={0.38}
					fadeOutForeground
					renderHeader={() => (
						<Image source={{ uri: moviePoster }} style={styles.image} />
					)}
					renderFixedForeground={() => (
						<Animatable.View
							style={styles.navTitleView}
							ref={navTitleView => {
								this.navTitleView = navTitleView;
							}}
						>
							<Text style={styles.navTitle}>{movieTitle}</Text>
						</Animatable.View>
					)}
					overScrollMode="never"
					overlayColor="#EDDBB4"
					// renderForeground={() => (
					// 	<View style={styles.titleContainer}>
					// 		<Text style={styles.imageTitle}>{movieTitle}</Text>
					// 	</View>
					// )}
				>
					<TriggeringView
						style={styles.section}
						onHide={() => this.navTitleView.fadeInUp(200)}
						onDisplay={() => this.navTitleView.fadeOut(100)}
					>
						<Text style={styles.title}>
							<Text style={styles.name}>{JSON.stringify(movieTitle)}</Text>, (
							{movieYear})
						</Text>
					</TriggeringView>
					<View style={[styles.section, { height: 1000 }]}>
						<Text style={styles.sectionTitle}>Overview</Text>
						<Text style={styles.ratingTxt}>
							<Text style={styles.rankingPoint}>{movieRating}</Text>/5
						</Text>
						<Rating
							readonly
							showRating={false}
							ratingCount={5}
							type="star"
							fractions={1}
							imageSize={20}
							startingValue={movieRating}
							style={{ paddingBottom: 25 }}
						/>
						<Text style={styles.sectionContent}>{movieStoryline}</Text>
					</View>
				</HeaderImageScrollView>
=======
		const movieRating = navigation.getParam('movieRating');
		return (
			<View>
				<Image style={styles.thumbnail} source={{ uri: moviePoster }} />
				<Text> {JSON.stringify(movieRating)} </Text>
				<Text>{JSON.stringify(movieStoryline)}</Text>
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
<<<<<<< HEAD
		flex: 1
		// backgroundColor: '#f00'
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	image: {
		height: MAX_HEIGHT,
		width: Dimensions.get('window').width,
		alignSelf: 'stretch',
		resizeMode: 'cover'
	},
	title: {
		fontSize: 20
	},
	name: {
		fontWeight: 'bold'
	},
	section: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		backgroundColor: 'white'
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	sectionContent: {
		fontSize: 16,
		textAlign: 'justify'
	},
	keywords: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
	},
	keywordContainer: {
		backgroundColor: '#999999',
		borderRadius: 10,
		margin: 10,
		padding: 10
	},
	keyword: {
		fontSize: 16,
		color: 'white'
	},
	titleContainer: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageTitle: {
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 24
	},
	navTitleView: {
		height: MIN_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 16,
		opacity: 0,
		borderBottomWidth: 1,
		borderBottomColor: '#dddddd'
	},
	navTitle: {
		color: '#231F20',
		fontSize: 18,
		backgroundColor: 'transparent',
		paddingTop: 30
	},
	sectionLarge: {
		height: 600
	},
	ratingTxt: {
		textAlign: 'center',
		paddingTop: 15,
		paddingBottom: 5
	},
	rankingPoint: {
		fontSize: 22,
		color: '#f1c40e',
		fontWeight: 'bold'
=======
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	thumbnail: {
		width: 290,
		height: 350
>>>>>>> 1320d0f5e1034229df1e890b4b3ecd0631e4089d
	}
});

export default DetailScreen;
