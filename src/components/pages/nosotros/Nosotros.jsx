import { Box, Button, Typography } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Nosotros = () => {
  return (
    <>
      <Parallax speed={-12}>
        <Box mt={8}>
          <img
            width={"100%"}
            height={"472vh"}
            src="/foto01nosotros.png"
            alt=""
          />
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
          B-Life es
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
          Better
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
          Life
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
          Nos centramos en brindar atención personalizada a los pacientes,
          cuidadores, familiares y profesionales, colocando siempre en primer
          lugar el factor humano, aportando a una mejor calidad de vida.
        </Typography>
      </Box>

      <Box
        mt={-2}
        width={"100%"}
        style={{
          backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
        }}
      >
        <Box
          
          display={"flex"}
          width={"62%"}
          m={"auto"}
          textAlign={"justify"}
          pt={"15vh"}
          sx={{
            fontFamily: "Lato",
            fontStyle: "regular",
            fontSize: "22px",
            color: "white",
          }}
        >
          <Box width={"48%"} ml={2}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "regular",
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
              }}
            >
              B-Life es una empresa argentina con más de 12 años de activi- dad
              ininterrumpida en el país, que provee alimentos para pro- pósitos
              médicos específicos de alta calidad destinados a pato- logías que
              requieren un tratamiento nutricional especializa- do. La Empresa
              está dirigida por profesionales de la salud que cuentan con vasta
              experiencia en el área, profesionalismo y dedicación. Esto nos
              permite proporcionar no sólo el mejor producto, sino también
              brindar asesoramiento a profesiona- les y familias y contención a
              los pacientes desde el inicio del tratamiento.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "regular",
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
                mt: 1,
              }}
            >
              La marca de B-LIFE surge como abreviatura de Better Life, lo cual
              intenta graficar una “mejor calidad de vida”. En 2012, se pone en
              marcha B-Life como empresa argentina dedicada a la importación y a
              la comercialización de alimentos muy bajos en proteínas. Luego,
              incorporó fórmulas para el tratamiento nutricional de Errores
              Congénitos del Metabolismo, pasando a ser una de las empresas más
              reconocidas en el país para la provisión de este tipo de
              productos.
            </Typography>
          </Box>

          <Box width={"48%"} ml={"2%"}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "regular",
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
              }}
            >
              Poco a poco, B-Life fue sumando a su cartera de productos fórmulas
              para el tratamiento nutricional de otras patologías, como ser
              Alergia a la Proteína de Leche de Vaca (2015) y Terapia Cetogénica
              para el tratamiento de Epilepsia Refractaria (2016).
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "regular",
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
                mt: 1,
              }}
            >
              En paralelo, B-Life comenzó a desarrollar productos nacionales
              (como ser alimentos bajos en proteínas, harina cetogénica,
              suplementos multivitamínico y mineral, TCM, entre otros)
              convirtiéndose en la primera empresa de Latinoamérica
              desarrolladora de este tipo de insumos.
            </Typography>

            <Box mt={5} display={"flex"} justifyContent={"flex-end"}>
              <Button
                component={Link}
                to={"/productos"}
                variant="contained"
                sx={{
                  bgcolor: "white",
                  border: "solid 1px #00D947",
                  height: "35px",
                  width: "188px",
                  color: " #007E48",
                  textTransform: "none",
                  "&:hover": {
                    color: "white",
                    bgcolor: "#007E48",
                    borderColor: "#00D947",
                  },
                  "&:active": {
                    color: "#007E48",
                    bgcolor: "#00D947",
                    borderColor: "#007E48",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: "regular",
                    fontSize: "12px",
                  }}
                >
                  Conocé nuestros productos
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} pt={0} height={"26vh"} p={"3%"}>
          <Typography
            sx={{
              pt: 6,
              width: "70%",
              m: "auto",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "30px",
              fontWeight: "light", // Debería ser "normal" en lugar de "regular"
              fontStyle: "italic",
              lineHeight: "28px",
              color: "white",
            }}
          >
            <strong>
              Nuestra misión es MEJORAR LA CALIDAD DE VIDA de los pacientes,
              ofreciendo alternativas terapéuticas superiores
            </strong>{" "}
            AL ALCANCE DE LOS PROFECIONALES DE LA SALUD.
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"64%"}
          m={"auto"}
          pt={5}
          pb={5}
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
        <Box>
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
                    <Box mt={2}>
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
                <Box display={"flex"} mt={3}>
                  <MailOutlineIcon
                    fontSize="small"
                    sx={{ color: "white", ml: 6 }}
                  />
                  <Typography sx={{ ml: 1, fontSize: "15px", color: "white" }}>
                    info@b-life.com.ar
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Nosotros;
