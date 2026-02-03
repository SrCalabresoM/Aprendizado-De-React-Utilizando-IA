import { BrowserRouter, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { TarefasProvider } from "@/shared/context/TarefasContext";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <TarefasProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/tarefas">Tarefas</Link> |{" "}
          <Link to="/sobre">Sobre</Link> |{" "}
          <Link to="/api">API</Link> |{" "}
          <Link to="/cadastro">Cadastro</Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </TarefasProvider>
  );
}
export default App;