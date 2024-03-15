import { Parallax } from "react-scroll-parallax";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Typography } from "@mui/material";
import Boton from "../../common/button/Boton";
import { Link } from "react-router-dom";

const Otros = () => {
  return (
    <>
      <Parallax speed={-12}>
        <Box mt={8}>
          <img width={"100%"} height={"472vh"} src="/foto01otros.png" alt="" />
        </Box>
      </Parallax>

      <Box position={"absolute"} left={"20%"} top={"24%"} zIndex={100}>
        <img width={"8%"} src="/logoBlancoBi.png" alt="" />
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
          Productos
        </Typography>
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
          Terapéuticos
        </Typography>

        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontStyle: "italic",

            fontSize: "60px",
            lineHeight: "81px",
            color: "white",
          }}
        >
          Nutricionales Esenciales
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            width: "380px",
            fontSize: "16px",
            lineHeight: "17px",
            color: "white",

            mt: 0,
          }}
        >
          Dentro de las posibilidades terapéuticas actuales para los EIM, el
          tratamiento nutricional es el pilar más importante en el manejo global
          de estos trastornos.
        </Typography>
      </Box>

      <Box
        mt={-2}
        width={"100%"}
        bgcolor={"#004ed7"}
        /* style={{
          backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
        }} */
      >
        <Box width={"100%"} pt={0} height={"26vh"} p={"3%"}>
          <Typography
            sx={{
              pt: 10,
              width: "70%",
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "30px",
              fontWeight: "light", // Debería ser "normal" en lugar de "regular"
              fontStyle: "italic",
              lineHeight: "30px",
              color: "white",
            }}
          >
            TALES COMO {""}
            <strong>
              reparación de tejidos en personas adultas que presenten heridas de
              difícil cicatrización (Abintra), restauración de la superficie y
              flora intestinal (Glutapak R) y mejora cognitiva en personas con
              síndrome de Down (Font Up)
            </strong>{" "}
          </Typography>
        </Box>

        <Box mt={10} textAlign={"center"}>
          <Boton texto={"Productos"} linkTo={"/productos"} />
        </Box>

        <Box mt={6}>
          <Box width={"100%"} height={"30vh"}>
            <Box
              display={"flex"}
              width={"60%"}
              m={"auto"}
              justifyContent={"space-between"}
            >
              <Box mt={5}>
                <Box>
                  <img width={"80%"} src="/logofooter.png" alt="" />
                </Box>
                <Box display={"flex"} mt={2}>
                  <CallIcon fontSize="small" sx={{ color: "white" }} />
                  <Typography sx={{ ml: 1, fontSize: "14px", color: "white" }}>
                    4932 4816
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Box
                      mt={2}
                      component={Link}
                      to={"/contacto"}
                      style={{ textDecoration: "none" }}
                    >
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
                          Escribinos
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mt={5}>
                <Box display={"flex"}>
                  <WhatsAppIcon sx={{ color: "white", ml: 2 }} />
                  <InstagramIcon sx={{ color: "white", ml: 2 }} />
                  <YouTubeIcon sx={{ color: "white", ml: 2 }} />
                  <LinkedInIcon sx={{ color: "white", ml: 2 }} />
                  <FacebookIcon sx={{ color: "white", ml: 2 }} />
                </Box>

                <a
                  href="mailto:info@b-life.com.ar"
                  style={{ textDecoration: "none" }}
                >
                  <Box display={"flex"} mt={3}>
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ color: "white", ml: 6 }}
                    />
                    <Typography
                      sx={{ ml: 1, fontSize: "15px", color: "white" }}
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

export default Otros;
