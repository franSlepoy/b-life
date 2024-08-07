import { Box, Button, Hidden, Modal, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { fotos, fotosMobile } from "../../../carousel/fotos/Fotos";
import { Parallax } from "react-scroll-parallax";
import Boton from "../../common/button/Boton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
const Home = () => {
  const [open, setOpen] = useState(false); // Cambiado a false por defecto

  useEffect(() => {
    setOpen(true); // Abrir el modal cuando el componente se monta
  }, []);


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Hidden smDown>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{ border: "transparent" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "52%",

              borderRadius: "20px",
              border: "transparent",
            }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                border: "transparent",
                backgroundImage: `url("/fondodisclaimer.png")`, // Cambiar la ruta por la ruta de tu imagen
              }}
            >
              <Box ml={"90%"}>
                <Button sx={{ mt: 1 }} onClick={handleClose}>
                  <CloseIcon color="primary" />
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "white",
                  textAlign: "center",
                  pt: 5,
                }}
              >
                ¡IMPORTANTE!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "18px",
                  width: "69%",
                  m: "auto",
                }}
              >
                Les informamos que la compra de nuestros productos a
                través de terceros no autorizados puede suponer un riesgo para
                su salud y seguridad. Solo los distribuidores y vendedores
                autorizados pueden garantizar la autenticidad y la calidad de
                nuestros productos. Le recomendamos que realice sus compras
                únicamente a través de nuestros canales oficiales de venta
                autorizados.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "18px",
                  width: "69%",
                  m: "auto",
                  mt: 3,
                }}
              >
                Si tiene alguna pregunta o inquietud, no dude en ponerse en
                contacto con nosotros al 4932-4816.
              </Typography>

              <Box textAlign={"center"} mt={4} pb={4}>
                <img width={"12%"} src="/logoBlancoBi.png" alt="" />
              </Box>
            </Box>
          </Box>
        </Modal>
        <Parallax speed={-6}>
          <Carousel
            autoPlay={true}
            timeOut={100}
            indicatorIconButtonProps={{
              style: {
                color: "white", // Color blanco para los botones indicadores
              },
            }}
          >
            {fotos.map((foto) => (
              <Box key={"foto.is"} width={"100%"}>
                <img
                  width={"100%"}
                  style={{
                    width: "100%",
                    height: "66.9vh",
                    objectFit: "cover",
                  }}
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
          <Boton texto={"Conocé más"} linkTo={"/nosotros"} />
        </Box>

        <Box
          mt={-3}
          width={"100%"}
          style={{
            backgroundImage: "linear-gradient(to  top, #FFFFFF , #00d747)",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"64%"}
            m={"auto"}
            pt={12}
            pb={8}
          >
            <Box textAlign={"center"}>
              <Box pb={2}>
                <img width={"60px"} src="/botiquin.png" alt="" />
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
                  mt:-2
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
                Priorizar las necesidades y la seguridad de los pacientes en
                todas nuestras actividades, desde la investigación y desarrollo
                hasta la comercialización y el uso de nuestros productos.
              </Typography>
            </Box>

            <Box textAlign={"center"}>
              <Box pb={2} textAlign={"center"}>
                <img width={"60px"} src="/frasco.png" alt="" />
              </Box>
              <Typography
                sx={{
                 
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
              <Box pb={2}>
                <img width={"60px"} src="/diamante.png" alt="" />
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
                  lineHeight: "18px",
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
            component={Link}
            to={"/TC"}
            sx={{
              backgroundImage: `url("/seccioncetogenicaMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "25%",
              height: "64vh",
              transition: "background-color 0.8s ease",
              "&:hover > div": {
                // Selector más específico para el hover
                backgroundColor: "rgba(136, 147, 247, 0.5)",
                width: "140%", // Añadir tamaño explícito
                height: "64vh", // Añadir tamaño explícito
                mt: "-20px",
                ml: "-70px",
              },
            }}
          >
            <Box
              mt={20}
              sx={{
                "&:hover": {
                  pt: "180px",
                },
              }}
            >
              <img width={"160px"} src="/logoterapiacetogenica.png" alt="" />
            </Box>
          </Box>

          <Box
            component={Link}
            to={"/ECM"}
            sx={{
              backgroundImage: `url("/seccionhipoproteicaMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "25%",
              height: "64vh",
              transition: "background-color 0.8s ease",
              "&:hover > div": {
                // Selector más específico para el hover
                backgroundColor: "rgba(255, 158, 51, 0.5)",
                width: "120%", // Añadir tamaño explícito
                height: "64vh", // Añadir tamaño explícito
                mt: "-20px",
                ml: "-20px",
              },
            }}
          >
            <Box
              mt={20}
              sx={{
                "&:hover": {
                  pt: "180px",
                },
              }}
            >
              <img width={"185px"} src="/logoerrorescongenitos.png" alt="" />
            </Box>
          </Box>
          <Box
            component={Link}
            to={"/APLV"}
            sx={{
              backgroundImage: `url("/seccionaplvMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "25%",
              height: "64vh",
              transition: "background-color 0.8s ease",
              "&:hover > div": {
                // Selector más específico para el hover
                backgroundColor: "rgba(117, 203, 243, 0.5)",
                width: "120%", // Añadir tamaño explícito
                height: "64vh", // Añadir tamaño explícito
                mt: "-20px",
                ml: "-20px",
              },
            }}
          >
            <Box
              mt={20}
              sx={{
                "&:hover": {
                  pt: "180px",
                },
              }}
            >
              <img width={"185px"} src="/logoaplv.png" alt="" />
            </Box>
          </Box>
          <Box
            component={Link}
            to={"/Otros"}
            sx={{
              backgroundImage: `url("/seccionotrosMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              padding: "20px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "25%",
              height: "64vh",
              transition: "background-color 0.8s ease",
              "&:hover > div": {
                // Selector más específico para el hover
                backgroundColor: "rgba(0, 78, 214, 0.5)",
                width: "120%", // Añadir tamaño explícito
                height: "64vh", // Añadir tamaño explícito
                mt: "-20px",
                ml: "-20px",
              },
            }}
          >
            <Box
              mt={20}
              sx={{
                "&:hover": {
                  pt: "180px",
                },
              }}
            >
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
            <strong>Nos asociamos con las mejores marcas del mundo,</strong>{" "}
            PARA BRINDAR PRODUCTOS DE EXCELENTE CALIDAD.
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
              <Box mt={1}>
                <Boton texto={"Descubrilos"} linkTo={"/productos"} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            pt={4}
            pb={14}
            width={"100%"}
            style={{
              backgroundImage: "linear-gradient(to  top , #478547,#FFFFFF)",
            }}
          >
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
                  <Box mt={2}>
                    <Boton texto={"Escribinos"} linkTo={"/contacto"} />
                  </Box>
                </Box>
              </Box>

              <Box mt={6}>
                <Box display={"flex"}>
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
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
                      sx={{ color: "white", ml: 3 }}
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
      </Hidden>

      <Hidden smUp>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{ border: "transparent" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
             
              borderRadius: "20px",
              border: "transparent",
            }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                border: "transparent",
                backgroundImage: `url("/fondodisclaimer.png")`, // Cambiar la ruta por la ruta de tu imagen
              }}
            >
              <Box ml={"80%"}>
                <Button sx={{ mt: 1 }} onClick={handleClose}>
                  <CloseIcon color="primary" />
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "white",
                  textAlign: "center",
                  pt: 1,
                }}
              >
                ¡IMPORTANTE!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "18px",
                  width: "89%",
                  m: "auto",
                }}
              >
                Les informamos que la compra de nuestros productos a
                través de terceros no autorizados puede suponer un riesgo para
                su salud y seguridad. Solo los distribuidores y vendedores
                autorizados pueden garantizar la autenticidad y la calidad de
                nuestros productos. Le recomendamos que realice sus compras
                únicamente a través de nuestros canales oficiales de venta
                autorizados.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "18px",
                  width: "89%",
                  m: "auto",
                  mt: 1,
                }}
              >
                Si tiene alguna pregunta o inquietud, no dude en ponerse en
                contacto con nosotros al 4932-4816.
              </Typography>

              <Box textAlign={"center"} mt={4} pb={4}>
                <img width={"12%"} src="/logoBlancoBi.png" alt="" />
              </Box>
            </Box>
          </Box>
        </Modal>

      
          <Box pt={12}>
          <Carousel
            autoPlay={true}
            timeOut={100}
            indicatorIconButtonProps={{
              style: {
                color: "white", // Color blanco para los botones indicadores
              },
            }}
          >
            {fotosMobile.map((foto) => (
              <Box key={"foto.is"} width={"100%"}>
                <img
                  width={"100%"}
                  style={{
                    
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                  }}
                  src={foto.imagen}
                  alt=""
                />
              </Box>
            ))}
          </Carousel>
          </Box>
       

        <Box position={"absolute"} left={"6%"} top={"250px"} zIndex={100}>
          <img width={"18%"} src="/logoCarrusel.png" alt="" />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",

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
              width: "60%",
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

        <Box position={"absolute"} zIndex={100} top={"500px"} left={"6%"}>
          <Boton texto={"Conocé más"} linkTo={"/nosotros"} />
        </Box>

        <Box
          mt={-3}
          width={"100%"}
          style={{
            backgroundImage: "linear-gradient(to  top, #FFFFFF , #00d747)",
          }}
        >
          <Box mt={-6}>
          <Box width={"64%"}  m={"auto"} pt={12} pb={8}>
            <Box  textAlign={"center"}>
              <Box>
                <img width={"60px"} src="/botiquin.png" alt="" />
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
                }}
              >
                {" "}
                Priorizar las necesidades y la seguridad de los pacientes en
                todas nuestras actividades, desde la investigación y desarrollo
                hasta la comercialización y el uso de nuestros productos.
              </Typography>
            </Box>

            <Box  textAlign={"center"}>
              <Box textAlign={"center"}>
                <img width={"60px"} src="/frasco.png" alt="" />
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

                  m: "auto",
                }}
              >
                CALIDAD
              </Typography>
              <Typography
                sx={{
                  mt:1,
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "#007E48",
                }}
              >
                {" "}
                Compromiso con la excelencia en la importación y desarrollo de
                alimentos para propósito médico seguros, eficaces y de alta
                calidad.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Box >
                <img width={"60px"} src="/diamante.png" alt="" />
              </Box>
              <Typography
                sx={{
                 
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "#007E48",

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
          
        </Box>

        <Box width={"100%"} display={"flex"}>
          <Box
            component={Link}
            to={"/TC"}
            sx={{
              backgroundSize: "cover",
              backgroundImage: `url("/seccioncetogenicaMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              pt: "60px",
              pb: "60px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "100%",
            }}
          >
            <Box>
              <img width={"140px"} src="/logoterapiacetogenica.png" alt="" />
            </Box>
          </Box>

          <Box
            component={Link}
            to={"/ECM"}
            sx={{
              backgroundSize: "cover",
              backgroundImage: `url("/seccionhipoproteicaMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              pt: "60px",
              pb: "60px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "100%",
            }}
          >
            <Box>
              <img width={"150px"} src="/logoerrorescongenitos.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} display={"flex"}>
          <Box
            component={Link}
            to={"/APLV"}
            sx={{
              backgroundSize: "cover",
              backgroundImage: `url("/seccionaplvMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              pt: "60px",
              pb: "60px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "100%",
            }}
          >
            <Box>
              <img width={"140px"} src="/logoaplv.png" alt="" />
            </Box>
          </Box>
          <Box
            component={Link}
            to={"/Otros"}
            sx={{
              backgroundSize: "cover",
              backgroundImage: `url("/seccionotrosMobile.png")`, // Corregir backgroundImage y la ruta de la imagen
              pt: "60px",
              pb: "60px", // Añadir padding para asegurar que el contenido no esté pegado al borde
              textAlign: "center", // Centrar contenido dentro del Box
              width: "100%",
            }}
          >
            <Box>
              <img width={"130px"} src="/logootros.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} p={"3%"}>
          <Typography
            sx={{
              width: "90%",
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
            <strong>Nos asociamos con las mejores marcas del mundo,</strong>{" "}
            PARA BRINDAR PRODUCTOS DE EXCELENTE CALIDAD.
          </Typography>
        </Box>

        <Box
       
          pt={10}
          pb={10}
          pl={"6%"}
          sx={{ backgroundSize: "cover",  backgroundImage: `url("/bannernuestrosproductosMobile.jpg")` }}
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
            <Box mt={3}>
              <Box mt={1}>
                <Boton texto={"Descubrilos"} linkTo={"/productos"} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box textAlign={"center"}>
          <Box
            pt={4}
            pb={4}
            width={"100%"}
            style={{
              backgroundImage: "linear-gradient(to  top , #478547,#FFFFFF)",
            }}
          >
            <Box>
              <Box mt={2}>
                <Box>
                  <img width={"200px"} src="/logofooter.png" alt="" />
                </Box>

                <Box mt={1} display={"flex"} justifyContent={"center"}>
                  <Box display={"flex"}>
                    <CallIcon fontSize="small" sx={{ color: "white" }} />
                    <Typography sx={{ fontSize: "14px", color: "white" }}>
                      4932 4816
                    </Typography>
                  </Box>
                  <Box>
                    <a
                      href="mailto:info@b-life.com.ar"
                      style={{ textDecoration: "none" }}
                    >
                      <Box display={"flex"} ml={2}>
                        <MailOutlineIcon
                          fontSize="small"
                          sx={{ color: "white" }}
                        />

                        <Typography sx={{ fontSize: "15px", color: "white" }}>
                          info@b-life.com.ar
                        </Typography>
                      </Box>
                    </a>
                  </Box>
                </Box>

                <Box>
                  <Box textAlign={"center"} mt={1}>
                    <Boton texto={"Escribinos"} linkTo={"/contacto"} />
                  </Box>
                </Box>
              </Box>

              <Box mt={1}>
                <Box>
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
                    Cochabamba 3643.CABA
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Home;
