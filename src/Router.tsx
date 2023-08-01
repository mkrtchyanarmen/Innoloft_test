import Home from '@pages/Home';
import Product from '@pages/Product';
import ProductEdit from '@pages/ProductEdit';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Product} path="/product/:id" />
      <Route Component={ProductEdit} path="/product/:id/edit" />
    </Routes>
  );
};

export default Router;
