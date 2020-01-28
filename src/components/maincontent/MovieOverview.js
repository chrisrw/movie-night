import React, { Component } from 'react'

export class MovieOverview extends Component {
    render() {
        return (
            <div className='overview'>
              <p><p className='info'>Movie Overview</p>
              <br></br>{this.props.thisMovie.overview}</p>
          </div>
            
        )
    }
}

export default MovieOverview
