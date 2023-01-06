import { Switch, Route, useHistory } from "react-router-dom";
import { useContext } from "react";
import Login from "../pages/login";
import { TokenContext } from "../context/token.context";
import Main from "../pages/main";
import HttpCat from "../pages/httpCat";
import RandomDog from "../pages/randomDog";
import Clients from "../pages/clients";

export default function Routes() {
  const history = useHistory();
  const { isLogged, setIsLogged, token } = useContext(TokenContext);
  const lSTOKEN = localStorage.getItem("@TOKEN");

  if (!lSTOKEN && !token) {
    setIsLogged(false);
    history.push("/login");
  }
  if (lSTOKEN || token) {
    setIsLogged(true);
  }

  if (!isLogged && !lSTOKEN && !token) {
    history.push("/login");
  }

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/httpcat">
        <HttpCat />
      </Route>
      <Route exact path="/randomdog">
        <RandomDog />
      </Route>
      <Route exact path="/clients">
        <Clients />
      </Route>
      <Route path="*">
        <pre
          style={{
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <img src="src/assets/404.jpg" alt="404-notfound" />
        </pre>
      </Route>
    </Switch>
  );
}
