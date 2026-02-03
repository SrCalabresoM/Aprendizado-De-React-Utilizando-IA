import { useState, useEffect } from "react";

function ApiExemplo() {

  const [dados, setDados] = useState([]);
    useEffect(() => {
    async function buscarDados() {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

        const json = await resposta.json();

        setDados(json);
    }

    buscarDados();
    }, []);

  return (
    <div>
    <h1>Dados da API</h1>

    {dados.slice(0, 40).map((item) => (
      <p key={item.id}>
        {item.title}
      </p>
    ))}
  </div>

  );
}

export default ApiExemplo;
