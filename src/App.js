import React, { useState, Fragment } from "react";
import { Header } from "./components/Header";
import { Personajes } from "./components/Personajes";
import { Home } from "./components/Home";
import { Progreso } from "./components/Progreso";

export function App() {
  const URL_API = "https://gateway.marvel.com:443/v1/public";
  const MD5_HASH = "2d791442344c3bd60353ec8f11c38d1b";
  const PUBLIC_KEY = "991b76fed1402ecd7db9637229f4fe08";
  const TS = 1;
  const [characters, setCharacters] = useState(null);
  const [pagina, setPagina] = useState(0);

  async function reqApi() {
    try {
      const api = await fetch(
        `${URL_API}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${MD5_HASH}`
      );
      const charactersApi = await api.json();
      setCharacters(charactersApi.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const aumentarPagina = () => {
    if (pagina < 3) {
      setPagina(pagina + 1);
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    } else {
      return;
    }
  };
  console.log(pagina);
  return (
    <Fragment>
      <Header characters={reqApi} setCharacters={setCharacters} />      
      <hr />
      <Progreso />
      {characters ? (
        <Personajes nextPage={pagina} characters={characters} />
      ) : (
        <Home />
      )}
      <div className="paginas">
        <button onClick={prevPage}>⏪</button>1/4
        <button onClick={aumentarPagina}>⏩</button>
      </div>
    </Fragment>
  );
}