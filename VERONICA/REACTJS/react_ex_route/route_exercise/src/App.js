import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginForm from "./pages/loginPage";
import FirtsPage from './pages/firstPage';
import PrivateCount from "./pages/greetingNewUser";
import PrivateRoute from "./components";
import HomeButton from './hola-mundo-redirection';


function App() {

  return (

    <Router>
      <HomeButton/>
      <Switch>
        <PrivateRoute path='/user'>
          <PrivateCount />
        </PrivateRoute>

        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="*">
          <FirtsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
