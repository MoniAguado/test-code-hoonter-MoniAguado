import React, { Component } from 'react';
import Controller from './Controller';
import List from './List';

import { Link, Route, Switch } from 'react-router-dom';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }


  render() {
    return (
      <div className="begin">
        <Switch>
          <Route exact path='/' render={() =>
            <Controller
              onSubmit={this.handleSubmit}/>}
          />
          <Route path='/controller' render={() =>
            <Controller />}
          />
        </Switch>



        </div>
    );
  }
}

export default App;
