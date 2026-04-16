import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

const route = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "/shop", Component: Shop },
            { path: "/about", Component: About },
            { path: "/contact", Component: Contact },
        ],
    },
]);

export default route;
