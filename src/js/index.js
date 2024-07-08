// Importa React y métodos necesarios
import React from "react";
import { createRoot } from "react-dom/client";

// Importa tus componentes y estilos
import Layout from "./component/Layout.jsx";
import Jumbotron from "./component/Jumbotron.jsx";  // Importa Jumbotron solo una vez
import "../styles/index.css";  // Asegúrate de que tus estilos globales estén incluidos aquí
import "bootstrap/dist/css/bootstrap.min.css";  // Importa estilos de Bootstrap
import "bootstrap";  // Importa JavaScript de Bootstrap si es necesario

// Renderiza tu aplicación React
createRoot(document.querySelector("#app")).render(<Layout />);

// También puedes importar y usar otros componentes aquí según sea necesario
