import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import { fotosProductosCarousel } from "../../../carousel/fotos/FotosProductos";
import ProductosFiltros from "./ProductosFiltros";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Boton from "../../common/button/Boton";
import CallIcon from "@mui/icons-material/Call";

const Productos = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        timeOut={100}
        sx={{
          mt: 8,
          bgcolor: "#007E48",
          height: "63vh",
        }}
      >
        {fotosProductosCarousel.map((foto) => (
          <Box key={"foto.is"}>
            <img
              width={"100%"}
              height={"100%"}
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
        <Box mt={16}>
          <Box width={"100%"} height={"30vh"}>
            <Box
              display={"flex"}
              width={"60%"}
              m={"auto"}
              justifyContent={"space-between"}
            >
              <Box mt={5}>
                <Box>
                  <img width={"50%"} src="/logoCarrusel.png" alt="" />
                </Box>
                <Box display={"flex"} mt={2}>
                  <CallIcon fontSize="small" sx={{ color: "#007E48" }} />
                  <Typography
                    sx={{ ml: 1, fontSize: "14px", color: "#007E48" }}
                  >
                    4932 4816
                  </Typography>
                </Box>
                <Box>
                  <Box mt={2}>
                    <Boton texto={"Escribinos"} linkTo={"/contacto"} />
                  </Box>
                </Box>
              </Box>

              <Box mt={6}>
                <Box display={"flex"}>
                  <Typography sx={{ fontSize: "15px", color: "#007E48" }}>
                    Cochabamba 3643.CABA
                  </Typography>
                </Box>

                <a
                  href="mailto:info@b-life.com.ar"
                  style={{ textDecoration: "none" }}
                >
                  <Box display={"flex"} mt={2}>
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ color: "#007E48", ml: 3 }}
                    />

                    <Typography
                      sx={{ ml: 1, fontSize: "15px", color: "#007E48" }}
                    >
                      info@b-life.com.ar
                    </Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Productos;
