import React from "react";
// import Typography from "@material-ui/core/Typography";

const ProjectView = props => {
  const styles = {
    ProjectViewStyle: {
      paddingTop: "10px",
      paddingRight: "20px",
      paddingBottom: "10px",
      paddingLeft: "20px"
    },
    CreatorStyle: {
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "10px",
      color: "slategray"
    },
    HeaderStyle: {
      padding: "15px"
    },

    ProjectImageStyle: {
      padding: "10px"
    }
  };
  return (
    <div className="ProjectView" style={styles.ProjectViewStyle}>
      <div className="ProjectCreatorImage" style={styles.CreatorStyle}>
        <img
          src={props.currentProject.creator_img}
          alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
        />
        <div className="ProjectCreatorName" style={styles.CreatorStyle}>
          <div>By {props.currentProject.creator}</div>
        </div>
      </div>

      <div className="ProjectHeader" style={styles.HeaderStyle}>
        <h1>{props.currentProject.name}</h1>
        <h3>{props.currentProject.blurb}</h3>
      </div>

      <div className="ProjectImage" style={styles.ProjectImageStyle}>
        <div className="full-project-image">
          <img src={props.currentProject.full_img} />
        </div>

        <div className="full-project-caption">
          <div>{props.currentProject.category}</div>
          <div>{props.currentProject.location}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
