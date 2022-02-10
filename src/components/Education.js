import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  skills: {
    width: "100%",
    marginTop: 24,
  },
  subheader: {
    width: "100%",
    padding: 12,
    borderBottom: "1px solid white",
  },
  info: {
    padding: 12,
    maxWidth: 500,
  },
});

const Education = () => {
  const classes = styles();
  return (
    <div className={classes.skills}>
      <Typography className={classes.subheader} variant="h4">
        Education
      </Typography>
      <div className={classes.info}>
        <Typography variant="body1">
          Informational Technologies learned mostly by self education from
          courses, literature and official documentation since high school.
        </Typography>
        <br />
        <Typography variant="body1">
          National University of Dragomanov <br />
          September 2014 - June 2018
        </Typography>
      </div>
    </div>
  );
};

export default Education;
