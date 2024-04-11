import { Box, Button, Typography } from "@mui/material";

const Contacto = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/fondodisclaimer.png')", // Ruta de la imagen de fondo
          backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el contenedor
          backgroundPosition: "center",
        }}
      >
        <Box display={"flex"} width={"62%"} m={"auto"} pt={20} pb={20}>
          <Box bgcolor={"#007E48"} width={"40%"} pl={"4%"} pt={"4%"}>
            <Box>
              <img width={"19%"} src="/logoBlancoBi.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "37px",
                  color: "white",
                }}
              >
                Contactanos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  width: "250px",
                }}
              >
                Estamos para ayudarte. Nuestro equipo está a disposición para
                resolver tus consultas.
              </Typography>
            </Box>
            <Box>
              <Box>
                <a href="mailto:constanza.boga@b-life.com.ar">
                  <Button
                    sx={{
                      bgcolor: "#8893F7",
                      borderRadius: "20px",
                      border: "solid 2px white",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Terapia Cetogénica
                    </Typography>
                  </Button>
                </a>
              </Box>
              <Box>
                <a href="mailto:daniela.korman@b-life.com.ar">
                  <Button
                    sx={{
                      bgcolor: "#FFA133",
                      borderRadius: "20px",
                      border: "solid 2px white",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Errores congénitos del metabolismo
                    </Typography>
                  </Button>
                </a>
              </Box>
              <Box>
                <a href="mailto:fernando.bernardo@b-life.com.ar">
                  <Button
                    sx={{
                      bgcolor: "#75CBF3",
                      borderRadius: "20px",
                      border: "solid 2px white",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Alergia a la proteína de la leche de vaca
                    </Typography>
                  </Button>
                </a>
              </Box>
              <Box>
                <a href="mailto:fernando.bernardo@b-life.com.ar">
                  <Button
                    sx={{
                      bgcolor: "#004ED7",
                      borderRadius: "20px",
                      border: "solid 2px white",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Otros
                    </Typography>
                  </Button>
                </a>
              </Box>
              <Box>
                <a href="mailto:cotizaciones@b-life.com.ar">
                  <Button
                    sx={{
                      bgcolor: "#00D847",
                      borderRadius: "20px",
                      border: "solid 2px white",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Consultas comerciales
                    </Typography>
                  </Button>
                </a>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: "regular",
                    fontSize: "15px",
                    color: "white",
                    width: "250px",
                    mt: 3,
                  }}
                >
                  Dejanos tus datos para que nos pongamos en contacto con vos.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box width={"60%"}>
            <img
              width={"100%"}
              height={"100%"}
              src="/seccionotros.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacto;
