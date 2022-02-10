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
    // maxWidth: 500,
  },
});

const Hobbies = () => {
  const classes = styles();
  return (
    <div className={classes.skills}>
      <Typography className={classes.subheader} variant="h4">
        Hobbies
      </Typography>
      <div className={classes.info}>
        <Typography variant="body1">
          Technologies, gadgets, space, science, books, movies, games, hiking,
          cars, IT.
        </Typography>
      </div>
    </div>
  );
};

export default Hobbies;
