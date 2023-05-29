export function Page({ heroGroup }) {
  return (   
      <>
      {heroGroup.map((heroGroup) =>(
        <div key={heroGroup.id}>
        <p>{heroGroup.name}</p>
        <div>
        <img className="heroe" src={`${heroGroup.thumbnail.path}.${heroGroup.thumbnail.extension}`} alt={heroGroup.name} />
        </div>
        <div className="borde">Comics: {heroGroup.comics.available}</div>
        <div className="borde">Películas: {heroGroup.series.available}</div>
      </div>
      ))}
    </>
  );
}
