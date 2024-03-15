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

const APLV = () => {
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
          <img width={"100%"} height={"472vh"} src="/foto01APLV.png" alt="" />
        </Box>
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
            color: "white",
            mt: 2,
          }}
        >
          Alergia a la
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "light",
            width: "310px",
            fontSize: "60px",
            lineHeight: "35px",
            color: "white",
            mt: 2,
          }}
        >
          proteína de
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
          leche de vaca
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            width: "320px",
            fontSize: "14px",
            lineHeight: "17px",
            color: "white",

            mt: 0,
          }}
        >
          La Alergia a las Proteínas de Leche de Vaca (APLV) es la alergia
          alimentaria más frecuente en menores de 1 año.
        </Typography>
      </Box>

      <Box
        mt={-2}
        width={"100%"}
        bgcolor={" #75ccf4"}
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
              lineHeight: "28px",
              color: "white",
            }}
          >
            <strong>
              La línea alergia a la proteína de leche de vaca de B-Life incluye
              distintas fórmulas a base de aminoácidos.
            </strong>{" "}
            DE ESTA FORMA, BUSCAMOS SATISFACER TODAS LAS NECESIDADES DE LAS
            FAMILIAS A LA HORA DE INICIAR LA DIETA DE EXCLUSIÓN.
          </Typography>
        </Box>
        <Box mt={15} textAlign={"center"}>
          <img width={"10%"} src="/logoaplv.png" alt="" />
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
              La alergia a las proteínas de la leche de vaca (APLV) es el resul-
              tado de una respuesta inmunológica anómala que ocurre des- pués de
              la ingesta de proteína de leche de vaca (PLV), que obedece a
              diferentes mecanismos: mediado por inmunoglo- bulina E (IgE), no
              mediado por IgE o de naturaleza mixta. La APLV puede manifestarse
              en lactantes que se alimentan con leche materna exclusivamente o
              bien con fórmulas infantiles.
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
              La dieta de eliminación diagnóstica se basa en la exclusión
              completa de las proteínas alergénicas (PLV) de la dieta para
              revertir las manifestaciones clínicas de la APLV. Después de la
              recuperación clínica y nutricional, se debe realizar la prueba de
              reto oral o enfrentamiento para comprobar el diagnóstico de APLV.
              Una vez confirmado el diagnóstico, se debe iniciar la dieta de
              eliminación terapéutica, que continuará hasta el mo- mento del
              desarrollo de la tolerancia.
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
              En el caso de pacientes con formas graves de APLV que se ali-
              mentan con fórmulas infantiles, la fórmula de aminoácidos se 4932
              4816 Especialistas en Nutrición Clínica recomienda como primera
              opción terapéutica, ya que tiene mayor eficacia.
            </Typography>
          </Box>

          <Box width={"48%"} ml={"2%"}>
            <Box>
              <Typography
                id="modal-modal-description"
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                }}
              >
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
                  2.
                  <Modal
                    open={open && isHovered} // Asegurar que el Modal solo se abra cuando el cursor está sobre el número 2
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        /*   transform: "translate(-50%, -50%)", */

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
                        2. M.C. Toca, M.B. Morais, R. Vázquez-Frias et al.,
                        Consenso sobre el diagnóstico y el tratamiento de la
                        alergia a las proteínas de la leche de vaca de la
                        Sociedad Latinoamericana de Gastroenterología,
                        Hepatología y Nutrición, Revista de Gastroenterología de
                        México, https://doi.org/10.1016/j.rgmx.2022.03.007
                      </Typography>
                    </Box>
                  </Modal>
                </span>
                {""}B-Life considera el respeto uno de sus principales valores,
                demostrándolo en cada contacto y en cada lugar en el que está
                presente. B-Life busca escuchar las necesidades de sus clientes
                para satisfacerlas, desarrollando y poniendo a su disposición
                todos aquellos recursos necesarios para llevar adelante el
                tratamiento.
              </Typography>
            </Box>

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
              Por último, se compromete en brindar a los profesionales de la
              salud capacitación continua y acceso a la información científica.
            </Typography>

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

export default APLV;
