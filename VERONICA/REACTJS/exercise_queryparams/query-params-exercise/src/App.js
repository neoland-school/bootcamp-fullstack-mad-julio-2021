import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PaginaUno from "./pages/pagina-uno";
import PaginaDos from "./pages/pagina-dos";

function App() {
  return (
    <React.Fragment>
    <Router>
      <Switch>
          <Route path="/paginauno">
          <PaginaUno />
          </Route>
          <Route path="/paginados">
          <PaginaDos />
          </Route>
          <Route path="*">
          <PaginaUno />
          </Route>
          
        </Switch>
   </Router>
  </React.Fragment>
  );
}

export default App;
