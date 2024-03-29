import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, Modal, Typography } from "@mui/material";
import Boton from "../../common/button/Boton";
import { useState } from "react";

const ECM = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Parallax speed={-12}>
        <Box mt={8}>
          <img width={"100%"} height={"472vh"} src="/fotoECM.png" alt="" />
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
          Dieta
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
          Hipoproteica
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
        bgcolor={" #ffa133"}
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
            <strong>
              La línea Errores Congénitos del Metabolismo de B-Life incluye
              fórmulas para el tratamiento de todos los ECM de los aminoácidos
            </strong>{" "}
            DESDE EL NACIMIENTO HASTA LA EDAD ADULTA.
          </Typography>
        </Box>
        <Box mt={15} textAlign={"center"}>
          <img width={"10%"} src="/logoerrorescongenitos.png" alt="" />
        </Box>
        <Box
          display={"flex"}
          width={"62%"}
          m={"auto"}
          textAlign={"justify"}
          pt={"5vh"}
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
              Los errores innatos del metabolismo (EIM) son un conjunto de
              enfermedades causadas por una alteración genética, que conlleva al
              inadecuado funcionamiento fisiológico de la célula. Se trata de
              enfermedades en su mayoría de herencia autosómica recesiva. Los
              programas de pesquisa neonatal obligatoria permiten detectar
              pacientes con algunas de estas enfermedades y comenzar su
              tratamiento tempranamente. Otras de estas enfermedades son
              detectadas a través de síntomas clínicos. Dentro de las
              posibilidades terapéuticas actuales para los EIM, el tratamiento
              nutricional es el pilar más importante en el manejo global de
              estos trastornos. Se dispone de productos dietéticos muy
              específicos para cada enfermedad.
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
              En el caso de los EIM de los aminoácidos, el tratamiento dietético
              tendrá como objetivo limitar la ingesta de el/los aminoácido/s,
              cuya vía metabólica está afectada, hasta un requerimiento mínimo
              que proporcione un crecimiento y un desarrollo adecuados. De esta
              forma los pacientes deberán realizar una dieta baja en proteínas
              para evitar la acumulación de metabolitos tóxicos. Sumado a ello,
              será necesaria la suplementación con una fórmula especialmente
              diseñada para estos tratamientos, que no contiene el/los
              aminoácido/s que requieren restricción pero que aporta el resto de
              las proteínas, energía, vitaminas y minerales necesarios para
              crecer y desarrollarse adecuadamente.
              <span
                onMouseEnter={() => {
                  setIsHovered(true);
                  handleOpen();
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  handleClose(); // Cerrar el Modal cuando el cursor sale del área
                }}
                style={{ cursor: "pointer" }}
              >
                1,2.
                <Modal
                  open={open && isHovered} // Asegurar que el Modal solo se abra cuando el cursor está sobre el número 2
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "30%",
                      /*   transform: "translate(-50%, -50%)", */
                      borderColor: "transparent",
                      bgcolor: "background.paper",
                      width: "500px",
                      boxShadow: 24,
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "regular",
                        fontSize: "10px",
                        color: "black",
                        lineHeight: "10px",
                      }}
                      id="modal-modal-title"
                    >
                      1. M Pons, F Sánchez Valverde Visus, J Dalmau Serra, L
                      Gómez López. Tratamiento Nutricional de los Errores
                      Innatos del Metabolismo. Drug Farma 2º edición, 2007
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "regular",
                        fontSize: "10px",
                        color: "black",
                        lineHeight: "10px",
                      }}
                      id="modal-modal-title"
                    >
                      2. MacDonald A. Disorders of Amino Acid Metabolism,
                      Organic Acidaemias and Urea Cycle Defects. 2nd ed. Vanessa
                      S, Margaret L , editores. Oxford: Blackwell Publishing;
                      2021.
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontStyle: "regular",
                        fontSize: "10px",
                        color: "black",
                        lineHeight: "10px",
                      }}
                      id="modal-modal-title"
                    >
                      Friends; Practice Committee of the Child Neurology
                      Society. Optimal clinical management of children receiving
                      dietary therapies for epilepsy: Updated recommendations of
                      the International Ketogenic Diet Study Group. Epilepsia
                      Open. 2018 May 21;3(2):175-192. doi: 10.1002/epi4.12225.
                      PMID: 29881797; PMCID: PMC5983110.
                    </Typography>
                  </Box>
                </Modal>
              </span>
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
              B-Life cuenta con una amplia gama de productos para el tratamiento
              de los Errores innatos del metabolismo, que incluye fórmulas y
              alimentos hipoproteicos.
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
              La línea Errores Congénitos del Metabolismo de B-Life incluye
              fórmulas para el tratamiento de todos los ECM de los aminoácidos
              desde el nacimiento hasta la edad adulta. Asimismo, cuenta con la
              más amplia variedad de alimentos hipoproteicos. De esta forma,
              buscamos satisfacer las necesidades de todas las familias durante
              toda la vida.
            </Typography>

            <Box>
              <Typography
                id="modal-modal-description"
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                  mt: 1,
                }}
              >
                B-Life considera el respeto uno de sus principales valores,
                demostrándolo en cada contacto y en cada lugar en el que está
                presente. B-Life busca escuchar las necesidades de sus clientes
                para satisfacerlas, desarrollando y poniendo a su disposición
                todos aquellos recursos necesarios para llevar adelante el
                tratamiento. Por último, se compromete en bridar a los
                profesionales de la salud capacitación continua y acceso a la
                información científica.
              </Typography>
            </Box>

            <Box mt={5} display={"flex"} justifyContent={"flex-end"}>
              <Boton texto={"Productos"} linkTo={"/productos"} />
            </Box>
          </Box>
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

export default ECM;
