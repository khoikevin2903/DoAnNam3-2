import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import EditProfilePage from "./pages/EditProfilePage";

const ROUTES = [
  {
    path: "/",
    exact: true,
    main: HomePage,
  },
  {
    path: "/chat",
    exact: true,
    main: ChatPage,
  },
  {
    path: "/edit",
    exact: true,
    main: EditProfilePage,
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
