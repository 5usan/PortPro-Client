import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
const routes = [
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/signup",
    element: SignupPage,
  },
];

export default routes;

export const privateRoutes = [
  {
    path: "/dashboard",
    element: DashboardPage,
  },
];
