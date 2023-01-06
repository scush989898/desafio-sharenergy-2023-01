import { Button } from "@mui/material";
import { useState } from "react";
import NavBar from "../../components/navBar";
import { StyledDiv } from "./style";

export default function HttpCat() {
  const [currentCode, setCurrentCode] = useState(404);
  const [show, setShow] = useState(false);
  return (
    <>
      <NavBar />
      <StyledDiv>
        <div>
          <input
            type="number"
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
          <Button color="inherit" variant="contained" onClick={() => setShow(true)}>
            Mostrar
          </Button>
        </div>

        {show && <img className="imghttpcat" src={`https://http.cat/${currentCode}.jpg`} />}
      </StyledDiv>
    </>
  );
}
