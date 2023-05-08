import { Route, Routes } from "react-router-dom";
import { menuRouter } from "./menuRouter";

const AppRouter = () => {
  return (
   <Routes>
    {menuRouter.map(({id, path, Element})=>(
        <Route key={id} path={path} element={Element}/>
    ))}
   </Routes>
  )
}

export default AppRouter