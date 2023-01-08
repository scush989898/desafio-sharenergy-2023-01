import { Button, Container, TextField, CardMedia, Box } from "@mui/material";
import { useState } from "react";
import NavBar from "../../components/navBar";

export default function HttpCat() {
  const [currentCode, setCurrentCode] = useState(404);
  const [show, setShow] = useState(false);
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
            backgroundColor: "white",
            borderRadius: "12px",
            marginTop: "20px",
            padding: "8px",
          }}
        >
          <TextField
            variant="outlined"
            label="Código"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              const v = +e.target.value;
              if (v <= 0) {
                setCurrentCode(404);
                setShow(false);
              } else {
                setCurrentCode(v);
                setShow(false);
              }
            }}
          />
        </Box>
        <Button
          sx={{ width: "180px", marginTop: "20px" }}
          color="inherit"
          variant="contained"
          onClick={() => setShow(true)}
        >
          Mostrar
        </Button>

        {show && (
          <CardMedia
            src={`https://http.cat/${currentCode}.jpg`}
            component="img"
            sx={{ borderRadius: "10%", height: "390px", width: "390px", marginTop: "30px" }}
          />
        )}
      </Container>
    </>
  );
}
