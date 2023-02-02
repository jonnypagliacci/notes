import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente  from "./components/Componente";
import Propiedades from "./components/Propiedades";

function App() {
  let nombre = "Sergio";
  let estaciones = ["Primavera","Verano","Otoño","invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar el codigo para poder hacer cambios en el sistema <code>src/App.js</code> and save to reload.
        </p>
        <label>{nombre}</label>
        <input></input>
        </section>
        <ul>
          {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
          ))}        
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg = "Hola, soy un componente funcional expresado desde una prop"/>
        <br/>
        <Propiedades/>
      </section>
      </header>
    </div>
  );
}

export default App;
