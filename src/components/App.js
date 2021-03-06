import React, { Component } from 'react';
import Controller from './Controller';
import List from './List';

import { Link, Route, Switch } from 'react-router-dom';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { combineForms } from 'react-redux-form';

import '../App.css';

// const initialUser = { name: '' };
//
// const store = createStore(combineForms({
//   user: initialUser,
// }));

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      pilots: []
    }
  }

  componentDidMount(){
		fetch('https://ergast.com/api/f1/2013/driverStandings.json')
		.then(response => response.json())
		.then(json => {
			this.setState({pilots: json});
				console.log(this.state.pilots)
		});
	}

  printPilots() {
  		const pilotsInEvolution = this.state.pilots;
  		console.log('pilotsInEvolution', pilotsInEvolution)
  		return (
  			<List pilotsbugs = {pilotsInEvolution}/>
  		);
  	}


  handleClick(e){
    e.preventDefault();
  }


  render() {
    const pilots = this.state.pilots

    return (
      <div className="begin">
        <Switch>
          <Route exact path='/' render={() =>
            <Controller
              onClick={this.handleClick}/>}
          />
          <Route path='/list' render={() =>
            <List name = {pilots.givenName}
              surname = {pilots.familyName}
              team = {pilots.name}/>
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
