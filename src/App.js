import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import { Routes, Route } from 'react-router-dom'; // untuk management routing page
// CSS
import './Supports/Stylesheets/Utils.css'
import ProductsPage from "./Pages/Products";
import DetailProduct from "./Pages/Detail";
import ManageProducts from "./Pages/ManageProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/manage-product" element={<ManageProducts />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
