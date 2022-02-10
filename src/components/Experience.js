import React from "react";
import {
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Box,
  Hidden,
} from "@material-ui/core";
import moment from "moment";

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

const previousJobs = [
  {
    name: "Uprise Health",
    link: "https://www.linkedin.com/company/uprisehealth",
    period: `December 2020 - ${moment().format("MMMM YYYY")}`,
    experience:
      "Worked as the lead frontend developer. Started a new project from scratch based on React, Typescript, Material UI and Apollo GraphQL. Was involved in all product development processes with large amounts of communication with other teams about upcoming features, API implementation (especially GraphQL schema), designs, cons of current approach and advising better solutions to solve the case. Also was one of the developers on an existing company project.",
  },
  {
    name: "Broken Build",
    link: "https://www.linkedin.com/company/broken-build/",
    period: "May 2020 - November 2020",
    experience:
      "Worked as React Front-End Developer (partly fullstack) on supporting existing projects and writing the new ones. Project was specific to Atlassian Jira, so it required a lot of attention to think about how it should be done specifically in this integration set. Technical stack for existing projects is React, Typescript, Redux, Redux-Saga, Atlaskit and the new projects without Redux but completely on React and React Hooks. Cypress, Storybook and unit-tests were used for testing purposes.",
  },
  {
    name: "Moneyball",
    link: "https://www.linkedin.com/company/moneyball-com-au/",
    period: "August 2019 - April 2020",
    experience:
      "Worked as React Front-End Developer on rewriting the existing site from Angular to React, and was leading developer with implementing new integrations, so had to work with a few different codebases at the same time. Most used technologies were React, Typescript, Redux, Apollo GraphQL, React Router, Material UI and plenty of integrations.",
  },
  {
    name: "Vitamin D",
    link: "https://www.linkedin.com/company/vitd/",
    period: "September 2018 - July 2019",
    experience:
      "React Front-End Developer, worked on different projects, from administrating panels to encrypted messenger. Have been responsible for providing best UX and front-end part of applications. Most used technologies were React, React Router, Redux, Mobx, Apollo GraphQL, Electron, NodeJS, Material UI.",
  },
];

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
            {previousJobs.map((job) => (
              <Tab
                label={
                  <div>
                    <Typography color="primary" variant="body1">
                      {job.name}
                    </Typography>
                    <Typography variant="subtitle2">{job.period}</Typography>
                  </div>
                }
              />
            ))}
          </Tabs>
          {previousJobs.map((job, index) => (
            <TabPanel value={value} index={index}>
              <a href={job.link} target="blank">
                <Typography variant="h6">{job.name}</Typography>
              </a>
              <br />
              <Typography variant="body1" className={classes.history}>
                {job.experience}
              </Typography>
            </TabPanel>
          ))}
        </Hidden>
        <div className={classes.mobile}>
          {previousJobs.map((job) => (
            <>
              <div>
                <a
                  href="https://www.linkedin.com/company/moneyball-com-au/"
                  target="blank"
                >
                  <Typography variant="h6">{job.name}</Typography>
                  <Typography variant="subtitle1">{job.period}</Typography>
                </a>
                <br />
                <Typography variant="body1" className={classes.history}>
                  {job.experience}
                </Typography>
              </div>
              <br />
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
