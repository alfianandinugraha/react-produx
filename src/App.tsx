import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { AddProductPage } from './Pages/AddProductPage';
import { HomePage } from './Pages/HomePage';
import { ProductItemPage } from './Pages/ProductItemPage';
import { ProductsPage } from './Pages/ProductsPage';
import { UpdateProductPage } from './Pages/UpdateProductPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/add-product" exact>
          <AddProductPage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:id" exact>
          <ProductItemPage />
        </Route>
        <Route path="/products/:id/update" exact>
          <UpdateProductPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
