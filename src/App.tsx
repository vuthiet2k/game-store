import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/games/Game";
import { Layout } from "./components";
import LogIn from "./pages/Log In/LogIn";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Store from "./pages/games store/Store";
import EroPage from "./pages/404 page/EroPage";
import Cart from "./pages/Cart/Cart";
import { Topic } from "./components/Outlet/Topic";
import CartProvider from "./context/CartContext";
import PrivateRoutes from "./components/PrivateRouter/PrivateRouter";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/log-in" element={<LogIn />} />
            {/* <Route element={<PrivateRoutes />}> */}
              <Route path="/store" element={<Store />}>
                <Route path="/store" element={<Topic />} />
                <Route path="/store/:productID" element={<Game />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
            {/* </Route> */}
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<EroPage />} />
          </Route>
          <Route path="*" element={<EroPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
