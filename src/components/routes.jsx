import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Store } from './store';
import { Navbar } from "./navbar";
import { Home } from "./home";
import { Cart } from "./cart";

export  default function Makeroute(){
const router =  createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path: "store",
          element: <Store/>,
        },
        {
          path: "cart",
          element: <Cart/>
        },{
          path:"home",
          element:<Home/>
        }
      ]
    },
    
  ]);
  return(
    <RouterProvider router={router}/>
  )
}