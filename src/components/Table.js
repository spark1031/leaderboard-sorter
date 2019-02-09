import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps() {

	}

	// complete the comparators
	compareByAge(a, b) {

	}

	compareByName(a, b) {

	}

	compareByPoints(a, b) {

	}

	compareByRank(a, b) {

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
			</table>
		</div>)
	}
}

