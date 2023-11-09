import { createBrowserRouter } from "react-router-dom";
import Mainlay from "../MainLayout/Mainlay";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Addjob from "../Pages/ADDJOB/Addjob";
import Alljobs from "../Pages/AllJobs/Alljobs";
import Viewdetails from "../Pages/AllJobs/Viewdetails";
import Myjobs from "../Pages/MyJobs/Myjobs";
import Update from "../Pages/MyJobs/Update";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


const routes =  createBrowserRouter([{
    path:"/",
    element:<Mainlay></Mainlay>,
    errorElement:<Error></Error>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/addjob",
        element:<Addjob></Addjob>
    },
    {
        path:"/alljobs",
        element:<Alljobs></Alljobs>,
        loader:()=>fetch("http://localhost:5000/jobs")
    },
    {
        path:"/jobs/:id",
        element:<PrivateRoutes><Viewdetails></Viewdetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    {
        path:"/myjobs",
        element:<PrivateRoutes><Myjobs></Myjobs></PrivateRoutes>,
        loader:()=> fetch("http://localhost:5000/jobs")
    },
    {
        path:"/appliedjobs",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch("http://localhost:5000/applyjobs")
    },
    {
        path:"myjobs/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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