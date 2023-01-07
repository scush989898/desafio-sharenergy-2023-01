import { TableRow, TableCell, Button } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";

interface IClientProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: {
    district: string;
    zipCode: string;
    city: string;
    state: string;
    street: string ;
    number?: string | null | undefined;
  };
}

export default function ClientCard({ name, email, phone, cpf, address, id }: IClientProps) {
  const { modalUpdate, setModalUpdate } = useContext(mainContext);
  const { modalView, setModalView } = useContext(mainContext);
  const { currentClient, setCurrentClient } = useContext(mainContext);

  const handleUpdate = () => {
    setCurrentClient({ name, email, phone, cpf, address, id });
    setModalUpdate(true);
  };
  const handleView = () => {
    setCurrentClient({ name, email, phone, cpf, address, id });
    setModalView(true);
  };

  const handleDelete = () => {
    console.log(id);
  };
  return (
    <TableRow>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">
        <Button onClick={() => handleView()}>Visualizar</Button>
        <Button onClick={() => handleUpdate()}>Atualizar</Button>
        <Button onClick={() => handleDelete()}>Excluir</Button>
      </TableCell>
    </TableRow>
  );
}
