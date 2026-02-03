import ListaTarefas from "@/shared/components/ListaTarefas";
import FormTarefa from "@/shared/components/FormTarefa";
import { useContext } from "react";
import { TarefasContext } from "@/shared/context/TarefasContext";

function Tarefas() {
  const { tarefas, setTarefas } = useContext(TarefasContext);

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

  return (
    <div>
      <FormTarefa
        adicionarTarefa={(texto) =>
          setTarefas([...tarefas, { texto, concluida: false }])
        }
      />

      <ListaTarefas
        tarefas={tarefas}
        alternarTarefa={alternarTarefa}
      />
    </div>
  );
}

export default Tarefas;
