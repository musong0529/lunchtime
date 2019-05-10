import React, { Component } from 'react';
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
import { Header } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import HeaderImageScrollView, {
	TriggeringView
} from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = Header.HEIGHT * 1.5;
const MAX_HEIGHT = 420;

class DetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNavTitle: false
		};
	}

	static navigationOptions = {
		headerTintColor: '#231F20',
		headerTransparent: true
	};

	render() {
		const { navigation } = this.props;
		const moviePoster = navigation.getParam('moviePoster', 'No Poster');
		const movieStoryline = navigation.getParam(
			'movieStoryline',
			'No Storyline'
		);
		const movieRating = navigation.getParam('movieRating');
		const movieTitle = navigation.getParam('movieTitle');
		const movieYear = navigation.getParam('movieYear');
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<HeaderImageScrollView
					maxHeight={MAX_HEIGHT}
					minHeight={MIN_HEIGHT}
					maxOverlayOpacity={1}
					minOverlayOpacity={0}
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
							<Text style={styles.navTitle}>{JSON.stringify(movieTitle)}</Text>
						</Animatable.View>
					)}
					overScrollMode="never"
					overlayColor="#EDDBB4"
					renderForeground={() => (
						<View style={styles.titleContainer}>
							<Text style={styles.imageTitle}>
								{JSON.stringify(movieTitle)}
							</Text>
						</View>
					)}
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
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Overview</Text>
						<Text style={styles.sectionContent}>
							{JSON.stringify(movieStoryline)}
						</Text>
					</View>
				</HeaderImageScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f00'
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
		opacity: 0
	},
	navTitle: {
		color: '#231F20',
		fontSize: 18,
		backgroundColor: 'transparent',
		paddingTop: 20
	},
	sectionLarge: {
		height: 600
	}
});

export default DetailScreen;
