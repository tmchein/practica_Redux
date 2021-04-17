import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';
//Components
import Header from './Components/Header/Header';
import Productos from './Components/Productos/Productos';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import EditarProducto from './Components/EditarProducto/EditarProducto';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
