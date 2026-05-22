import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import PopularBooks from "../Pages/PopularBooks";
import BestSellers from './../Pages/BestSellers';
import Login from './../Pages/Login';
import NewReleases from './../Pages/NewReleases';
import AboutUs from "../Pages/AboutUs";
import SatyajitRay from "../Pages/AuthorBook/SatyajitRay";
import RabindranathTagore from "../Pages/AuthorBook/RabindranathTagore";
import KaziNazrulIslam from "../Pages/AuthorBook/KaziNazrulIslam";
import HumayunAhmed from "../Pages/AuthorBook/HumayunAhmed";

export const routes = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children :  [

      {
         index: true,
         element: <Home/>
      },
      {
         path: "new-releases",
         element: <NewReleases />
      },
       {
         path: "best-sellers",
         element: <BestSellers />
      },
       {
         path: "popular-books",
         element: <PopularBooks />
      },
       {
         path: "cart",
         element: <Cart />
      },
      {
         path: "login",
         element: <Login />
      },
      {
         path: "about-us",
         element: <AboutUs />
      },
      {
         path: "satyajit-ray",
         element: <SatyajitRay />
      },
      {
         path: "rabindranath-tagore",
         element: <RabindranathTagore />
      },
      {
         path: "kazi-nazrul-islam",
         element: <KaziNazrulIslam/>
      },
      {
         path: "humayun-ahmed",
         element: <HumayunAhmed />
      }




      
    ]
   }



])