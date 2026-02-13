import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todos from "../pages/Todos";
import MainLayouts from "../layout/MainLayouts";

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayouts/>,
    children: [
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path: 'register',
            element: <Register/>,
        },
        {
            path: 'todos',
            element: <Todos/>
        }

    ]
}
])

export default router