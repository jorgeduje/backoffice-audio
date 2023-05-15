import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { theme } from "./themeConfig";
import { ThemeProvider } from "@emotion/react";
import DrawerComponent from "./components/common/drawer/DrawerComponent";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DrawerComponent>
          <AppRouter />
        </DrawerComponent>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
