import './css/styles.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import Categorias from './components/Categorias';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import FormCompra from './components/FormCompra';
import Contacto from './components/Contacto';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import CartProvider, { contexto } from './context/CartContext';
import Footer from './components/Footer';

function App() {

console.log(contexto)

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/' component={ ItemListContainer } />
              <Route exact path='/productos' component={ ItemListContainer } />
              <Route exact path='/categorias/:categoria' component={ Categorias } />
              <Route exact path='/productos/:id' component={ ItemDetailContainer } />
              <Route exact path='/cart' component={ Cart } />
              <Route exact path='/comprar' component={ FormCompra } />
              <Route exact path='/contacto' component={ Contacto } />
            </Switch>
            <Footer />
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
