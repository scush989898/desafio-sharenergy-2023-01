import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import randomDogApi from "../../services/API/randomDog.api";
import { StyledDiv } from "./style";

export default function RandomDog() {
  const [currentImage, setCurrentImage] = useState<null | string>(null);
  const [arrURL, setArrURL] = useState<string[]>([]);

  useEffect(() => {
    randomDogApi
      .get("")
      .then((res) =>
        setArrURL(
          res.data.filter((el: string) => {
            return el.toLowerCase().endsWith("jpg") || el.toLowerCase().endsWith("png");
          })
        )
      )
      .catch((er) => er);
  }, []);

  function handleClick() {
    const random = Math.floor(Math.random() * (arrURL.length - 0)) + 0;
    setCurrentImage((prev) => `https://random.dog/${arrURL[random]}`);
  }

  return (
    <>
      <NavBar />
      <StyledDiv>
        <Button color="inherit" variant="contained" onClick={() => handleClick()}>
          refresh
        </Button>
        {currentImage != null && <img src={currentImage} alt="" />}
      </StyledDiv>
    </>
  );
}
