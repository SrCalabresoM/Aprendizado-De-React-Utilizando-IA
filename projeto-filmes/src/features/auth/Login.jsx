import { useState } from "react";
import useForm from "../../shared/hooks/useForm.jsx";
import { useAuth } from "../../shared/useAuth.jsx";
import { supabase } from "../../lib/supabase.js"

function Login() {

    const { user, setUser } = useAuth();
  const { valores, onChange } = useForm({
    email: "",
    password: "",
  });

  const [erros, setErros] = useState({});
  const [loading, setLoading] = useState(false);

  async function enviar() {
  
    if (!validar()) {
        return;
    }

    let { data, error } = await supabase.auth.signInWithPassword({
  email: valores.email,
  password: valores.password
})

    setUser(data.user);

    if (error) {
            console.log(error);
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

  if (valores.password.trim() === "") {
    novosErros.password = "Senha é obrigatória";
  }
    if (!valores.email.endsWith("@gmail.com")) {
    novosErros.email = "Email inválido";
  }
  setErros(novosErros);

  return Object.keys(novosErros).length === 0;
}

  return (
  <div className="catalog-container">
    <form onSubmit={fletchEnvio}>
      <h2>Login</h2>
      <span>
        <p>Email:</p>
        <input 
          name="email" 
          value={valores.email} 
          onChange={onChange} 
        />
      </span>
      {erros.email && <div className="error-message">{erros.email}</div>}

      <span>
        <p>Senha:</p>
        <input 
          name='password' 
          type='password' 
          value={valores.password} 
          onChange={onChange} 
        />
      </span>
      {erros.password && <div className="error-message">{erros.password}</div>}

      <button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  </div>
);

}


export default Login;