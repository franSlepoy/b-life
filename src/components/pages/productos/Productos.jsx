import Carousel from "react-material-ui-carousel";
import { Box, Hidden, Typography } from "@mui/material";
import { fotosProductosCarousel } from "../../../carousel/fotos/FotosProductos";
import ProductosFiltros from "./ProductosFiltros";
import Footer from "../../common/footer/Footer";

const Productos = () => {
  return (
    <>
      <Hidden smDown>
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
            Conocé más sobre nuestras líneas. 
          </Typography>
        </Box>
        <Box>
          <ProductosFiltros />
        </Box>
        <Box textAlign={"center"}>
          <Typography
            sx={{
              pt: 10,
              width: "40%",
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "30px",
              fontWeight: "light", // Debería ser "normal" en lugar de "regular"
              fontStyle: "italic",
              lineHeight: "30px",
              color: "#007E48",
            }}
          >
           <strong>Explorá nuestras líneas,</strong>  Y DESCUBRÍ NUESTROS PRODUCTOS.
          </Typography>
        </Box>

        <Box>
          <Footer />
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <img
            width={"100%"}
            height={"500px"}
            style={{ width: "100%", objectFit: "cover" }}
            src="fotoproductos-inicio.png"
            alt=""
          />
        </Box>

        <Box position={"absolute"} left={"6%"} top={"200px"}>
          <img width={"20%"} src="/logoBlancoBi.png" alt="" />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",

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
              width: "290x",
              fontSize: "14px",
              lineHeight: "17px",
              color: "white",
              mt: 1,
            }}
          >
            Conocé más sobre nuestras líneas.
          </Typography>
        </Box>
        <Box mt={-1}>
          <ProductosFiltros />
          <Box textAlign={"center"}>
          <Typography
            sx={{
              pt: 8,
              width: "90%",
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "30px",
              fontWeight: "light", // Debería ser "normal" en lugar de "regular"
              fontStyle: "italic",
              lineHeight: "30px",
              color: "#007E48",
            }}
          >
           <strong>Explorá nuestras líneas,</strong>  Y DESCUBRÍ NUESTROS PRODUCTOS.
          </Typography>
        </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Hidden>
    </>
  );
};

export default Productos;
