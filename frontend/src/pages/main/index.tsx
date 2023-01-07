import NavBar from "../../components/navBar";
import {
  Button,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import randomUserApi from "../../services/API/randomUser.api";
import RandomCard from "../../components/randomCard";
import { mainContext } from "../../context/main.context";

interface IRandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
}

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState<IRandomUser[]>([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const { token } = useContext(mainContext);
  console.log(token);
  useEffect(() => {
    randomUserApi
      .get(`?page=${currentPage}&results=10&seed=abc`)
      .then((res) => {
        setUserList([...res.data.results]);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ backgroundColor: "white" }}>
          <TextField
            label="Pesquisar"
            placeholder="Pesquisar por nome, email ou username"
            variant="standard"
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
        </Box>
        <TableContainer
          component={Paper}
          sx={{ minWidth: 390, maxWidth: 1200, marginBottom: "20px", marginTop: "20px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  Foto
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  Nome
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  Username
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  Idade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentSearch == ""
                ? userList.map((elem: IRandomUser, index: number) => {
                    return (
                      <RandomCard
                        image={elem.picture.large}
                        age={elem.dob.age}
                        email={elem.email}
                        name={`${elem.name.first} ${elem.name.last}`}
                        username={elem.login.username}
                        key={index}
                      />
                    );
                  })
                : userList
                    .filter((elem: IRandomUser) => {
                      return (
                        elem.name.first.includes(currentSearch) ||
                        elem.name.last.includes(currentSearch) ||
                        elem.email.includes(currentSearch) ||
                        elem.login.username.includes(currentSearch)
                      );
                    })
                    .map((elem: IRandomUser, index: number) => {
                      return (
                        <RandomCard
                          image={elem.picture.large}
                          age={elem.dob.age}
                          email={elem.email}
                          name={`${elem.name.first} ${elem.name.last}`}
                          username={elem.login.username}
                          key={index}
                        />
                      );
                    })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Button
            color="inherit"
            variant="contained"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Anterior
          </Button>
          <Typography
            sx={{ width: "5%", textAlign: "center", color: "white" }}
            variant="h6"
            component="h2"
          >
            {currentPage}
          </Typography>
          <Button
            color="inherit"
            variant="contained"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Próxima
          </Button>
        </Box>
      </Container>
    </>
  );
}
