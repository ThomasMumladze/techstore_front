import App from "./App.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import "./styles/components/_navigation.scss";
import "./styles/components/_dropDawnMenu.scss";
import "./styles/layouts/_header.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
