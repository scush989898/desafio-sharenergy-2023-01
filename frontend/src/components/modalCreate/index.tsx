import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { mainContext } from "../../context/main.context";
import { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientCreateSchema } from "../../schemas/client.schema";
import internalAPI from "../../services/API/internal.api";
import { IClientCreate, IClientResponse } from "../../interfaces/client.interface";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
};

interface IClientProps {
  setClientList: React.Dispatch<React.SetStateAction<IClientResponse[]>>;
}

export default function ModalCreate({ setClientList }: IClientProps) {
  const { modalCreate, setModalCreate } = useContext(mainContext);
  const { token } = useContext(mainContext);
  const { modalError, setModalError } = useContext(mainContext);
  const { messageError, setMessageError } = useContext(mainContext);

  const handleClose = () => setModalCreate(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(clientCreateSchema) });

  async function onSubmit(data: any): Promise<void> {
    await handleCreate(data);
  }

  const handleCreate = async (data: IClientCreate) => {
    await internalAPI
      .post("/client", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => updateListClients())
      .catch((err) => {
        setModalError(true);
        setMessageError(err.response.data.message);
      });
  };

  const updateListClients = async () => {
    await internalAPI
      .get("/client", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClientList(res.data));
    setModalCreate(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalCreate}
        closeAfterTransition
      >
        <Fade in={modalCreate}>
          <Box sx={style}>
            <Button
              sx={{ width: "25%" }}
              color="inherit"
              variant="contained"
              onClick={() => handleClose()}
            >
              Fechar
            </Button>

            <Typography
              sx={{ width: "100%", marginBottom: "15px" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Novo Cliente
            </Typography>
            <form
              style={{ width: "100%", display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                {...register("name")}
                error={!!errors.name}
                sx={{ marginBottom: "10px" }}
                label="Nome"
                placeholder="Nome"
                variant="standard"
                required
              />
              <TextField
                {...register("email")}
                error={!!errors.email}
                sx={{ marginBottom: "10px" }}
                label="Email"
                placeholder="Email"
                variant="standard"
                required
              />
              <TextField
                {...register("phone")}
                error={!!errors.phone}
                sx={{ marginBottom: "10px" }}
                label="Telefone"
                placeholder="Telefone"
                variant="standard"
                required
              />
              <TextField
                {...register("cpf")}
                error={!!errors.cpf}
                sx={{ marginBottom: "10px" }}
                label="CPF"
                placeholder="CPF"
                variant="standard"
                required
              />
              <TextField
                {...register("address.street")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Rua"
                placeholder="Rua"
                variant="standard"
                required
              />
              <TextField
                {...register("address.number")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Número"
                placeholder="Número"
                variant="standard"
              />
              <TextField
                {...register("address.district")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Bairro"
                placeholder="Bairro"
                variant="standard"
                required
              />
              <TextField
                {...register("address.city")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Cidade"
                placeholder="Cidade"
                variant="standard"
                required
              />
              <TextField
                {...register("address.state")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Estado"
                placeholder="Estado"
                variant="standard"
                required
              />
              <TextField
                {...register("address.zipCode")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="CEP"
                placeholder="CEP"
                variant="standard"
                required
              />
              <Button
                color="inherit"
                variant="contained"
                type={"submit"}
                sx={{ marginTop: "15px" }}
              >
                Cadastrar
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
