import { useState, useEffect } from "react"
import { useFavoritos } from "../shared/FavoritosContext.jsx";

function Favoritos() {
    const { favoritos, remFav, addFav, Fav } = useFavoritos();
    return (
  <div className="catalog-container">
    <h2>Meus Favoritos</h2>
    {favoritos && favoritos.length > 0 ? (
      <div className="movie-grid">
        {favoritos.map((filme) => (
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
      <p className="text-content">Você ainda não favoritou nenhum filme.</p>
    )}
  </div>
);

}
export default Favoritos;