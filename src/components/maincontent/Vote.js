import React, { Component } from "react";

export class Vote extends Component {
  render() {
    return (
      <div>
        <p>Vote Average{this.props.thisMovie.vote_average}</p>
        <p>Vote Count {this.props.thisMovie.vote_count}</p>
      </div>
    );
  }
}

export default Vote;
