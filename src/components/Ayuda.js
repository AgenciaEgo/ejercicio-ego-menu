import React, { useState } from "react";

const Ayuda = () => {
  const [showHelp, setShowHelp] = useState(false);
  const toggleHelp = () => {
    setShowHelp(prevShowHelp => !prevShowHelp);
  };
  return (
    <>
      <h1>
        Estructura sugerida{" "}
        <button className="helper" onClick={() => toggleHelp()}>
          {showHelp ? "Ocultar" : "Mostrar"}
        </button>
      </h1>
      {showHelp ? (
        <>
          <p>
            Este ejemplo es solo de como se deben anidar y ver los elementos y
            las urls.
          </p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              Vehículos
              <ul>
                <li>
                  Autos y Minivans
                  <ul>
                    <li>
                      <a href="/vehiculos/autos-y-minivans/yaris">Yaris</a>
                    </li>
                    <li>
                      <a href="/vehiculos/autos-y-minivans/etios">Etios</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </>
      ) : null}
    </>
  );
};

export default Ayuda;
