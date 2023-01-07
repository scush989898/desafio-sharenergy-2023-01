import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";
import { Button, TextField } from "@mui/material";

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

export default function ModalView() {
  const { modalView, setModalView } = useContext(mainContext);
  const handleClose = () => setModalView(false);
  const { currentClient, setCurrentClient } = useContext(mainContext);

  return (
    <div>
      <Modal open={modalView} closeAfterTransition>
        <Fade in={modalView}>
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
              Cliente Detalhado
            </Typography>
            <TextField
              label={"Nome"}
              defaultValue={currentClient.name}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Email"}
              defaultValue={currentClient.email}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Telefone"}
              defaultValue={currentClient.phone}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"CPF"}
              defaultValue={currentClient.cpf}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Rua"}
              defaultValue={currentClient.address.street}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Número"}
              defaultValue={currentClient.address.number}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Bairro"}
              defaultValue={currentClient.address.district}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />

            <TextField
              label={"Cidade"}
              defaultValue={currentClient.address.city}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"Estado"}
              defaultValue={currentClient.address.state}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
              label={"CEP"}
              defaultValue={currentClient.address.zipCode}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              sx={{ width: "100%", marginBottom: "15px" }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
