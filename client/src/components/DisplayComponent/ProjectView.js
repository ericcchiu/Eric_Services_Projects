import React from "react";
import './ProjectView.css';

const ProjectView = props => {
  return (
    <div className="ProjectView">
      <div className="ProjectHeaderBox">
        <div className="project-creator-box">
          <div className="project-creator-image">
            <img
              src={props.currentProject.creator_img}
              id="creator-pic"
              alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
            />
          </div>
          <div className="project-creator-name">
            <p id="project-creator">By {props.currentProject.creator}</p>
          </div>
        </div>
        <div className="project-title-box">
          <h1 id="project-title">{props.currentProject.name}</h1>
          <h3 id="project-subtitle">{props.currentProject.blurb}</h3>
        </div>
      </div>


      <div className="project-image-box">
        <div className="full-project-image">
          <img id="project-image" src={props.currentProject.full_img} />
        </div>

        <div className="project-caption-box">
          <div>{props.currentProject.category}</div>
          <div>{props.currentProject.location}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
