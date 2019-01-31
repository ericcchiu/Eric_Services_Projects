import React, { Component } from "react";
import ProjectView from "./DisplayComponent/ProjectView.js";
import sampleData from "./sample/sampleData.json";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      currentProject: sampleData[1]
    };
  }

  componentDidMount() {
    // if this.props.id is not passed down and undefined causes 500 internal error
    axios
      .get(
        "http://" + window.location.hostname + ":3000/projects/" + (this.props.id || 10)
      )
      .then(project => {
        this.setState({
          currentProject: project.data
        });
      })
      .catch(error => {
        console.log("Error retrieving projects");
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios
        .get(
          "http://" +
          window.location.hostname +
          ":3000/projects/" +
          this.props.id
        )
        .then(project => {
          this.setState({
            currentProject: project.data
          });
        })
        .catch(error => {
          console.log("Error retrieving projects");
        });
    }
  }

  render() {
    // console.log("AFTER RENDER", this.state.projectList[1]);
    return (
      <div>
        <ProjectView currentProject={this.state.currentProject} />
      </div>
    );
  }
}

export default Project;
