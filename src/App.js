import './css/styles.css';
import NavBar from './components/NavBar.js';
import Categorias from './components/Categorias';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ ItemListContainer } />
          <Route exact path='/productos' component={ ItemListContainer } />
          <Route exact path='/categorias/:categoria' component={ Categorias } />
          <Route exact path='/productos/:id' component={ ItemDetailContainer } />
          <Route exact path='/cart' component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
