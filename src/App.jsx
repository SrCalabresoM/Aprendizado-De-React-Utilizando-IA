import { useState, useEffect } from "react";
import ListaTarefas from "./components/ListaTarefas";
import FormTarefa from "./components/FormTarefa";

function App() {

  const [tarefas, setTarefas] = useState(() => {
  const salvas = localStorage.getItem("tarefas");
  return salvas ? JSON.parse(salvas) : [];
});

  useEffect(() => {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}, [tarefas]);

  const [novaTarefa, setNovaTarefa] = useState("");

  function alternarTarefa(index) {
    const novasTarefas = tarefas.map((tarefa, i) => {
      if (i === index) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        };
      }
      return tarefa;
    });

    setTarefas(novasTarefas);
  }

function apagarConcluidas() {
  setTarefas(tarefas.filter(t => !t.concluida));
}


  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;

    const nova = {
      texto: novaTarefa,
      concluida: false
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  }

  function limparTarefas() {
    setTarefas([]);
    setNovaTarefa("");
  }

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <FormTarefa
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        adicionarTarefa={adicionarTarefa}
      />

      <button onClick={limparTarefas}>Limpar Tarefas</button>
      <button onClick={apagarConcluidas}>Apagar Concluídas</button>

      <ListaTarefas
        tarefas={tarefas}
        alternarTarefa={alternarTarefa}
      />
    </div>
  );
}

export default App;
