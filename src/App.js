import React, { useState } from "react";
import "./scss/app.scss";
import Ayuda from "./components/Ayuda";

import data from "./data/menu.json";

export default function App() {
  const [testVisible, setTestVisible] = useState(true);
  const toggleVisible = () => {
    setTestVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <h1>
        Desafío{" "}
        <button className="helper" onClick={() => toggleVisible()}>
          {testVisible ? "ocultar" : "mostrar"}
        </button>
      </h1>
      {testVisible ? (
        <>
          <h2>Parte 1</h2>
          <p>
            <strong>Objetivo:</strong> importar los datos del archivo
            data/menu.json y mostrar el primer nivel de elementos.
          </p>
          <h2>Parte 2</h2>
          <p>
            <strong>Objetivo:</strong> hacer visible el segundo nivel para
            aquellos elementos que contengan hijos.
          </p>
          <h2>Parte 3</h2>
          <p>
            <strong>Objetivo:</strong> hacer las modificaciones necesarias para
            mostrar <strong>TODOS</strong> los niveles
          </p>
          <h2>Bonus</h2>
          <ol>
            <li>
              Hacer que los items <strong>con</strong> hijos muestren u oculten
              a sus descendientes al hacer click.
            </li>
            <li>
              Hacer que los items <strong>sin</strong> hijos se muestren como
              links usando la ruta completa desde la raiz.
            </li>
          </ol>
        </>
      ) : null}

      <Ayuda />

      {/* Agregar menú acá */}
    </div>
  );
}
