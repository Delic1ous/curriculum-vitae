import React from "react";
import moment from "moment";
import AvatarImg from "../images/Avatar.jpg";
import AvatarImg2 from "../images/Avatar2.jpeg";
import { makeStyles, Typography, IconButton, Tooltip } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import DownloadIcon from "@material-ui/icons/PictureAsPdf";
import { TelegramIcon } from "../icons/Telegram";
import { LinkedInIcon } from "../icons/LinkedIn";

const styles = makeStyles({
  profile: {
    display: "flex",
    width: "100%",
    paddingTop: 24,
    "@media (max-width: 599px)": {
      flexWrap: "wrap",
      paddingLeft: 12,
      paddingRight: 12,
    },
  },
  avatar: {
    width: 182,
    height: 272,
    borderRadius: 8,
    boxShadow: "7px 7px 10px 0px rgba(0,0,0,0.75)",
    backgroundImage: `url(${AvatarImg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    transition: "transform 1s, background-image 0s linear 0.3s",
    "&:hover": {
      transform: "rotateY(180deg)",
      backgroundImage: `url(${AvatarImg2})`,
    },
    "@media (max-width: 599px)": {
      width: "100%",
      height: "60vh",
      marginBottom: 24,
      backgroundPosition: "center",
      "&:hover": {
        transform: "unset",
        backgroundImage: `url(${AvatarImg})`,
      },
    },
  },
  img: {
    objectFit: "contain",
  },
  information: {
    paddingLeft: 32,
    flexGrow: 1,
    maxHeight: 272,
    "@media (max-width: 599px)": {
      paddingLeft: 0,
      maxHeight: "unset",
    },
  },
  socialButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 272,
    "@media (max-width: 425px)": {
      marginTop: 24,
      flexDirection: "row",
      height: 50,
      width: "100%",
    },
  },
  button: {
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
  caption: {
    fontSize: "18px",
    fontWeight: 400,
    opacity: 0.7,
  },
});

const ProfileAvatar = () => {
  const classes = styles();

  const handleEmail = () => {
    window.open("mailto:w.delic1ous.k@gmail.com", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/delic1ous", "_blank");
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/dmitry-sauliak-bb8195170/",
      "_blank"
    );
  };

  const handleCV = () => {
    window.open(
      "https://docs.google.com/document/d/1MfrXND1QjgZVHh8Hkrm5QgJcn2ea6uae9jRivDvqJuE/edit?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className={classes.profile}>
      <div className={classes.avatar} />
      <div className={classes.information}>
        <Typography variant="h3">Dmitry Sauliak</Typography>
        <br />
        <Typography variant="h5">React Front-End Developer</Typography>
        <br />
        <Typography variant="h6">
          <span className={classes.caption}>Commercial Experience:</span>{" "}
          {moment().from("2018", true)}
        </Typography>
        <Typography variant="h6">
          <span className={classes.caption}>City:</span> Kyiv
        </Typography>
        <Typography variant="h6">
          <span className={classes.caption}>English:</span> Upper-Intermediate
        </Typography>
        <Typography variant="h6">
          <span className={classes.caption}>Age:</span>{" "}
          {moment().diff("1996-05-03", "years")} y.o.
        </Typography>
      </div>

      <div className={classes.socialButtons}>
        <Tooltip title="Email">
          <IconButton
            onClick={handleEmail}
            className={classes.button}
            size="medium"
          >
            <MailIcon className={classes.iconButton} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton
            onClick={handleTelegram}
            className={classes.button}
            size="medium"
          >
            <TelegramIcon className={classes.iconButton} />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            onClick={handleLinkedIn}
            className={classes.button}
            size="medium"
          >
            <LinkedInIcon className={classes.iconButton} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download CV">
          <IconButton
            onClick={handleCV}
            className={classes.button}
            size="medium"
          >
            <DownloadIcon className={classes.iconButton} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProfileAvatar;
