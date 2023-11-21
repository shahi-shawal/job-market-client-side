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
import Blogs from "../Pages/Blogs/Blogs";
import CreateResume from "../Pages/Resume/CreateResume";


const routes =  createBrowserRouter([{
    path:"/",
    element:<Mainlay></Mainlay>,
    errorElement:<Error></Error>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:'/blog',
        element:<Blogs></Blogs>
    },
    {
        path:"/addjob",
        element:<PrivateRoutes><Addjob></Addjob></PrivateRoutes>
    },
    {
        path:"/alljobs",
        element:<Alljobs></Alljobs>,
        loader:()=>fetch("https://job-server-as-11.vercel.app/jobs")
    },
    {
        path:"/jobs/:id",
        element:<PrivateRoutes><Viewdetails></Viewdetails></PrivateRoutes>,
        loader:({params})=>fetch(`https://job-server-as-11.vercel.app/jobs/${params.id}`,{credentials:'include'})
    },
    {
        path:"/myjobs",
        element:<PrivateRoutes><Myjobs></Myjobs></PrivateRoutes>,
        loader:()=> fetch("https://job-server-as-11.vercel.app/jobs")
    },
    {
        path:"/appliedjobs",
        element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
        loader:()=>fetch("https://job-server-as-11.vercel.app/applyjobs", {credentials:'include'})
    },
    {
        path:"myjobs/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://job-server-as-11.vercel.app/jobs/${params.id}`, {credentials:'include'})
    },
    {
        path:"/resume",
        element:<CreateResume></CreateResume>
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