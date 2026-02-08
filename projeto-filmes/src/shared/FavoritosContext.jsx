import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { supabase } from "../lib/supabase";

const FavContext = createContext();

export function Favoritos({ children }) {
  const { user } = useAuth();

  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem("favoritos");
    return salvos ? JSON.parse(salvos) : [];
  });

  useEffect(() => {
    if (user) {
      async function fetchFavs() {
        const promisse = favoritos?.map((item) => 
            supabase.from("fav_user").upsert({user_id: user.id, imdbID: item.imdbID, title: item.Title, year: item.Year, poster: item.Poster  }, { onConflict: "user_id, imdbID" })
        );
        await Promise.all(promisse);
        await supabase.from("fav_user").select("*").eq("user_id", user.id).then(({ data }) => {
          if (data) {
            setFavoritos([...new Map([...data?.map((item) => ({
              imdbID: item.imdbID,
              Title: item.title,
              Year: item.year,
              Poster: item.poster
      })), ...favoritos].map(obj => [obj.imdbID, obj])).values()])}});
        } fetchFavs();
      }    
  }, [user?.email]);
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);


  async function addFav(item) {
    if (user) {
      await supabase.from("fav_user").insert({user_id: user.id, imdbID: item.imdbID, title: item.Title, year: item.Year, poster: item.Poster  });
    }
    setFavoritos([...favoritos, item]);
  }

  async function remFav(item) {
    if (user) {
      await supabase.from("fav_user").delete().eq("user_id", user.id).eq("imdbID", item.imdbID);
    } 
    setFavoritos(favoritos.filter((i) => i.imdbID !== item.imdbID));
    
  }

  function Fav(item) {
    return favoritos.some((i) => i.imdbID === item.imdbID);
  }

  return (
    <FavContext.Provider
      value={{
        favoritos,
        addFav,
        remFav,
        Fav
      }}
    >
      {children}
    </FavContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavContext);
}
