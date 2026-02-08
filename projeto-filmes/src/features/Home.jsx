import Titulo from "../shared/Titulo"
import logo from "../assets/logo_filmslist.png"

export default function Home() {
  return (
    <div>
      <div className="container-alinhado">
      <Titulo>Seja bem-vindo ao Film’s List <img src={logo} alt="Logo do Film's List" style={{ width: "40px"}} /></Titulo>
</div>
      <p style={{
        maxWidth: "520px",
        color: "#cfcfcf",
        lineHeight: 1.6,
        fontSize: "1rem"
      }}>
        Explore filmes no catálogo e adicione seus favoritos.
        <br />
        Crie uma conta para acessar sua lista de qualquer lugar.
      </p>
    </div>
  );
}