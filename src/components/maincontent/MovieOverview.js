import React, { Component } from 'react'

export class MovieOverview extends Component {
    render() {
        return (
            <div className='overview'>
              <p>Movie Overview:  {this.props.thisMovie.overview}</p>
          </div>
            
        )
    }
}

export default MovieOverview
