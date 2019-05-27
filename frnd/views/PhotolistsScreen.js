import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Image,
	ActivityIndicator
} from 'react-native';

class PhotolistsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			page: 1,
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState(
			{
				isLoading: true
			},
			this.getData
		);
	}

	getData = async () => {
		const url =
			'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
			this.state.page;

		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					data: this.state.data.concat(responseJson),
					isLoading: false
				});
			});
	};

	renderRow = ({ item }) => {
		return (
			<View style={styles.item}>
				<Image source={{ uri: item.url }} style={styles.itemImage} />
				<Text style={styles.itemText}>{item.title}</Text>
				<Text style={styles.itemText}>{item.id}</Text>
			</View>
		);
	};

	handleLoadMore = () => {
		// console.warn('handlesdf');
		this.setState(
			{
				page: this.state.page + 1,
				isLoading: true
			},
			this.getData
		);
	};

	renderFooter = () => {
		return this.state.isLoading ? (
			<View style={styles.loader}>
				<ActivityIndicator size="large" />
			</View>
		) : null;
	};

	render() {
		return (
			<FlatList
				style={styles.container}
				data={this.state.data}
				renderItem={this.renderRow}
				keyExtractor={(item, index) => index.toString()}
				onEndReached={this.handleLoadMore}
				onEndReachedThreshold={0}
				ListFooterComponent={this.renderFooter}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	loader: {
		paddingVertical: 10,
		alignItems: 'center'
	},
	item: {
		borderBottomColor: 'gold',
		borderBottomWidth: 1,
		marginBottom: 10
	},
	itemImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover'
	},
	itemText: {
		fontSize: 16,
		padding: 5
	}
});

export default PhotolistsScreen;
