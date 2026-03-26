import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h2>Error Page.</h2>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path:'about',
        element:<h2>Aboute Page</h2>
      }
    ],
  },
]);

export default routes;
