import React, { useEffect, useState } from "react";
import './index.css';

function DemoCityFetch1(prop) {
  //   let countries = [];
  let [countries, updateCountries] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/5db18906-a9c2-4f4a-ad94-a14c40611157")
      .then((r) => r.json())
      .then((d) => updateCountries(d.countries));
  }, []);

  //   const countriesOrdered = d.countries.filter(d=> d.name_en)
  //   console.log(countriesOrdered.sort(function(a,b){
  //     return  a.name_en.length - b.name_en.length
  /**
   * Vacio: Solo se va a ejecutar la primera vez que pinte el componente (Mount)
   * Con variables(deps): Se va a ejecutar la primera vez (Mount)
   *                    y cada vez que cambie alguna de esas variables (Update)
   *
   *
   */

  return (
    <React.Fragment>
    <div className="main-container">
        <h1>Ejercicios de repaso</h1>
      <div>
        <h2>
          Estoy mostrando el prefijo del pais #15 del array de objetos countries
        </h2>
        <p>
          Hola Componente {countries[15]?.name_es} {countries[15]?.dial_code}
        </p>
      </div>
      <div>
        <h2>
          Este es el prefijo telefónico de mi pais :{" "}
          {countries?.find((c) => c.name_es === "Colombia")?.dial_code}
        </h2>
      </div>
      <div>
        <h2>
          1- Partir de la base del componente de arriba para mostrar un listado
          en el HTML ( De cada pais mostrar su nombre en español con su prefijo
          al lado) con los países que tienen un prefijo telefónico de dos
          dígitos.
        </h2>
        {countries
          .filter((d) => d.dial_code.length > 2 && d.dial_code.length < 4)
          .map((n) => (
            <li>
              {n.name_es} {n.dial_code}
            </li>
          ))}
      </div>
      <div>
        <h2>
        2- Partir de la base del componente de arriba para mostrar un listado en el HTML (mostrar solo su nombre en español) con los países que tienen 7 letras en su nombre en español. 
        </h2>
        {countries
          .filter((d) => d.name_es.length === 7)
          .map((c) => (
            <li>
              {c.name_es}
            </li>
          ))}
      </div>
      <div>
        <h2>
        3- Partir de la base del componente de arriba para mostrar un listado en el HTML (mostrar solo su nombre en español) con los 20 primeros países con su nombre en español más corto. 
        </h2>
        {/* {countries.slice(0,20).sort(function(a,b){ return a.name_es - b.name_es}
        //   .filter((d) => d.name_es.length)
          .map((x) => (
            <li key={x}>
              {x.name_es}
            </li>

          ))
          } */}
      </div>
      </div>
    </React.Fragment>
  );
}

export default DemoCityFetch1;
