import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const ROUTES = [
  {
    path: "/",
    exact: true,
    main: HomePage,
  },
  {
    path: "/login",
    exact: true,
    main: LoginPage,
  },
  {
    path: "/register",
    exact: true,
    main: Register,
  },
];

export default ROUTES;
