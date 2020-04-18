import React from "react";
import AvatarImg from "../images/Avatar.jpg";
import AvatarImg2 from "../images/Avatar2.jpg";
import CV from "../images/CV -Dmitry Sauliak.pdf";
import {
  makeStyles,
  Typography,
  IconButton,
  Tooltip,
  Hidden,
} from "@material-ui/core";
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
      maxHeight: "unset"
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
      width: '100%'
    }
  },
  button: {
    // height: 74,
    boxShadow: "3px 3px 10px 2px rgba(0,0,0,0.75)",
  },
  iconButton: {
    // height: 50,
    // width: 50,
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
  return (
    <div className={classes.profile}>
      <div className={classes.avatar} />
      <div className={classes.information}>
        <Typography variant="h3">Dmitry Sauliak</Typography>
        <br />
        <Typography variant="h5">React Front-End Developer</Typography>
        <br />
        {/* <Hidden xsDown> */}
        <Typography variant="h6">Commercial Experience: 2 years</Typography>
        <Typography variant="h6">City: Kyiv</Typography>
        <Typography variant="h6">English: Upper-Intermediate</Typography>
        <Typography variant="h6">Age: 24 y.o.</Typography>
        {/* </Hidden> */}
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
          <a href={CV} download="CV - Dmitry Sauliak.pdf">
            <IconButton className={classes.button} size="medium">
              <DownloadIcon className={classes.iconButton} />
            </IconButton>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProfileAvatar;
