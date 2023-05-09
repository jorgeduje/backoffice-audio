import { Outlet } from "react-router-dom";
import DrawerContainer from "../../components/common/drawer/DrawerContainer";

const Layout = () => {
  return (
    <>
      <DrawerContainer />
      <Outlet />
    </>
  );
};

export default Layout;
