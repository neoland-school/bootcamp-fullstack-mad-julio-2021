import React from "react";
import "./index.css";

class SectionContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div className="title">
            <h1 className="first-title">Tutorial: Introducción a React</h1>
            <h3 className="sub-title">
              Este tutorial no asume ningún conocimiento previo de React.
            </h3>
          </div>
          <hr />
          <div className="before-tutorial">
            <h2 className="before-start-title">Antes de empezar el tutorial</h2>
            <p className="paragraph-before-tutorial">
              Vamos a construir un pequeño juego durante este tutorial.
              <span className="text-black">
                Deberás estar tentado a obviarlo porque tú no estás construyendo
                juegos en el día a día, pero dale una oportunidad.
              </span>
              Las técnicas que aprenderás en el tutorial son fundamentales para
              construir cualquier aplicación de React, y dominarlo te dará un
              entendimiento profundo de React.
            </p>
          </div>
          <div className="tip">
            <h4>
              <strong>Tip</strong>
            </h4>
            <p>
              Este tutorial está diseñado para personas que prefieren <span className="text-black"> aprender haciendo.</span> Si tu
              prefieres aprender los conceptos desde el principio, revisa
              nuestra  <a href="https://es.reactjs.org/docs/hello-world.html">
                <span className="text-guide">guía paso a paso</span>
              </a>
              . Podrías encontrar este tutorial y la guía, complementarias entre
              sí.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SectionContainer;
