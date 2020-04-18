import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import CV from "./components/CV";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CV />
      </ThemeProvider>
    </div>
  );
}

export default App;
