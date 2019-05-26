import firebase from 'firebase';
export const addItem = (item, age, location) => {
	firebase
		.database()
		.ref('/items')
		.push({
			name: item,
			age: age,
			location: location
		});
};
