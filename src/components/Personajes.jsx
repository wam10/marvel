import { Page } from "./Page";
export function Personajes({ characters, nextPage }) {
  function heroGroup(array) {
    let copyArr = array;
    let newArr = [];
    while (copyArr.length) {
      newArr.push(copyArr.slice(0, 5));
      copyArr = copyArr.slice(5);
    }
    return newArr;
  }

  return (
    <div className="personaje">
      <Page heroGroup={heroGroup(characters)[nextPage]} />      
    </div>    
  );
}

//console.log(flechas(results)[0].map((result) => result.name))
//console.log(flechas(results)[1].map((result) => result.name))
//console.log(flechas(results).map((result1) => result1.map((result) => result.name)))

//<heroPage heroGroup={heroGroup} />
