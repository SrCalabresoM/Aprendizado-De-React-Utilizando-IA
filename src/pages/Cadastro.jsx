import useForm from "../hooks/useForm";

function Cadastro() {
  const { valores, onChange } = useForm({
    nome: "",
    email: "",
    cidade: "",
    idade: ""
  });

  function enviar(e) {
    e.preventDefault();
    console.log(valores.nome, valores.email, valores.cidade, valores.idade);
  }

  return (
    <form onSubmit={enviar}>
      <input
        name="nome"
        value={valores.nome}
        onChange={onChange}
      />

      <input
        name="email"
        value={valores.email}
        onChange={onChange}
      />

      <input
        name="cidade"
        value={valores.cidade}
        onChange={onChange}
      />

      <input
        name="idade"
        value={valores.idade}
        onChange={onChange}
      />

      <button>Enviar</button>
    </form>
  );
}


export default Cadastro;
