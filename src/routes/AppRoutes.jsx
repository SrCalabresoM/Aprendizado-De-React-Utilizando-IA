import { Routes, Route } from "react-router-dom";

import Home from "@/features/pages/Home";
import Sobre from "@/features/pages/Sobre";
import Tarefas from "@/features/pages/Tarefas";
import ApiExemplo from "@/features/pages/ApiExemplo";
import Cadastro from "@/features/pages/Cadastro";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/api" element={<ApiExemplo />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
