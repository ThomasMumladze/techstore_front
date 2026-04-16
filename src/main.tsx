import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import "./styles/components/_navigation.scss";
import "./styles/components/_dropDawnMenu.scss";
import "./styles/layouts/_header.scss";
import "./styles/pages/_home.scss";
import "./styles/pages/_contact.scss";

import { RouterProvider } from "react-router";

import route from "./routes.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={route} />
    </StrictMode>,
);
