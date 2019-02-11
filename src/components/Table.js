import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		};
	}

	// complete the comparators
	compareByAge(a, b) {
		let personA = a.age;
		let personB = b.age;
		return personA - personB;
	}

	compareByName(a, b) {
		let personA = a.name.toLowerCase();
		let personB = b.name.toLowerCase();
		return (personA < personB) ? -1 : (personA > personB) ? 1 : 0;
	}

	compareByPoints(a, b) {
		let personA = a.points;
		let personB = b.points;
		return personA - personB;
	}

	compareByRank(a, b) {
		let personA = a.rank;
		let personB = b.rank;
		return personA - personB;
	}

	sortUsers() {
		const { sortBy } = this.props;
		const { users } = this.state;
		if (sortBy === "age") {
			users.sort(this.compareByAge);
		} else if (sortBy === "name") {
			users.sort(this.compareByName);
		} else if (sortBy === "points") {
			users.sort(this.compareByPoints);
		} else if (sortBy === "rank") {
			users.sort(this.compareByRank);
		}
	}

	renderUsers() {
		this.sortUsers();
		return (
			<tbody>
				{this.state.users.map(user => (
					<tr key={user.name}>
						<td component="th" scope="row">
							{user.age}
						</td>
						<td align="right">{user.name}</td>
						<td align="right">{user.points}</td>
						<td align="right">{user.rank}</td>
					</tr>
				))}
			</tbody>
		);
	}

	render() {
		const user = this.state.users[0];
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				{this.renderUsers()}
			</table>
		</div>)
	}
}

