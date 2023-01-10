import Button from "@mui/material/Button";
import { Container, CardMedia } from "@mui/material";
import { useState } from "react";
import NavBar from "../../components/navBar";
import randomDogApi from "../../services/API/randomDog.api";

export default function RandomDog() {
  const [currentImage, setCurrentImage] = useState<null | string>(null);

  async function handleClick() {
    await randomDogApi.get("").then((res) => {
      setCurrentImage(res.data.url);
    });
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
        {currentImage != null &&
          (currentImage.toLowerCase().endsWith("mp4") ||
            currentImage.toLowerCase().endsWith("webm")) && (
            <CardMedia
              component="video"
              src={currentImage}
              controls={true}
              autoPlay={true}
              sx={{ borderRadius: "10%", height: "390px", width: "390px", marginTop: "30px" }}
            />
          )}

        {currentImage != null &&
          !currentImage.toLowerCase().endsWith("mp4") &&
          !currentImage.toLowerCase().endsWith("webm") && (
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
