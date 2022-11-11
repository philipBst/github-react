import type { RouteObject } from "react-router-dom";

import { HomePage, RepoPage } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/repo",
    element: <RepoPage />,
  },
];

export default routes;
