function FormTarefa({ novaTarefa, setNovaTarefa, adicionarTarefa }) {
  return (
    <div>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default FormTarefa;
