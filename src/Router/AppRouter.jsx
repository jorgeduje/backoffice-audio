import { Route, Routes } from "react-router-dom";
import { menuRouter } from "./menuRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {menuRouter.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
