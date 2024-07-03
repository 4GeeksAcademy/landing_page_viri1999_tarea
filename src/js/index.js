//import react into the bundle
import React from "react";
import {createRoot} from "react-dom/client";
import Layout from "./component/Layout.jsx";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
//render your react application

createRoot(document.querySelector("#app")).render(<Layout/>)









// include your styles into the webpack bundle
//import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
