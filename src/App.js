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
import React from "react";
import axios from "axios";
import { API_URL } from "./Supports/helper";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/actions/userAction";

function App() {

  const dispatch = useDispatch();

  const { role } = useSelector(({ userReducer }) => {
    return {
      role: userReducer.role
    }
  });

  const keepLogin = () => {
    let tokenId = localStorage.getItem("tokenId");

    if (tokenId) {
      axios.get(API_URL + `/users?id=${tokenId}`)
        .then((res) => {
          localStorage.setItem("tokenId", res.data[0].id);
          dispatch(loginAction(res.data[0]));
        }).catch((err) => {
          console.log(err);
        })
    }

  }

  React.useEffect(() => {
    keepLogin()
  }, [])

  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/detail" element={<DetailProduct />} />
        {
          role == "Admin" ?
            <Route path="/manage-product" element={<ManageProducts />} />
            : ""
        }
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
