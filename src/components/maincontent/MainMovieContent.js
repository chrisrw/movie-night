import React, { Component } from 'react';
import MovieOverview from './MovieOverview';
import Vote from './Vote';
import MovieTitle from './MovieTitle';
import PosterImage from './PosterImage';
import Popularity from './Popularity';
import './mainContent.css';

export class MainMovieContent extends Component {
  render() {
    let movieInfo = this.props.results.find(
      movie => movie.title === this.props.match.params.movieTitle
    );
    let thisMovie = { ...movieInfo };
    return (
      <div className='mainContainer'>
        <MovieTitle className='title' thisMovie={thisMovie} />
        <MovieOverview thisMovie={thisMovie} />
        <Vote thisMovie={thisMovie} />
        <PosterImage thisMovie={thisMovie} />
        <Popularity thisMovie={thisMovie} />
      </div>
    );
  }
}

export default MainMovieContent;
