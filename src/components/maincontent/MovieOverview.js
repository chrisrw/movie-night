import React, { Component } from 'react';

export class MovieOverview extends Component {
  render() {
    return (
      <div className='overview'>
        <p className='info'>Movie Overview</p>
        <br></br>
        <p>{this.props.thisMovie.overview}</p>
      </div>
    );
  }
}

export default MovieOverview;
