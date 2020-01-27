import React, { Component } from 'react'

export class PosterImage extends Component {
    render() {
        return (
          <div className='mainPosterGrid'>
            <img className='mainPoster' alt={this.props.thisMovie.title} src={`https://image.tmdb.org/t/p/w500/${this.props.thisMovie.poster_path}`}>
            </img>
          </div>
        );
    }
}

export default PosterImage
