import { Page500 } from "../pages/500/Page500";
import { MainPage } from "../pages/MainPage/MainPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { CreateEditUserPage } from "../pages/CreateEditUserPage/CreateEditUserPage";

export const publicRoutes = [
  { path: "/", exact: true, component: MainPage },
  { path: "/profile/:id", exact: true, component: ProfilePage },
  { path: "/create", exact: true, component: CreateEditUserPage },
  { path: "/edit/:id", exact: true, component: CreateEditUserPage },
  { path: "/500", exact: true, component: Page500 },
];
