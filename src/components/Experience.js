import React from "react";
import {
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Box,
  Hidden,
} from "@material-ui/core";

const styles = makeStyles({
  experience: {
    width: "100%",
    marginTop: 24,
  },
  subheader: {
    width: "100%",
    padding: 12,
    borderBottom: "1px solid white",
    // borderRadius: 5,
  },
  root: {
    flexGrow: 1,
    // backgroundColor: "#1f1f1f",
    display: "flex",
    minHeight: 220,
    borderBottom: `1px solid white`,
  },
  tabs: {
    minWidth: 270,
    borderRight: `1px solid white`,
  },
  indicator: {
    backgroundColor: "#a06dd6",
    width: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mobile: {
    display: "none",
    padding: 12,
    "@media (max-width: 599px)": {
      display: "block",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

const Experience = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.experience}>
      <Typography className={classes.subheader} variant="h4">
        Experience
      </Typography>
      <div className={classes.root}>
        <Hidden xsDown>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            classes={{ indicator: classes.indicator }}
          >
            <Tab
              label={
                <div>
                  <Typography variant="subtitle1">
                    August 2019 - April 2020
                  </Typography>
                  <Typography color="primary" variant="body1">
                    Moneyball
                  </Typography>
                </div>
              }
            />
            <Tab
              label={
                <div>
                  <Typography variant="subtitle1">
                    September 2018 - July 2019
                  </Typography>
                  <Typography color="primary" variant="body1">
                    Vitamin D
                  </Typography>
                </div>
              }
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <a
              href="https://www.linkedin.com/company/moneyball-com-au/"
              target="blank"
            >
              <Typography variant="h6">Moneyball</Typography>
            </a>
            <br />
            <Typography variant="body1" className={classes.history}>
              Worked as React Front-End Developer on rewriting the existing site
              from Angular to React, and was leading developer with implementing
              new integrations, so had to work with a few different codebases at
              the same time. Most used technologies were React, Typescript,
              Redux, Apollo GraphQL, React Router, Material UI and plenty of
              integrations.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <a href="https://www.linkedin.com/company/vitd/" target="blank">
              <Typography variant="h6">Vitamin D</Typography>
            </a>
            <br />
            <Typography variant="body1" className={classes.history}>
              React Front-End Developer, worked on different projects, from
              administrating panels to encrypted messenger. Have been
              responsible for providing best UX and front-end part of
              applications. Most used technologies were React, React Router,
              Redux, Mobx, Apollo GraphQL, Material UI.
            </Typography>
          </TabPanel>
        </Hidden>
        <div className={classes.mobile}>
          <div>
            <a
              href="https://www.linkedin.com/company/moneyball-com-au/"
              target="blank"
            >
              <Typography variant="h6">Moneyball</Typography>
              <Typography variant="subtitle1">
                August 2019 - April 2020
              </Typography>
            </a>
            <br />
            <Typography variant="body1" className={classes.history}>
              Worked as React Front-End Developer on rewriting the existing site
              from Angular to React, and was leading developer with implementing
              new integrations, so had to work with a few different codebases at
              the same time. Most used technologies were React, Typescript,
              Redux, Apollo GraphQL, React Router, Material UI and plenty of
              integrations.
            </Typography>
          </div>
          <br />
          <br />
          <div>
            <a href="https://www.linkedin.com/company/vitd/" target="blank">
              <Typography variant="h6">Vitamin D</Typography>
              <Typography variant="subtitle1">
                September 2018 - July 2019
              </Typography>
            </a>
            <br />
            <Typography variant="body1" className={classes.history}>
              React Front-End Developer, worked on different projects, from
              administrating panels to encrypted messenger. Have been
              responsible for providing best UX and front-end part of
              applications. Most used technologies were React, React Router,
              Redux, Mobx, Apollo GraphQL, Material UI.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
