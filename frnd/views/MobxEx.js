import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react/native';
// import NewItem from

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}

export default TodoList;
