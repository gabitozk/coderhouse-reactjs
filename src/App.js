import './App.css';
import Navbar from './components/Navbar/index.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductsDetailPage from './pages/ProductsDetailPage/ProductsDetailPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<ProductsPage />} />
          <Route path=":productId" element={<ProductsDetailPage />} />
          <Route path="category/:catId" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
