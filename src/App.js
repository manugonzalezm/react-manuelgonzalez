import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <header>
        <div>
          <NavBar/>
        </div>
      </header>
      <main>
        <h2>
          Tienda de indumentaria
        </h2>
        <p>¡Bienvenido!</p>
      </main>
    </div>
  );
}

export default App;
