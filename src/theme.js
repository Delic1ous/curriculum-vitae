import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
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
