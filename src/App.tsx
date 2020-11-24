import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { NavigationTop } from './Components/NavigationTop';
import { 
  AddProductPage, 
  HomePage, 
  ProductItemPage, 
  ProductsPage, 
  UpdateProductPage
} from './Pages';

function App() {
  return (
    <Container maxWidth="md">
      <HashRouter>
        <NavigationTop />
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
    </Container>
  );
}

export default App;
