import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const ProjectView = props => {
  // const styles = {
  //   root: {
  //     width: "100%",
  //     maxWidth: 500
  //   }
  // };
  return (
    <div className="ProjectView">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item>
          <div className="CreatorInfoDisplay">
            <img
              src={props.currentProject.creator_img}
              alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
            />
            <div>
              <Typography>By {props.currentProject.creator}</Typography>
            </div>
          </div>
        </Grid>

        <div className="ProjectHeader">
          <Typography component="h6" variant="h6" gutterBottom>
            {props.currentProject.name}
          </Typography>
          <Typography component="subtitle1" variant="subtitle1" gutterBottom>
            {props.currentProject.blurb}
          </Typography>
        </div>
      </Grid>

      <div className="ProjectImage">
        <div className="full-project-image">
          <img src={props.currentProject.full_img} />
        </div>

        <div className="full-project-caption">
          <span>{props.currentProject.category}</span>
          <span>{props.currentProject.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
