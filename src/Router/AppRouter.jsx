import { Route, Routes } from "react-router-dom";
import { menuRouter } from "./menuRouter";
import Layout from "./layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {menuRouter.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
