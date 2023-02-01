import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Sergio";
  let estaciones = ["Primavera","Verano","Otoño","invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label>{nombre}</label>
        <input></input>
        <ul>
          {estaciones.map(el => (
          <li>{el}</li>
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
      </header>
    </div>
  );
}

export default App;
