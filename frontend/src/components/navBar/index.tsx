import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Link } from "@mui/material";

const pages = [
  { name: "Users", to: "/" },
  { name: "Cats", to: "/httpcat" },
  { name: "Dogs", to: "/randomdog" },
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
    window.location.reload();
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", gap: "5px" },
              backgroundColor: "black",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleLink(page.to)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  cursor: "pointer",
                  fontSize: "13.4px",
                  padding: "5px 3px",
                }}
                variant="outlined"
              >
                {page.name}
              </Button>
            ))}
            <Button
              key={pages.length + 1}
              onClick={() => logout()}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                cursor: "pointer",
                fontSize: "13.4px",
                padding: "5px 3px",
              }}
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
