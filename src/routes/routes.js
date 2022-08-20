import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";

const routes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/signup",
    element: Signup,
  },
  {
    path: "/dashboard",
    element: Dashboard,
  },
];

export default routes;
