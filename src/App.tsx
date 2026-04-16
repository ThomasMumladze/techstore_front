import React from "react";
import { Outlet } from "react-router";

function App() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
}

export default App;
