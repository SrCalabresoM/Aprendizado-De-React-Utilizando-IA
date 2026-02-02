import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Tarefas from "./pages/Tarefas";
import { TarefasProvider } from "./context/TarefasContext";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <TarefasProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/tarefas">Tarefas</Link> |{" "}
          <Link to="/sobre">Sobre</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </TarefasProvider>
  );
}
export default App;