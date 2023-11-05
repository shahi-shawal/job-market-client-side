import { createBrowserRouter } from "react-router-dom";
import Mainlay from "../MainLayout/Mainlay";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";


const routes =  createBrowserRouter([{
    path:"/",
    element:<Mainlay></Mainlay>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    }

]
}])

export default routes;