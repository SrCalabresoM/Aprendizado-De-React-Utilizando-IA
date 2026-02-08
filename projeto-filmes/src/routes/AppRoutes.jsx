import { Routes, Route } from "react-router-dom";

import Home from "../features/Home";
import Catalogo from "../features/Catalogo";
import  Favoritos from "../features/Favoritos.jsx";
import Cadastro from "../features/auth/Cadastro.jsx";
import Login from "../features/auth/Login.jsx"; 
import Perfil from "../features/perfil.jsx";

 function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}
export default AppRoutes;