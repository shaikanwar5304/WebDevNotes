import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/productDetails/ProductDetail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Categories />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
