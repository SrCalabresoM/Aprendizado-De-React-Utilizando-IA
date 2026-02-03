import { useState } from "react";
import useForm from "@/shared/hooks/useForm";

function Cadastro() {
  const { valores, onChange } = useForm({
    nome: "",
    email: "",
    cidade: "",
    idade: ""
  });

  const [erros, setErros] = useState({});

  function enviar(e) {
    e.preventDefault();
    if (!validar()) {
    return;
  }
    console.log(valores.nome, valores.email, valores.cidade, valores.idade);
  }

  function validar() {
  const novosErros = {};

  if (valores.nome.trim() === "") {
    novosErros.nome = "Nome é obrigatório";
  }
    if (!valores.email.endsWith("@gmail.com")) {
    novosErros.email = "Email inválido";
  }
    if (valores.idade < 12 || valores.idade === "") {
    novosErros.idade = "Idade inválida";
  }
      if (valores.cidade.trim() === "") {
    novosErros.cidade = "Cidade é obrigatória";
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
        {erros.nome && <p style={{ color: "red" , fontStyle: "italic"}}>{erros.nome}</p>}
      <br></br>
      <input
        name="email"
        value={valores.email}
        onChange={onChange}
      />
        {erros.email && <p style={{ color: "red" , fontStyle: "italic"}}>{erros.email}</p>}
      <br></br>
      <input
        name="cidade"
        value={valores.cidade}
        onChange={onChange}
      />
        {erros.cidade && <p style={{ color: "red" , fontStyle: "italic"}}>{erros.cidade}</p>}
      <br></br>
      <input
        name="idade"
        value={valores.idade}
        onChange={onChange}
      />
      {erros.idade && <p style={{ color: "red" , fontStyle: "italic"}}>{erros.idade}</p>}
        <br></br>
      <button>Enviar</button>
    </form>
  );
}


export default Cadastro;
