import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const pages = [
  { name: "Random Users", to: "/" },
  { name: "HttpCat", to: "/httpcat" },
  { name: "Random Dogs", to: "/randomdog" },
  { name: "Clientes", to: "/clients" },
];

function NavBar() {
  const history = useHistory();

  const handleLink = (link: string) => {
    history.push(link);
  };

  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    history.push("/login");
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "gray" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex", gap: "10px" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleLink(page.to)}
                sx={{ my: 2, color: "black", display: "block" }}
                color="inherit"
                variant="outlined"
              >
                {page.name}
              </Button>
            ))}
            <Button
              key={pages.length + 1}
              onClick={() => logout()}
              sx={{ my: 2, color: "black", display: "block" }}
              color="inherit"
              variant="outlined"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
