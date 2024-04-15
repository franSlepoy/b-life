import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import { fotosProductosCarousel } from "../../../carousel/fotos/FotosProductos";
import ProductosFiltros from "./ProductosFiltros";
import Footer from "../../common/footer/Footer";

const Productos = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        timeOut={100}
        sx={{
          mt: 8,
          bgcolor: "#007E48",
          height: "500px",
        }}
      >
        {fotosProductosCarousel.map((foto) => (
          <Box key={"foto.is"}>
            <img
              width={"100%"}
              height={"500px"}
              style={{ width: "100%", objectFit: "cover" }}
              src={foto.imagen}
              alt=""
            />
          </Box>
        ))}
      </Carousel>

      <Box position={"absolute"} left={"20%"} top={"24%"} zIndex={100}>
        <img width={"10%"} src="/logoBlancoBi.png" alt="" />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "light",
            width: "310px",
            fontSize: "60px",
            lineHeight: "55px",
            color: "white",
            mt: 2,
          }}
        >
          Nuestros
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontStyle: "italic",

            fontSize: "60px",
            lineHeight: "61px",
            color: "white",
          }}
        >
          Productos
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            width: "290px",
            fontSize: "14px",
            lineHeight: "17px",
            color: "white",
            mt: 1,
          }}
        >
          Conocé nuestro catálogo
        </Typography>
      </Box>
      <Box>
        <ProductosFiltros />
      </Box>
      <Box>
      <Footer/>
      </Box>
    </>
  );
};

export default Productos;
