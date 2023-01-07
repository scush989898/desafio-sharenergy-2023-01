import NavBar from "../../components/navBar";
import { StyledDiv } from "./style";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import ClientCard from "../../components/clientCard";
import ModalCreate from "../../components/modalCreate";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";
import ModalUpdate from "../../components/modalUpdate";
import ModalView from "../../components/modalView";

const Clients = () => {
  const { modalCreate, setModalCreate } = useContext(mainContext);
  return (
    <>
      <NavBar />
      <Button color="inherit" variant="contained" onClick={() => setModalCreate(true)}>
        Adicionar novo cliente
      </Button>
      <ModalCreate />
      <ModalUpdate />
      <ModalView />
      <TableContainer component={Paper} sx={{ minWidth: 390, maxWidth: 1100 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }} align="center">
                Nome
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }} align="center">
                Email
              </TableCell>

              <TableCell sx={{ fontWeight: "bolder" }} align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ClientCard
              name={"clientenome"}
              email={"newclient2@mail.com"}
              phone={"11988445566"}
              cpf={"33322299988"}
              address={{
                district: "bairro da lua",
                zipCode: "45985099",
                city: "new york",
                state: "sao paulo",
                number: "4562",
                street: "rua treze",
              }}
              id={"9090"}
              key={1}
            />
            <ClientCard
              name={"teste2"}
              email={"teste2@mail.com"}
              phone={"teste2"}
              cpf={"teste2"}
              address={{
                district: "assump",
                zipCode: "teste2",
                city: "new teste2",
                state: "nw teste2",
                number: "teste2",
                street: "rua 2",
              }}
              id={"8888"}
              key={2}
            />
            <ClientCard
              name={"tesasasasasasaste2"}
              email={"teste2@mail.com"}
              phone={"teste2"}
              cpf={"teste2"}
              address={{
                district: "new teste2",
                zipCode: "teste2",
                city: "new teste2",
                state: "nw teste2",
                number: "teste2",
                street: "bairor x",
              }}
              id={"999999999"}
              key={3}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Clients;
