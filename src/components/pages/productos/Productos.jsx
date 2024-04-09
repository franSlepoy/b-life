import Carousel from "react-material-ui-carousel";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/material";
import { fotosProductosCarousel } from "../../../carousel/fotos/FotosProductos";

const Productos = () => {
  return (
    <>
      <Parallax speed={-12}>
        <Carousel
          autoPlay={true}
          timeOut={100}
          sx={
            {
            mt:8 // Altura fija para el carrusel
            }
          }
        >
          {fotosProductosCarousel.map((foto) => (
            <Box key={"foto.is"} width={"100%"} >
              <img
                width={"100%"}
                style={{ width: "100%", objectFit: "cover" }}
                src={foto.imagen}
                alt=""
              />
            </Box>
          ))}
        </Carousel>
      </Parallax>
    </>
  );
};

export default Productos;
