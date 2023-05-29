import avengers from "../Video/AVENGERS.mp4";
import ReactPlayer from "react-player";
import imgAvengenrs from "../Logo/8247347.jpg";

export function Progreso() {
  let arrMax = [600, 700, 800, 900, 1000, 1100];
  let arrValue = [100, 200, 300, 400, 500, 600];
  function nroMax() {
    return Math.floor(Math.random() * 6);
  }
  const max = arrMax[nroMax()];
  const value = arrValue[nroMax()];

  console.log("numero maximo: " + max);
  console.log("numero value: " + value);

  function porcProducido(meta, producida) {
    return ((producida * 100) / meta).toFixed(0) + "%";
  }
  
  return (
    <>
      <div className="progreso">
        <div className="dimensiones">
          <label for="file">
            PROGRESO DE PELICULAS PRODUCIDAS
            <p className="maximo">
              {max} Películas
              <br />
              Meta de producción
            </p>
            <progress id="file" value={value} max={max}>{porcProducido(max, value)}</progress>
            <br />
            <p className="value">
              {value} Películas
              <br />
              Producidas
            </p>
          </label>
        </div>

        <div className="video">
          <ReactPlayer url={avengers} controls loop height="97%" width="100%" />
        </div>
        <div>
          <img className="imagen" src={imgAvengenrs} alt="avengers" />
        </div>
      </div>
    </>
  );
}
