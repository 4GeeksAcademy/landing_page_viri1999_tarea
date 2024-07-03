import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootsrap</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

