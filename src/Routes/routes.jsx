import { createBrowserRouter } from "react-router-dom";
import Mainlay from "../MainLayout/Mainlay";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Addjob from "../Pages/ADDJOB/Addjob";


const routes =  createBrowserRouter([{
    path:"/",
    element:<Mainlay></Mainlay>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/addjob",
        element:<Addjob></Addjob>
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