import { createBrowserRouter } from "react-router-dom";
import UrlShortener from "../modules/home/Home";






const router = createBrowserRouter([
  {
    path: "/",
    element: <UrlShortener />,
  },
 
]);

export default router;