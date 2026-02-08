import { useState, useEffect } from "react"
import { useFavoritos } from "../shared/FavoritosContext.jsx";

function Catalogo() {
  const [busca, setBusca] = useState("")
  const [dados, setDados] = useState([]);
  const { favoritos, addFav, remFav, Fav } =  useFavoritos();

      useEffect(() => {
      async function buscarDados() {
        if (busca.trim() === "") {
          setDados([]);
          return;
        }
          const resposta = await fetch(`https://www.omdbapi.com/?apikey=7f4140ad&s=${busca}&type=movie`);
  
          const json = await resposta.json();
  
          setDados(json);
      }
  
      buscarDados();
      }, [busca]);
  
  return (
  <div className="catalog-container">
    <h2>Catálogo de Filmes</h2>
    <p className="text-content">Explore nossa coleção de filmes incríveis!</p>
    
    <input 
      type="text" 
      placeholder="Buscar filmes..." 
      value={busca} 
      onChange={(e) => setBusca(e.target.value)}
    />

    {dados && dados.Search ? (
      <div className="movie-grid">
        {dados.Search.map((filme) => (
          <div key={filme.imdbID} className="movie-card">
            <img src={filme.Poster !== "N/A" ? filme.Poster : `https://placehold.co/300x450/?font=raleway&text=${filme.Title.split(" ").join("+")}`} alt={filme.Title} className="movie-poster" onError={(e) => {e.target.src = `https://placehold.co/300x450/?font=raleway&text=${"Não encontramos o poster de\\n" + filme.Title.split(" ").join("+")}`;}}/>
            
            <div className="movie-info">
              <h2>
                {filme.Title}
                <button 
                  className="favorito" 
                  onClick={() => Fav(filme) ? remFav(filme) : addFav(filme)}
                >
                  {Fav(filme) ? "★" : "☆"}
                </button>
              </h2>
              <p>Ano: {filme.Year}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-content">Nenhum filme encontrado.</p>
    )}
  </div>
);

}
export default Catalogo;