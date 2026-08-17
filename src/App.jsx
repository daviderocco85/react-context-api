import './App.css';
import { ShellLayout } from './components/ShellLayout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/products/ProductDetail';
import { NotFound } from './pages/NotFound';

export const App = () => {

  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='products' element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};


