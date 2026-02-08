import { useState } from "react";
import useForm from "../../shared/hooks/useForm.jsx";
import { useAuth } from "../../shared/useAuth.jsx";
import { supabase } from "../../lib/supabase.js"
import { Link } from "react-router-dom";

function Cadastro() {
    const { user, setUser } = useAuth();
  const { valores, onChange } = useForm({
    nome: "",
    email: "",
    idade: "",
    password: "",
    password2: ""
  });

  const [erros, setErros] = useState({});
  const [loading, setLoading] = useState(false);

  async function enviar() {
    if (!validar()) {
        return;
    }
    
    let { data, error } = await supabase.auth.signUp({
        email: valores.email,
        password: valores.password
    })
    const user = data.user;

    setUser(user);

    const { data: userData, error2 } = await supabase.auth.updateUser({
        data: { name: valores.nome }
})
    if (error || error2) {
            console.log(error || error2);
            return;
        }
  }

  async function fletchEnvio(e) {
    e.preventDefault();
    setLoading(true)

    try {
      await enviar()
    } catch (erro) {
      console.error(erro)
    } finally {
      setLoading(false)
    }
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
    
  setErros(novosErros);

  return Object.keys(novosErros).length === 0;
}

  return (
  <div className="catalog-container">
    <form onSubmit={fletchEnvio}>
      <h2>Criar Conta</h2>
      
      <span>
        <p>Nome:</p>
        <input name="nome" value={valores.nome} onChange={onChange} />
      </span>
      {erros.nome && <div className="error-message">{erros.nome}</div>}

      <span>
        <p>Email:</p>
        <input name="email" value={valores.email} onChange={onChange} />
      </span>
      {erros.email && <div className="error-message">{erros.email}</div>}

      <span>
        <p>Idade:</p>
        <input name="idade" value={valores.idade} onChange={onChange} />
      </span>
      {erros.idade && <div className="error-message">{erros.idade}</div>}

      <span>
        <p>Senha:</p>
        <input name='password' type='password' value={valores.password} onChange={onChange} />
      </span>

      <span>
        <p>Repita a senha:</p>
        <input name='password2' type='password' value={valores.password2} onChange={onChange} />
      </span>

      <button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
    </form>

    <div className="text-content" style={{textAlign: 'center'}}>
      Não tem uma conta? <Link to="/login">Fazer login</Link>
    </div>
  </div>
);

}


export default Cadastro;