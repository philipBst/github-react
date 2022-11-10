import { Navigate, RouteObject } from "react-router-dom";

import { Search } from "pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/search" />,
  },
  {
    path: "/search",
    element: <Search />,
  },
];

export default routes;
