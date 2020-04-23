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
  },
});

const Skills = () => {
  const classes = styles();
  return (
    <div className={classes.skills}>
      <Typography className={classes.subheader} variant="h4">
        Skills
      </Typography>
      <div className={classes.info}>
        <Typography variant="body1">
          Good knowledge of modern JavaScript and trending frameworks. <br />
          Proficiency in React (including hooks), Typescript, Redux, Apollo GraphQL, REST, WebSockets, Electron, NodeJS, Mobx-State-Tree, Routing, Material UI, JSS, Git, Utilities, Webpack.
        </Typography>
      </div>
    </div>
  );
};

export default Skills;
