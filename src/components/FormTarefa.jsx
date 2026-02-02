import { useRef } from "react";

function FormTarefa({ adicionarTarefa }) {

  const inputRef = useRef(null);

  function enviar() {
    const texto = inputRef.current.value;

    if (texto.trim() === "") return;

    adicionarTarefa(texto);

    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={enviar}>
        Adicionar
      </button>
    </div>
  );
}

export default FormTarefa;
