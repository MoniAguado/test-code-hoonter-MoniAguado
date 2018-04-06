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

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      pilots: []
    }
  }

  componentDidMount(){
		fetch('http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK%22,method:%20%27JSONP%27')
		.then(response => response.json())
		.then(json => {
			this.setState({pilots: json});
				console.log(this.state.pilots)
		});

	}

  handleSubmit(e){
    e.preventDefault();
  }


  render() {
    const pilots = this.state.pilots

    return (
      <div className="begin">
        <Switch>
          <Route exact path='/' render={() =>
            <Controller
              onSubmit={this.handleSubmit}/>}
          />
          <Route path='/list' render={() =>
            <ul className="pilots__list">
              <li className="container__pilots">
                {pilots.map (pilot =>
                  <List name = {pilots.givenName}
                    surname = {pilots.familyName}
                    team = {pilots.name}/>
                )}

              </li>
            </ul>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
