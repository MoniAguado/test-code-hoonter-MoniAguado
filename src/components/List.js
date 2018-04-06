import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Control, Form } from 'react-redux-form';

class List extends Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }
  render() {
    return(
      <div className="list">
        {/* <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
          <label>Pon un correo y pulsa enviar</label>
          <Control.text model=".name" />
          <button>Enviar</button>
        </Form> */}
        <h2 className="list__title">Pon un correo y pulsa enviar</h2>
        <input className="list__email" placeholder="Email"></input>
        <input className="button button__list" type="submit" value="Enviar"></input>

        <ul className="result__list">
          <li className="result__list--team">
            <p>{this.props.name} {this.props.surname}</p>
            <p>{this.props.team}</p>
            <button>Eliminar</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;
