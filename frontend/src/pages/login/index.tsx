import { Button, TextField, FormControlLabel, Checkbox, Container, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";
import { userSchema } from "../../schemas/user.schema";
import internalAPI from "../../services/API/internal.api";
import { mainContext } from "../../context/main.context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const history = useHistory();
  const { setToken } = useContext(mainContext);

  async function onSubmit(data: any): Promise<void> {
    await internalAPI
      .post("/login", data)
      .then((res) => {
        setToken(res.data.token);
        if (data.remember == true) {
          localStorage.setItem("@TOKEN", res.data.token);
        } else {
          sessionStorage.setItem("@TOKEN", res.data.token);
          localStorage.clear();
        }
        history.push("/");
      })
      .catch((er) => window.alert(er.response.data.message));
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
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
      </StyledForm>
    </Box>
  );
}
