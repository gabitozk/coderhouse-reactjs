import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductsDetailPage from "./pages/ProductsDetailPage/ProductsDetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductsDetailPage />} />
            <Route path="category/:catId" element={<CategoryPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout/:orderId" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
