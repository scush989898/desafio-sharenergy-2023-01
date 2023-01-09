import { TableRow, TableCell, Button } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";
import { IClientResponse } from "../../interfaces/client.interface";
import internalAPI from "../../services/API/internal.api";

interface IClientProps extends IClientResponse {
  setClientList: React.Dispatch<React.SetStateAction<IClientResponse[]>>;
}

export default function ClientCard({
  name,
  email,
  phone,
  cpf,
  address,
  id,
  setClientList,
}: IClientProps) {
  const { setModalUpdate } = useContext(mainContext);
  const {  setModalView } = useContext(mainContext);
  const {  setCurrentClient } = useContext(mainContext);
  const { token } = useContext(mainContext);

  const handleUpdate = async () => {
    setCurrentClient({ name, email, phone, cpf, address, id });
    setModalUpdate(true);
  };
  const handleView = () => {
    setCurrentClient({ name, email, phone, cpf, address, id });
    setModalView(true);
  };

  const handleDelete = async () => {
    await internalAPI
      .delete(`/client/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res)
      .catch((er) => console.log(er));
    await updateListClients();
  };

  const updateListClients = async () => {
    await internalAPI
      .get("/client", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClientList(res.data));
  };

  return (
    <TableRow>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button color="inherit" variant="contained" onClick={() => handleView()}>
          Visualizar
        </Button>
        <Button color="inherit" variant="contained" onClick={() => handleUpdate()}>
          Editar
        </Button>
        <Button color="inherit" variant="contained" onClick={() => handleDelete()}>
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  );
}
