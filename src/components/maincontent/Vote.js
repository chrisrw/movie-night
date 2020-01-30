import React, { Component } from "react";

export class Vote extends Component {
  render() {
    return (
      <div className="vote">
          <div className="info">Vote Average</div>
          <div>{this.props.thisMovie.vote_average}</div>
        
        <div className="info">Vote Count</div>
        <div>{this.props.thisMovie.vote_count}</div>
      </div>
    );
  }
}

export default Vote;
