import { Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import { ProtectedRoute } from "../functionalComponents/protectedRoute/ProtectedRoute";
import { AuthContainer } from '../functionalComponents/Auth/root';
import { CallbackContainer } from '../functionalComponents/Auth/callback';

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
      <Route exact path="/auth/" component={AuthContainer} />
      <Route exact path="/auth/callback" component={CallbackContainer} />
    </Switch>
  );
};

export default routes;
