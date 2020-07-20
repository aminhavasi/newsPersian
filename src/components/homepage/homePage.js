import React from "react";
import Navbar from "../common/navbar";
import MainNews from "./mainNews";
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-3">
                <MainNews />
            </main>
        </div>
    );
};

export default HomePage;
