import React from "react";
import { Navbar } from "./Navbar.jsx"
import './Layout.css';
import Card from "./Card.jsx";


function Layout() {
    return (
        <div>
            <Navbar />
            <div className="container">
                A Warm Welcome!
            </div>
            <div className="parrafoA">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam est quae dolore? Cumque recusandae deleniti facilis? Corporis accusamus, commodi eius veritatis dignissimos nihil sed eaque dolores nemo beatae quasi?</p>
                <button type="button" className="btn btn-primary">Call to Action</button>
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
