import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h2>Error Page.</h2>,
    children: [
      {
        index: true,
        path: "/",
        loader:()=>fetch('appData.json'),
        Component: Home,
      },
      {
        path:'apps',
        loader:()=>fetch('appData.json'),
       Component: AllApps
      },
      {
        path:'installation',
        element:<h2>Installed app Page</h2>
      }
    ],
  },
]);

export default routes;
