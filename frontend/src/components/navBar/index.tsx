import { StyledNavBar } from "./style";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  function logout() {
    const history = useHistory();
    localStorage.clear();
    history.push("/login");
  }

  return (
    <StyledNavBar>
      <ul>
        <li>
          <a onClick={() => logout()}>Logout</a>
        </li>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/httpcat">http cat</Link>
        </li>
        <li>
          <Link to="/randomdog">random dog</Link>
        </li>
        <li>
          <Link to="/clients">clientes</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
