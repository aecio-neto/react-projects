import React, { StrictMode } from "react"; // importa o react
import { createRoot } from "react-dom/client"; // react dom para o app funcionar no browser
import "./styles.css"; // importa os estilos

import App from "./App"; // o componente criado no app

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);