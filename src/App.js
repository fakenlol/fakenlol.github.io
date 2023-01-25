import logo from './letmedoit4you.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          Se viene un portafolio de la concha de su madre
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio de Facundo Ferrari
        </a>
      </header>
    </div>
  );
}

export default App;
