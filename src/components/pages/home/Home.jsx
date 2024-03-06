import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { fotos } from "../../../carousel/fotos/Fotos";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <>
      <Carousel
        sx={{
          mt: "4.5%",
          height: "520px", // Altura fija para el carrusel
          bgcolor: "#00d747",
        }}
      >
        {fotos.map((foto) => (
          <Box key={"foto.is"} width={"100%"}>
            <img
              width={"100%"}
              style={{ width: "100%", height: "66.9vh", objectFit: "cover" }}
              src={foto.imagen}
              alt=""
            />
          </Box>
        ))}
      </Carousel>
      <Box position={"absolute"} left={"20%"} top={"24%"} zIndex={100}>
        <img width={"18%"} src="/logoCarrusel.png" alt="" />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "light",
            width: "310px",
            fontSize: "60px",
            lineHeight: "55px",
            color: "#007E48",
            mt: 2,
          }}
        >
          Carrusel de imágenes
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontStyle: "italic",

            fontSize: "60px",
            lineHeight: "71px",
            color: "#007E48",
          }}
        >
          Nosotros
        </Typography>
      </Box>

      <Box position={"absolute"} zIndex={100} top={"42.5%"} left={"66%"}>
        <img width={"80%"} src="/dibujoHome1.png" alt="" />
      </Box>
      <Box position={"absolute"} zIndex={100} top={"55%"} left={"20%"}>
        <img width={"128px"} src="/botonVerdeBlanco.png" alt="" />
      </Box>
      <Box position={"absolute"} zIndex={100} top={"51.6%"} left={"22.3%"}>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            fontSize: "12px",
            lineHeight: "81px",
            color: " #007E48",
          }}
        >
          Conocé más
        </Typography>
      </Box>

      <Box
        width={"100%"}
        height={"38vh"}
        style={{
          backgroundImage: "linear-gradient(to  top, #FFFFFF , #00d747)",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"58%"}
          m={"auto"}
          pt={3}
          pb={4}
        >
          <Box textAlign={"center"}>
            <Box>
              <img width={"50px"} src="/diamante.png" alt="" />
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                mt: 2,
              }}
            >
              EXCELENCIA
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "130px",
              }}
            >
              {" "}
              Contamos con productos de excelente calidad.
            </Typography>
          </Box>

          <Box ml={4} textAlign={"center"}>
            <Box textAlign={"center"}>
              <img width={"40px"} src="/botiquin.png" alt="" />
            </Box>
            <Typography
              sx={{
                mt: 3,
                fontFamily: "Lato",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "190px",
                ml: 1,
              }}
            >
              ATENCIÓN PERSONAL
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "180px",
                ml: 2,
              }}
            >
              {" "}
              Brindamos una atención personalizada.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <Box>
              <img width={"50px"} src="/frasco.png" alt="" />
            </Box>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Lato",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "150px",
              }}
            >
              PRODUCTOS VARIADOS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "160px",
              }}
            >
              {" "}
              Buscamos cubrir todas las necesidades.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" width={"100%"}>
        <Box
          sx={{
            backgroundImage: `url("/seccioncetogenica.png")`, // Corregir backgroundImage y la ruta de la imagen
            padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
            textAlign: "center", // Centrar contenido dentro del Box
            width: "25%",
            height: "64vh",
          }}
        >
          <Box mt={20}>
            <img width={"160px"} src="/logoterapiacetogenica.png" alt="" />
          </Box>

          <Typography
            sx={{
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "regular", // Debería ser "normal" en lugar de "regular"
              lineHeight: "22px",
              color: "white",
              width: "160px",
            }}
          >
            Lorem ipsum dolor sit amet, con
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url("/seccionhipoproteica.png")`, // Corregir backgroundImage y la ruta de la imagen
            padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
            textAlign: "center", // Centrar contenido dentro del Box
            width: "25%",
            height: "64vh",
          }}
        >
          <Box mt={20}>
            <img width={"160px"} src="/logoerrorescongenitos.png" alt="" />
          </Box>

          <Typography
            sx={{
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "regular", // Debería ser "normal" en lugar de "regular"
              lineHeight: "22px",
              color: "white",
              width: "160px",
            }}
          >
            Lorem ipsum dolor sit amet, con
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url("/seccionaplv.png")`, // Corregir backgroundImage y la ruta de la imagen
            padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
            textAlign: "center", // Centrar contenido dentro del Box
            width: "25%",
            height: "64vh",
          }}
        >
          <Box mt={20}>
            <img width={"160px"} src="/logoaplv.png" alt="" />
          </Box>

          <Typography
            sx={{
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "regular", // Debería ser "normal" en lugar de "regular"
              lineHeight: "22px",
              color: "white",
              width: "160px",
            }}
          >
            Lorem ipsum dolor sit amet, con
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url("/seccionotros.png")`, // Corregir backgroundImage y la ruta de la imagen
            padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
            textAlign: "center", // Centrar contenido dentro del Box
            width: "25%",
            height: "64vh",
          }}
        >
          <Box mt={20}>
            <img width={"160px"} src="/logootros.png" alt="" />
          </Box>

          <Typography
            sx={{
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "regular", // Debería ser "normal" en lugar de "regular"
              lineHeight: "22px",
              color: "white",
              width: "160px",
            }}
          >
            Lorem ipsum dolor sit amet, con
          </Typography>
        </Box>
      </Box>

      <Box width={"100%"} height={"26vh"} p={"3%"}>
        <Typography
          sx={{
            width: "40%",
            m: "auto",
            textAlign: "center",
            fontFamily: "Lato",
            fontSize: "30px",
            fontWeight: "light", // Debería ser "normal" en lugar de "regular"
            fontStyle: "italic",
            lineHeight: "35px",
            color: "#007E48",
          }}
        >
          <strong>Nos asociamos con las mejores marcas del mundo,</strong> PARA
          BRINDAR PRODUCTOS DE EXCELENTE CALIDAD.
        </Typography>
      </Box>

      <Box
        height={"66vh"}
        pl={"20%"}
        pt={"11%"}
        sx={{ backgroundImage: `url("/carousel2.png")` }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "61px",
            fontWeight: "light", // Debería ser "normal" en lugar de "regular"

            lineHeight: "61px",
            color: "white",
          }}
        >
          Nuestros
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "61px",
            fontWeight: "bold", // Debería ser "normal" en lugar de "regular"
            fontStyle: "italic",
            lineHeight: "61px",
            color: "white",
          }}
        >
          Productos
        </Typography>
        <Box>
          <Box mt={1}>
            <img width={"128px"} src="/botonVerdeBlanco.png" alt="" />
            <Box mt={-8} ml={4}>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "regular",
                  fontSize: "12px",
                  lineHeight: "81px",
                  color: " #007E48",
                }}
              >
                Conocé más
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </>
  );
};

export default Home;
