import './css/styles.css';
import NavBar from './components/NavBar.js';
import Categorias from './components/Categorias';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import PageNotFound from './components/PageNotFound';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ ItemListContainer } />
          <Route exact path='/categorias/:categoria' component={ Categorias } />
          <Route exact path='/productos/:id' component={ ItemDetailContainer } />
          <Route exact path={'/page-not-found'} component={ PageNotFound } />
        </Switch>
        <Redirect to='/page-not-found'/>
      </BrowserRouter>
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
