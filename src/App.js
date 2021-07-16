import './styles/styles.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer'

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
          Tu tienda de artículos nerd
        </h2>
        <p>¡Bienvenido!</p>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
