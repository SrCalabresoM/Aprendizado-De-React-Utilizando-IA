import { useState } from "react";
import useForm from "../hooks/useForm";

type CadastroForm = {
  nome: string;
  email: string;
  cidade: string;
  idade: string;
};

function Cadastro() {
  const { valores, onChange } = useForm({
    nome: "", 
    email: "",
    cidade: "",
    idade: ""
  });

  const [erros, setErros] = useState<Partial<CadastroForm>>({});

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (!validar()) return;

    console.log(valores);
  }

  function validar() {
    const novosErros: Partial<CadastroForm> = {};

    if (valores.nome.trim() === "") {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!valores.email.endsWith("@gmail.com")) {
      novosErros.email = "Email inválido";
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  return (
    <form onSubmit={enviar}>
      <input
        name="nome"
        value={valores.nome}
        onChange={onChange}
      />
      {erros.nome && <p>{erros.nome}</p>}

      <button>Enviar</button>
    </form>
  );
}

export default Cadastro;
