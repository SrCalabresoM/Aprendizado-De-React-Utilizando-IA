function ItemTarefa({ tarefa, alternar }) {
  return (
    <div>
      <span
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none"
        }}
      >
        {tarefa.texto}
      </span>

      <button onClick={alternar}>
        {tarefa.concluida ? "[X]" : "[ ]"}
      </button>
    </div>
  );
}

export default ItemTarefa;