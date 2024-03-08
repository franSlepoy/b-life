import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { fotos } from "../../../carousel/fotos/Fotos";
import Footer from "../../footer/Footer";
import { Parallax } from "react-scroll-parallax";
import Boton from "../../common/button/Boton";

const Home = () => {
  return (
    <>
      <Parallax speed={-12}>
        <Carousel
          sx={{
            mt: "4.5%",
            height: "484px", // Altura fija para el carrusel
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
      </Parallax>

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
          Sobre
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontStyle: "italic",

            fontSize: "60px",
            lineHeight: "61px",
            color: "#007E48",
          }}
        >
          Nosotros
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            width: "290px",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#007E48",
            mt: 1,
          }}
        >
          Especialistas con más de 27 años de experiencia en el tratamiento
          nutricional especializado.
        </Typography>
      </Box>

      <Box position={"absolute"} zIndex={100} top={"57%"} left={"20%"}>
        <Boton texto={"Conocé más"} />
      </Box>

      <Box
        mt={-2}
        width={"100%"}
        height={"65vh"}
        style={{
          backgroundImage: "linear-gradient(to  top, #FFFFFF , #00d747)",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"64%"}
          m={"auto"}
          pt={20}
          pb={4}
        >
          <Box textAlign={"center"}>
            <Box>
              <img width={"40px"} src="/botiquin.png" alt="" />
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "18px",
                color: "#007E48",
                width: "160px",
                m: "auto",
                pt: 2,
              }}
            >
              COMPROMISO CON EL PACIENTE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "18px",
                color: "#007E48",
                width: "235px",
              }}
            >
              {" "}
              Priorizar las necesidades y la seguridad de los pacientes en todas
              nuestras actividades, desde la investigación y desarrollo hasta la
              comercialización y el uso de nuestros productos.
            </Typography>
          </Box>

          <Box textAlign={"center"}>
            <Box textAlign={"center"}>
              <img width={"50px"} src="/frasco.png" alt="" />
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
                m: "auto",
              }}
            >
              CALIDAD
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "18px",
                color: "#007E48",
                width: "215px",
              }}
            >
              {" "}
              Compromiso con la excelencia en la importación y desarrollo de
              alimentos para propósito médico seguros, eficaces y de alta
              calidad.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <Box>
              <img width={"50px"} src="/diamante.png" alt="" />
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
                m: "auto",
              }}
            >
              RESPETO
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "regular",
                textAlign: "center",
                lineHeight: "22px",
                color: "#007E48",
                width: "210px",
              }}
            >
              {" "}
              B-Life considera el respeto uno de sus principales valores,
              demostrándolo en cada contacto y en cada lugar en el que está
              presente.
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
            <img width={"185px"} src="/logoerrorescongenitos.png" alt="" />
          </Box>
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
          <Box  mt={20}>
            <img width={"185px"} src="/logoaplv.png" alt="" />
          </Box>
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
          <Box  mt={20}>
            <img width={"160px"} src="/logootros.png" alt="" />
          </Box>
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
        height={"68vh"}
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
          
            <Box mt={1} >
             <Boton texto={"Descubrilos"}/>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
