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

const TC = () => {
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
          <img width={"100%"} height={"472vh"} src="/fotoCT.png" alt="" />
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
          Terapia
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
          Cetogénica
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            width: "180px",
            fontSize: "16px",
            lineHeight: "17px",
            color: "white",

            mt: 0,
          }}
        >
          Terapia Cetogénica para epilepsia refractaria.
        </Typography>
      </Box>

      <Box
        mt={-2}
        width={"100%"}
        bgcolor={" #8994f8"}
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
              La línea Terapia Cetogénica de B-Life incluye fórmulas (líquidas y
              en polvo) para todas las etapas de la vida, suplementos
              vitamínicos y minerales, módulos (TCM líquido y en polvo) y
              alimentos cetogénicos.
            </strong>{" "}
            SATISFACIENDO TODAS LAS NECESIDADES DE LAS FAMILIAS A LA HORA DE
            INICIAR ESTE TRATAMIENTO NUTRICIONAL.
          </Typography>
        </Box>
        <Box mt={15} textAlign={"center"}>
          <img width={"10%"} src="/logoterapiacetogenica.png" alt="" />
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
              La Terapia Cetogénica (TC) es un tratamiento no farmacológi- co y
              efectivo utilizado como un método alternativo para el manejo de la
              epilepsia refractaria o de difícil control desde 1921, que se
              puede utilizar desde la infancia hasta la adultez. Las epilepsias
              refractarias o de difícil control se definen como fallas en el
              control de las crisis al tratamiento con dos fárma- cos bien
              tolerados y seleccionados adecuadamente.
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
              Consiste en una selección de alimentos que aportan un alto
              contenido en grasas, un bajo contenido en hidratos de carbo- no y
              un aporte de proteínas recomendados para la edad del paciente, en
              la cual se utiliza la grasa como fuente de energía primaria a
              través de la formación de cuerpos cetónicos (155 libro). Es una
              dieta rígida, matemáticamente calculada, indivi- dual y
              médicamente controlada por un equipo interdisciplina- rio
              especializado.
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
              Ya desde la Antigüedad se sabía que el ayuno provocaba una mejoría
              en el control de las convulsiones en pacientes epilép- ticos.
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
              En Argentina, el Dr. Natalio Fejerman, médico neurólogo, y la Dra.
              Nidia Escobal, médica nutricionista, fueron los pioneros en el uso
              de la TC hace aproximadamente 50 años. Desde ese momento el
              desarrollo en nuestro país fue cada vez mayor. Actualmente existen
              centros que utilizan la Terapia Cetogéni- ca en el tratamiento de
              las epilepsias de difícil control en dife- rentes ciudades del
              país: Buenos Aires, La Plata, Mar del Plata, Córdoba, Santa Fé,
              Rosario, Neuquén, Bariloche, Gualeguaychú, Tucumán, Salta, Jujuy y
              Mendoza.
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
                {""}En cuanto a la eficacia de la dieta cabe aclarar, que habrá
                pacientes estarán totalmente libre de crisis, habrá quienes
                experimentarán una reducción en su frecuencia, mientras que
                otros podrán dejar de ingerir algunos medicamentos que vienen
                tomando.
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
              Uno de los pilares para favorecer el cumplimiento de la Terapia
              Cetogénica y lograr la adherencia de los niños y sus familias al
              tratamiento es la variedad e individualización de las
              preparaciones.
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
              Apelando a la importancia de la variedad en la implementación de
              la Terapia Cetogénica, B-Life cuenta con la más amplia gama de
              productos para llevarla a cabo en todas las etapas de la vida.{" "}
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
                      top: "70%",
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
                      1.Armeno M, Caraballo R, Vaccarezza M, Alberti MJ, Ríos V,
                      Galicchio S, et al. Consenso nacional sobre dieta
                      cetogénica. Rev Neurol 2014; 59: 213-23.
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
                      2. Kossoff EH, Zupec-Kania BA, Auvin S, Ballaban-Gil KR,
                      Christina Bergqvist AG, Blackford R, Buchhalter JR,
                      Caraballo RH, Cross JH, Dahlin MG, Donner EJ, Guzel O,
                      Jehle RS, Klepper J, Kang HC, Lambrechts DA, Liu YMC,
                      Nathan JK, Nordli DR Jr, Pfeifer HH, Rho JM, Scheffer IE,
                      Sharma S, Stafstrom CE, Thiele EA, Turner Z, Vaccarezza
                      MM, van der Louw EJTM, Veggiotti P, Wheless JW, Wirrell
                      EC; Charlie Foundation; Matthew&#39;s
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
              B-Life considera el respeto uno de sus principales valores, de-
              mostrándolo en cada contacto y en cada lugar en el que está
              presente.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "regular",
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
              }}
            >
              B-Life busca escuchar las necesidades de sus clientes para
              satisfacerlas, desarrollando y poniendo a su disposición todos
              aquellos recursos necesarios para llevar adelante el tratamiento.
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

export default TC;
