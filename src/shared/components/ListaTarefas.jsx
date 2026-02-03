import ItemTarefa from "./ItemTarefa";

function ListaTarefas({ tarefas, alternarTarefa }) {
  return (
    <div>
      {tarefas.length === 0 && <p>Nenhuma tarefa ainda</p>}

      {tarefas.map((tarefa, index) => (
        <ItemTarefa
          key={index}
          tarefa={tarefa}
          alternar={() => alternarTarefa(index)}
        />
      ))}
    </div>
  );
}

export default ListaTarefas;
