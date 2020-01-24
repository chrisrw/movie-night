import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class SideContent extends Component {
  
    render() {
          let results = this.props.results;
    let sideView = results.map((movie, index) => {
        return (
            <div key={index} style={{textAlign:'center', border:'1px solid black'}}>
                <Link to={`${movie.title}`}>
                <h3>{movie.title}</h3>
                <img className='sideMoviePoster' alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                </Link>
            </div>
        )
    })
        return (
            <div>
                {sideView}
                <br></br>
            </div>
        )
    }
}

export default SideContent
