import React, { Component } from 'react'

export class Popularity extends Component {
    render() {
        return (
            <div>
           <p> Popularity: {this.props.thisMovie.popularity}</p>
        </div>
        )
    }
}

export default Popularity
