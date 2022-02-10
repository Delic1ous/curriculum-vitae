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
          Good knowledge of modern JavaScript and trending frameworks. <p />
          Proficiency in React (including hooks), Typescript, Redux, Apollo
          GraphQL, React Hook Forms, REST, WebSockets , NodeJS, Mobx-State-Tree,
          React Router, Material UI, JSS, Emotion, Git, Webpack, Parcel, Make,
          Docker, Recharts, Lottie, React Native.
          <p />
          Experience with React Native, Electron.
        </Typography>
      </div>
    </div>
  );
};

export default Skills;
