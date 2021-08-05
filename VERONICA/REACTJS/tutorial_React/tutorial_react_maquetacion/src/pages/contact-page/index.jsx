import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import ContactEmail from "./contact_Email/contactEmail";
import ContactTel from "./contact_Tel/contactTel";

const ContactPage = function() {
  let match = useRouteMatch();
  return (
    <div>
      <Link to={`${match.url}/contactTel`}>Aquí puedes obtener teléfono</Link>
      <Link to={`${match.url}/contactEmail`}>Aquí puedes obtener Email</Link>

      <Switch>
        <Route path={`${match.path}/contactTel`}>
          <ContactTel />
        </Route>
        <Route path={`${match.path}/contactEmail`}>
          <ContactEmail />
        </Route>
      </Switch>
    </div>
  );
}

export default ContactPage;
