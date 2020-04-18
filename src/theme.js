import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {primary: "#dadada"},
    primary: { main: "#a06dd6" },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: "unset",
        justifyContent: "unset",
      },
    },
  },
});
