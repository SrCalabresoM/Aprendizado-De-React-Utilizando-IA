import { useState } from "react";


function App() {
  const [tarefas, setTarefas] = useState(["Estudar React", "Aprender Git"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }
  function limparTarefas() {
    setTarefas([]);
    setNovaTarefa("");
  }

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>
      <button onClick={limparTarefas}>Limpar Tarefas</button>
      {tarefas.length === 0 && <p>Nenhuma tarefa ainda</p>}
      {tarefas.map((tarefa, index) => (
        <p key={index}>{tarefa}</p>
      ))}
    </div>
  );
}

export default App;
