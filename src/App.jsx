import { BrowserRouter } from "react-router-dom";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </>
  );
}

export default App;
