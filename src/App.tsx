import React from "react";
import { Outlet } from "react-router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
    return (
        <React.Fragment>
            <Header />

            <main style={{ height: "100vh" }}>
                <Outlet />
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default App;
