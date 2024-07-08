import React from "react";
import { Navbar } from "./Navbar";
import '../../styles/layout.css';
import Card from "./Card";
import Jumbotron from "./Jumbotron";

function Layout() {
    return (
        <div>
            <Navbar />
            <div>
                <Jumbotron />
            </div>
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Layout;
