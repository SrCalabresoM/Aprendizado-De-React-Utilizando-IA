import { useAuth } from "../shared/useAuth.jsx";
import { supabase } from "../lib/supabase.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Perfil() {
  const { user } = useAuth();
  const navigate = useNavigate();

    async function logOut() {
        let { error } = await supabase.auth.signOut()
        if (error) {
            console.log(error);
        }
        navigate("/cadastro")
    }
    useEffect(() => {
        if (!user) {
            navigate("/cadastro");
        }
    }, [user]);

    return (
        <>
        <h2>Você está logado como {user?.user_metadata?.name}. Deseja sair?</h2><br></br>
        <button onClick={logOut}>Sair</button>
        </>
    );
}

export default Perfil;