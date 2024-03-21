import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./globals/components/navbar/Navbar";
import Footer from "./globals/components/footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/home";
import Login from "./pages/auth/login/Login";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import ProductDetails from "./pages/productDetails/productDetails";
import CheckOut from "./pages/checkout/CheckOut";
import KhaltiSuccess from "./pages/success/KhaltiSuccess";
import UserProfile from "./pages/profile/UserProfile";
import MyOrders from "./pages/myOrders/MyOrders";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar />
        <RouterProvider router={router} />
        <Footer /> */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/success" element={<KhaltiSuccess />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
