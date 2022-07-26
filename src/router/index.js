import Index from "@/container/Index";
import About from "@/container/About";
import Data from "../container/Data";
import Home from "../container/Home";
import User from "../container/User";
import Detail from "../container/Detail";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/data",
    component: Data,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

export default routes;
