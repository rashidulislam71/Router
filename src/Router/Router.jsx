/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from './../Component/Layout/LayoutPage/LayoutPage';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Product from './../Pages/Product/Product';
import Users from './../Component/Users/Users';
import Contact from './../Pages/Contact/Contact';
import NotFoundPage from './../NotFoundPage/NotFoundPage';
import UserDetalies from './../Component/Users/UserDetalies';


const routerPage = createBrowserRouter([
    {
      element: <LayoutPage />,
      path: "/",
      children:[
        {
            element: <Home />,
            path: "/",
        },
        {
            element: <About />,
            path: "/about",
        },
        {
            element: <Product />,
            path: "/products",
        },
        {
            element: <Users />,
            path: "/users",
            loader: ()=> fetch(`https://jsonplaceholder.typicode.com/users`)
        },
        {
            element: <UserDetalies />,
            path: "/users/:usersID",
            loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usersID}`)
        },
        {
            element: <Contact />,
            path: "/contact",
        },

      ]
    },
    {
        element: <NotFoundPage />,
        path: "/*"
    }
]);

export default routerPage;

