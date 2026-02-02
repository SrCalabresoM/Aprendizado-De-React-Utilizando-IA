import ListaTarefas from "../components/ListaTarefas";
import FormTarefa from "../components/FormTarefa";

function Tarefas({ tarefas, setTarefas }) {
  return (
    <div>
      <ListaTarefas tarefas={tarefas} />
    </div>
  );
}

export default Tarefas;
