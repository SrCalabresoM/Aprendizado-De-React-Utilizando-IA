import { useState } from "react";
import Botao from "./components/Botao";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <Botao texto="+" onClick={() => setContador(contador + 1)} />
      <Botao texto="-" onClick={() => setContador(contador - 1)} />
    </div>
  );
}

export default App;
