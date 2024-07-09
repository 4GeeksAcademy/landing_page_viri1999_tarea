import React from "react";

export const Navbar = () => {
    return (
        <div className="navbar navbar.dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
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
                <button className="btn btn succes">Call to action!</button>  {/* Asegúrate de que esta clase 'boton' se define en navbar.css */}
            </div>
        </div>
    )
}
