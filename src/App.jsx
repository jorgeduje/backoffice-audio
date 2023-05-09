import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { theme } from "./themeConfig";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
