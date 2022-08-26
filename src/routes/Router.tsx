import Store from "../pages/games store/Store";
import Home from "../pages/home/Home";
import EroPage from "../pages/404 page/EroPage";
import LogIn from "../pages/Log In/LogIn";
import { JsxElement } from "typescript";
import Register from "../pages/register/Register";

interface RouteType {
    path: string;
    components: () => JSX.Element;
}

const publicRoutes: RouteType[] = [
    {path: '/log-in', components: LogIn},
    {path: '/register', components: Register},
    {path: '/', components: Home},
    {path: '/store', components: Store},
    {path: '/404', components: EroPage},
]

const privateRoutes: RouteType[] = []

export {publicRoutes, privateRoutes}
export type {RouteType}