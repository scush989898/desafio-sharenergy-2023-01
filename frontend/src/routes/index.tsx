import { Switch, Route, useHistory } from "react-router-dom";
import { useContext } from "react";
import Login from "../pages/login";
import { mainContext } from "../context/main.context";
import Main from "../pages/main";
import HttpCat from "../pages/httpCat";
import RandomDog from "../pages/randomDog";
import Clients from "../pages/clients";

export default function Routes() {
  const history = useHistory();
  const { token } = useContext(mainContext);

  if (!token) {
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
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor:"black"
          }}
        >
          <img src="https://http.cat/404" alt="404-notfound" />
        </pre>
      </Route>
    </Switch>
  );
}
