import React, { Component } from 'react'
import "./App.css";
import SideContent from './components/sidecontent/SideContent';
import {Route, Switch, Link} from 'react-router-dom'
import MainMovieContent from './components/maincontent/MainMovieContent'

const apiInfo = {
  key: process.env.REACT_APP_MOVIE_NIGHT_KEY,
  limit: 20,
}
export class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    results: []
  };
}

componentDidMount() {
  fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiInfo.key}&language=en-US&page=1`
    
  )
    .then(res => res.json())
    .then(results => {
      this.setState({
        results:results.results
      });
    });
    
}

render() {
  return (
    <div className="gridContainer">
      <header className="header">
        <nav>
          <h2>Movie Night</h2>
        </nav>
      </header>
      <div className="mainContent">
        main content
        <MainMovieContent/>
      </div>
      <div className="sideContent">
        <SideContent results={this.state.results} />
      </div>
    </div>
  );
}
}

export default App
