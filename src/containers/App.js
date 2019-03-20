import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
// import { potterbots } from './potterbots'; **instead of importing this here__type new functionality in componentDidMount
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			potterbots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		//this.setState({ potterbots: potterbots}); instead of this, you can fetch some data in  jsonplaceholder/typicode.com/user
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ potterbots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { potterbots, searchfield } = this.state;
		const filteredBots = potterbots.filter(potterbot =>{
			return potterbot.name.toLowerCase().includes(searchfield.toLowerCase());
		})	
		return !potterbots.length ? 
			<h1>Loading</h1> :
		 (
			<div className='tc'>
			<h1 className='f1'>School of Witchcraft and Wizardry</h1>  
			<Searchbox searchchange={this.onSearchChange}/>
			<Scroll> 
				<CardList potterbots={filteredBots} />
			</Scroll>
			</div>
		);
	}
}

			
export default App;