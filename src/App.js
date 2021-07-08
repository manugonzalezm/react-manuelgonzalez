import './styles/styles.css';

import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer'
import {
  taza,
  escritorio,
  remera
} from './img/images.js';

var dataProductos = [
  {
    id: 1,
    nombre: "Escritorio nórdico",
    precio: 12000,
    foto: escritorio
  },
  {
    id: 2,
    nombre: "Remera Einstein",
    precio: 1500,
    foto: remera
  },
  {
    id: 3,
    nombre: "Taza mágica Física y Química",
    precio: 800,
    foto: taza
  }
];

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
        <div className="containerCards">
          {dataProductos.map(producto => {
            return(
              <ItemListContainer
                key = { producto.id }
                id = { producto.id }
                nombre = { producto.nombre }
                precio = { producto.precio }
                foto = { producto.foto }
              />
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
