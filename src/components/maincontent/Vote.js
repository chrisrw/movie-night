import React, { Component } from "react";

export class Vote extends Component {
  render() {
    return (
      <div className="vote">
        <p>
          <p className="info">Vote Average</p>{" "}
          {this.props.thisMovie.vote_average}
        </p>
        <p>
        <p className="info">Vote Count</p>{this.props.thisMovie.vote_count}
        </p>
      </div>
    );
  }
}

export default Vote;
