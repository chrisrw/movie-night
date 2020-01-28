import React, { Component } from 'react'

export class Popularity extends Component {
    render() {
        
        return (
          <div className="popularity">
            <p> Popularity: {this.props.thisMovie.popularity}</p>
            <br></br>
            <p>How is popularity Measured?</p>
            <br></br>
            <ul>
              <li>Number of votes for the day.</li>
              <li>Number of views for the day.</li>
              <li>
                Number of users who marked it as a "favourite" for the day.
              </li>
              <li>Number of total votes.</li>
              <li>Previous days score.</li>
            </ul>
          </div>
        );
    }
}

export default Popularity
