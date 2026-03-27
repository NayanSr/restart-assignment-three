import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import Details from "../pages/Details/Details";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader:()=>fetch('/appData.json')
      },
      {
        path:'apps',
        loader:()=>fetch('appData.json'),
       Component: AllApps
      },
      {
        path:'apps/:id',
        // loader:()=>fetch('appData.json'),
        Component: Details
      },
      {
        path:'installation',
        Component: Installation,
        loader:()=>fetch('/appData.json')
      }
    ],
  },
]);

export default routes;
