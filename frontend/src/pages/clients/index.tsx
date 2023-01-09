import NavBar from "../../components/navBar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Container,
  Box,
} from "@mui/material";
import ClientCard from "../../components/clientCard";
import ModalCreate from "../../components/modalCreate";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/main.context";
import ModalUpdate from "../../components/modalUpdate";
import ModalView from "../../components/modalView";
import internalAPI from "../../services/API/internal.api";
import { IClientResponse } from "../../interfaces/client.interface";
import ModalError from "../../components/modalError";

const Clients = () => {
  const {  setModalCreate } = useContext(mainContext);
  const { token } = useContext(mainContext);
  const [clientList, setClientList] = useState<IClientResponse[]>([]);

  useEffect(() => {
    getClients();
  });

  async function getClients() {
    await internalAPI
      .get("/client", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClientList(res.data));
  }

  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            sx={{ width: "190px" }}
            color="inherit"
            variant="contained"
            onClick={() => setModalCreate(true)}
          >
            Adicionar cliente
          </Button>
        </Box>
        <ModalCreate setClientList={setClientList} />
        <ModalUpdate setClientList={setClientList} />
        <ModalView />
        <ModalError />
        <TableContainer component={Paper} sx={{ minWidth: 390, maxWidth: 1200 }}>
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
              {clientList.length !== 0 ? (
                clientList.map((elem, index) => {
                  return (
                    <ClientCard
                      name={elem.name}
                      email={elem.email}
                      phone={elem.phone}
                      cpf={elem.cpf}
                      address={{
                        district: elem.address.district,
                        zipCode: elem.address.zipCode,
                        city: elem.address.city,
                        state: elem.address.state,
                        number: elem.address.number,
                        street: elem.address.street,
                      }}
                      id={elem.id}
                      key={index}
                      setClientList={setClientList}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>Não existem clientes</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Clients;
