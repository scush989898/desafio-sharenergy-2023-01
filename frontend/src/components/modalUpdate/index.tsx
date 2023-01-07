import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientUpdateSchema } from "../../schemas/client.schema";
import internalAPI from "../../services/API/internal.api";

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

export default function ModalUpdate() {
  const { modalUpdate, setModalUpdate } = useContext(mainContext);
  const handleClose = () => setModalUpdate(false);
  const { currentClient, setCurrentClient } = useContext(mainContext);
  const { token } = useContext(mainContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(clientUpdateSchema) });

  async function onSubmit(data: any): Promise<void> {
    console.log(data);
    console.log(token);
    // await internalAPI
    //   .post("/client", data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((er) => console.log(er));
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalUpdate}
        closeAfterTransition
      >
        <Fade in={modalUpdate}>
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
              Atualizar Cliente
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
                defaultValue={currentClient.name}
              />
              <TextField
                {...register("email")}
                error={!!errors.email}
                sx={{ marginBottom: "10px" }}
                label="Email"
                placeholder="Email"
                variant="standard"
                defaultValue={currentClient.email}
              />
              <TextField
                {...register("phone")}
                error={!!errors.phone}
                sx={{ marginBottom: "10px" }}
                label="Telefone"
                placeholder="Telefone"
                variant="standard"
                defaultValue={currentClient.phone}
              />
              <TextField
                {...register("cpf")}
                error={!!errors.cpf}
                sx={{ marginBottom: "10px" }}
                label="CPF"
                placeholder="CPF"
                variant="standard"
                defaultValue={currentClient.cpf}
              />
              <TextField
                {...register("address.street")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Rua"
                placeholder="Rua"
                variant="standard"
                defaultValue={currentClient.address.street}
              />
              <TextField
                {...register("address.number")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Número"
                placeholder="Número"
                variant="standard"
                defaultValue={currentClient.address.number}
              />
              <TextField
                {...register("address.district")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Bairro"
                placeholder="Bairro"
                variant="standard"
                defaultValue={currentClient.address.district}
              />

              <TextField
                {...register("address.city")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Cidade"
                placeholder="Cidade"
                variant="standard"
                defaultValue={currentClient.address.city}
              />
              <TextField
                {...register("address.state")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="Estado"
                placeholder="Estado"
                variant="standard"
                defaultValue={currentClient.address.state}
              />
              <TextField
                {...register("address.zipCode")}
                error={!!errors.address}
                sx={{ marginBottom: "10px" }}
                label="CEP"
                placeholder="CEP"
                variant="standard"
                defaultValue={currentClient.address.zipCode}
              />

              <Button
                color="inherit"
                variant="contained"
                type={"submit"}
                sx={{ marginTop: "15px" }}
              >
                Atualizar
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
