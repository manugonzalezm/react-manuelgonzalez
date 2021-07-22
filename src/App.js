import './css/styles.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemDetailContainer'

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
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
