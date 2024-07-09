import React from "react";
import { Navbar } from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Layout;
