import React, { Component } from 'react'
import sampleData from '../../sample/sampleData.json';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
     projectList: [],
     currentProject: {

     }
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome to Jumpstart38</h1>
      </div>
    )
  }
}

export default App; 
