import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import List from './List';


class Controller extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="container">
        <Link to='/list'>
          <button className="button button__begin" onSubmit={this.props.handleSubmit}>Comenzar</button>
        </Link>
      </div>
    )
  }
}

export default Controller;
