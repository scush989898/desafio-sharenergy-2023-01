import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { mainContext } from "../../context/main.context";
import { Button } from "@mui/material";

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

export default function ModalError() {
  const { modalError, setModalError } = useContext(mainContext);
  const { messageError, setMessageError } = useContext(mainContext);

  const handleClose = () => setModalError(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalError}
        closeAfterTransition
      >
        <Fade in={modalError}>
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
              Erro inesperado:
            </Typography>
            <Typography
              sx={{ width: "100%", marginBottom: "15px", fontWeight: "400" }}
              variant="h6"
              component="h2"
            >
              {messageError}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
