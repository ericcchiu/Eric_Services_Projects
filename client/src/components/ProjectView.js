import React, { Component } from 'react'
import CreatorInfoDisplay from './CreatorInfoDisplay';


class ProjectView extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>Project title</h1>
        <h3>Project descripton </h3>
        <CreatorInfoDisplay />
      </div>
    )
  }
}

export default ProjectView; 

