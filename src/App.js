import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </main>
  );
}

export default App;
