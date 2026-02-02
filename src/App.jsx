import { useState } from "react";
import ListaTarefas from "./components/ListaTarefas";
import FormTarefa from "./components/FormTarefa";

function App() {
  const [tarefas, setTarefas] = useState([
    { texto: "Estudar React", concluida: false },
    { texto: "Aprender Git", concluida: false }
  ]);

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

      <ListaTarefas
        tarefas={tarefas}
        alternarTarefa={alternarTarefa}
      />
    </div>
  );
}

export default App;
