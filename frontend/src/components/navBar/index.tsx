import { StyledNavBar } from "./style";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <StyledNavBar>
      <ul className="firstUL">
        <li>
          <Link to="/">random users</Link>
        </li>
        <li>
          <Link to="/httpcat">http cat</Link>
        </li>
        <li>
          <Link to="/randomdog">random dogs</Link>
        </li>
        <li>
          <Link to="/clients">clientes</Link>
        </li>
      </ul>
      <ul className="secondUL">
        <li>
          <a onClick={() => logout()}>Logout</a>
        </li>
      </ul>
    </StyledNavBar>
  );
}
