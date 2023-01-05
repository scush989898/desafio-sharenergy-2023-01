import { Switch, Route, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import Login from "../pages/login";
import { TokenContext } from "../context/token.context";
import Main from "../pages/main";

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
        <h2>httpcat</h2>
      </Route>
      <Route exact path="/randomdog">
        <h2>randomdog</h2>
      </Route>
      <Route exact path="/clients">
        <h2>clients</h2>
      </Route>
      <Route path="*">
        <pre
          style={{
            marginTop: "-100px",
            justifyContent: "center",
          }}
        >
          <img src="src/assets/404.jpg" alt="404-notfound" />
        </pre>
      </Route>
    </Switch>
  );
}
