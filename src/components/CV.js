import React, { useEffect } from "react";
import { makeStyles, Container } from "@material-ui/core";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

const styles = makeStyles({
  container: {
    background: "#1f1f1f",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    boxShadow: "inset 0px 0px 16px 2px rgba(0,0,0,0.75)",
  },
  "@global": {
    ".App": {
      background: "#1f1f1f",
    },
    p: {
      textAlign: "justify"
    },
    a: {
      color: "white",
      textDecoration: "none",
      "&:hover": {
        color: "#a06dd6",
      },
    },
  },
});

const CV = () => {
  useEffect(() => {
    fetch(`https://api.telegram.org/bot1168038246:AAFYhqfITUVNcIiEoXgmWPGMaXDmKmf14RU/sendMessage?chat_id=@jb2900&text=New%20View%20of%20CV`)
  }, [])
  const classes = styles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Profile />
      <Skills />
      <Experience />
      <Education />
      <Hobbies />
    </Container>
  );
};

export default CV;
