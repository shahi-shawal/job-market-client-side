import { createBrowserRouter } from "react-router-dom";
import Mainlay from "../MainLayout/Mainlay";
import Home from "../Pages/Home/Home";


const routes =  createBrowserRouter([{
    path:"/",
    element:<Mainlay></Mainlay>,
    children:[{
        path:"/",
        element:<Home></Home>
    }]
}])

export default routes;