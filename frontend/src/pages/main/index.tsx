import NavBar from "../../components/navBar";
import { Button, TextField } from "@mui/material";
import { StyledMain } from "./style";
import RandomUserCard from "../../components/randomUserCard";
import { useEffect, useState } from "react";
import randomUserApi from "../../services/API/randomUser.api";

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

  useEffect(() => {
    randomUserApi
      .get(`?page=${currentPage}&results=10&seed=abc`)
      .then((res) => {
        setUserList([...res.data.results]);
      })
      .catch((err) => window.alert(err));
  }, [currentPage]);

  return (
    <>
      <NavBar />
      <StyledMain>
        <form action="">
          <TextField
            label="Pesquisar"
            placeholder="Pesquisar por nome, email ou username"
            variant="standard"
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
        </form>
        <ul className="results">
          {currentSearch == ""
            ? userList.map((elem: IRandomUser, index: number) => {
                return (
                  <RandomUserCard
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
                    <RandomUserCard
                      image={elem.picture.large}
                      age={elem.dob.age}
                      email={elem.email}
                      name={`${elem.name.first} ${elem.name.last}`}
                      username={elem.login.username}
                      key={index}
                    />
                  );
                })}
        </ul>

        <div className="pagination">
          <Button
            color="inherit"
            variant="contained"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Anterior
          </Button>
          <span className="current_page">{currentPage}</span>
          <Button
            color="inherit"
            variant="contained"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Próxima
          </Button>
        </div>
      </StyledMain>
    </>
  );
}
