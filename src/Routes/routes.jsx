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
        path:"/alljobs",
        element:<Alljobs></Alljobs>,
        loader:()=>fetch("http://localhost:5000/jobs")
    },
    {
        path:"/jobs/:id",
        element:<Viewdetails></Viewdetails>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    {
        path:"/myjobs",
        element:<Myjobs></Myjobs>,
        loader:()=> fetch("http://localhost:5000/jobs")
    },
    {
        path:"myjobs/update/:id",
        element:<Update></Update>
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