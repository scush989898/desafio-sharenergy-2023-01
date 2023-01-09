import { Button, TextField, FormControlLabel, Checkbox, Container, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../schemas/user.schema";
import internalAPI from "../../services/API/internal.api";
import { mainContext } from "../../context/main.context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ModalError from "../../components/modalError";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const history = useHistory();
  const { setToken } = useContext(mainContext);

  const { setModalError } = useContext(mainContext);
  const { setMessageError } = useContext(mainContext);

  async function onSubmit(data: any): Promise<void> {
    await internalAPI
      .post("/login", data)
      .then((res) => {
        setToken(res.data.token);
        if (data.remember === true) {
          localStorage.setItem("@TOKEN", res.data.token);
        } else {
          sessionStorage.setItem("@TOKEN", res.data.token);
          localStorage.clear();
        }
        history.push("/");
      })
      .catch((er) => {
        setModalError(true);
        setMessageError(er.response.data.message);
      });
  }

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalError />
      <Box
        sx={{
          minWidth: "50%",
          height: "45vh",
          borderRadius: "20px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
        }}
      >
        <form
          style={{ width: "90%", display: "flex", flexDirection: "column", gap: "10px" }}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            {...register("username")}
            error={!!errors.username}
            label="Usuário"
            placeholder="Usuário"
            variant="standard"
          />

          <TextField
            {...register("password")}
            error={!!errors.password}
            type="password"
            label="Senha"
            placeholder="Senha"
            variant="standard"
          />
          <FormControlLabel
            {...register("remember")}
            control={<Checkbox defaultChecked />}
            label="Lembrar-me"
          />
          <Button color="inherit" variant="contained" type={"submit"}>
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
