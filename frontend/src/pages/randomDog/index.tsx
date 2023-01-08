import Button from "@mui/material/Button";
import { Container, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import randomDogApi from "../../services/API/randomDog.api";

export default function RandomDog() {
  const [currentImage, setCurrentImage] = useState<null | string>(null);
  const [arrURL, setArrURL] = useState<string[]>([]);

  useEffect(() => {
    randomDogApi
      .get("")
      .then((res) =>
        setArrURL(
          res.data.filter((el: string) => {
            return !el.toLowerCase().endsWith("mp4") && !el.toLowerCase().endsWith("webm");
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  async function handleClick() {
    const min = 0;
    const max = arrURL.length - 1;
    const random = Math.floor(Math.random() * (max - min)) + min;
    setCurrentImage(`https://random.dog/${arrURL[random]}`);
  }

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
        <Button
          sx={{ width: "180px" }}
          color="inherit"
          variant="contained"
          onClick={() => handleClick()}
        >
          refresh
        </Button>
        {currentImage != null && (
          <CardMedia
            src={currentImage}
            component="img"
            sx={{ borderRadius: "10%", height: "390px", width: "390px", marginTop: "30px" }}
          />
        )}
      </Container>
    </>
  );
}
