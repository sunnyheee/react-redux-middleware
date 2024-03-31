import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);

  const logoutUser = () => {
    setAuthenticate(false);
    navigate("/");
  };

  return (
    <main>
      <Navbar authenticate={authenticate} logoutUser={logoutUser} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </main>
  );
}

export default App;
