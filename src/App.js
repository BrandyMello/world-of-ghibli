import React, { Component } from 'react';
// import * as apiCalls from './apiCalls'
import './App.css';
import FilmsDisplay from './containers/FilmsDisplay/FilmsDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    }
  }

  componentDidMount = () => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(films => this.setState({films: films}))
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div>
        <h1>World of Ghibli</h1>
        <FilmsDisplay films={this.state.films}/>
      </div>
    )
  }
}

export default App;


