import './styles/styles.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <main>
        <h2>
          Tu tienda de artículos nerds
        </h2>
        <p>¡Bienvenido!</p>
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
