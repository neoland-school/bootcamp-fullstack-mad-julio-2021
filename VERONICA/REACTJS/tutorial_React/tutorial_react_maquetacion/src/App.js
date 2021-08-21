import React from 'react';
import ContainerPrincipal from './pages/principal-page';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <React.Fragment>
   <Router>
 
   <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <ContainerPrincipal />
          </Route>
        </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
