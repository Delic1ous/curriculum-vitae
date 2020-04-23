import React, { useEffect } from "react";
import moment from "moment";
import { makeStyles, Container } from "@material-ui/core";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

const styles = makeStyles({
  container: {
    background: "#292929",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    boxShadow: "0px 0px 16px 2px rgba(0,0,0,0.75)",
  },
  "@global": {
    ".App": {
      background: "#292929",
    },
    p: {
      textAlign: "justify",
    },
    a: {
      color: "#dadada",
      textDecoration: "none",
      "&:hover": {
        color: "#a06dd6",
      },
    },
  },
});

const linkWithoutText = `https://api.telegram.org/${process.env.REACT_APP_TBK}/sendMessage?chat_id=@${process.env.REACT_APP_CN}&text=`;

const CV = () => {
  useEffect(() => {
    fetch(
      fetch(
        linkWithoutText + decodeURI(`New view of CV from ${navigator.platform}`)
      )
    );

    window.addEventListener("unload", function (e) {
      navigator.sendBeacon(
        linkWithoutText +
          decodeURI(
            `CV was closed after ${moment
              .duration(timer, "seconds")
              .asMinutes()
              .toFixed(2)} minutes`
          )
      );
    });
  }, []);

  let timer = 0;
  setInterval(() => {
    timer++;
  }, 1000);

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
