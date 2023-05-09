import { Route, Routes } from "react-router-dom";
import { menuRouter } from "./menuRouter";
import DrawerComponent from "../components/common/drawer/DrawerComponent";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DrawerComponent />}>
        {menuRouter.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={Element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
