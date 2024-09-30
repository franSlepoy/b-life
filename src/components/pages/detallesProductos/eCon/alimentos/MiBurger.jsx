import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../../common/footer/Footer";

const MiBurger = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/miBurger.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "brochureZeropro.pdf"; // Nombre del archivo a descargar

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal
    document.body.removeChild(link);
  };
  return (
    <>
      <Hidden smDown>
        <Box width={"60%"} m={"auto"}>
          <Box display={"flex"} mt={"15%"}>
            <Box>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "800",
                  fontSize: "26px",
                  mt: 2,
                }}
              >
                Mi Burger
              </Typography>
              <Typography
                sx={{
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  fontWeight: "bold",
                  fontSize: "19px",
                  fontStyle: "italic",
                  lineHeight: "22px",
                  mt: 2,
                }}
              >
                Mi Burger es una premezcla a base de almidones y vegetales deshidratados para dietas especiales.

              </Typography>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                CARACTERÍSTICAS:
              </Typography>
              <Box
                sx={{
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • 100% vegetal

                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Bajo contenido proteico

                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Muy rico sabor


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Fácil de preparar


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Versátil


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Facilita la adherencia al tratamiento

                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "3%",
                ml: 2,
                mt: 2,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                height: "350px",
              }}
            >
              <Box>
                <img height={"300px"} src="/miBurger.png" alt="" />
              </Box>

              <Box m={"auto"} mt={5}>
                <Button
                  sx={{
                    bgcolor: "#007E48",
                    fontFamily: "Lato",
                    textTransform: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    width: "100%",

                    "&:hover": {
                      color: "#007E48",
                    },
                  }}
                  onClick={handleDownloadPDF}
                >
                  Descargar PDF
                </Button>
              </Box>
            </Box>
          </Box>

          <Box width={"80%"} display={"flex"}>
            <Box mt={3} width={"33.3%"}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                INDICACIONES:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
               Puede utilizarse en el tratamiento nutricional de pacientes con errores congénitos del metabolismo, mal de Parkinson (en tratamiento con Levodopa) que requieren dietas restringidas en el aporte de proteínas y aminoácidos. Precaución: Producto con alto contenido de sodio. Su uso en pacientes renales debe ser consultado previamente con el médico/nutricionista.


              </Typography>
            </Box>
            <Box ml={2} width={"33.3%"}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 5,
                
                }}
              >
                FORMA DE PREPARACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                {" "}
                Colocar en un bowl 35 g de Mi Burger, agregar 1 cucharada de té de aceite y 30 cc de agua. Mezclar hasta obtener una pasta. Armar la hamburguesa y cocinar en una sartén aceitada de 2 a 3 minutos por lado o hasta que se dore.
              </Typography>
            </Box>

            <Box ml={2} mt={3} width={"33.3%"}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                ADMINISTRACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Vía oral.
              </Typography>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                FORMA DE PRESENTACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                {" "}
                Envase por 500 g.
              </Typography>
              {/* sin sabor  <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                SABOR:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Sin sabor.
              </Typography> */}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Hidden>

      <Hidden smUp>
        <Box width={"85%"} m={"auto"}>
          <Box mt={"150px"}>
            <Box>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "800",
                  fontSize: "26px",
                  mt: 2,
                }}
              >
                Mi Burger
              </Typography>
              <Typography
                sx={{
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  fontWeight: "bold",
                  fontSize: "19px",
                  fontStyle: "italic",
                  lineHeight: "22px",
                  mt: 2,
                }}
              >
                Mi Burger es una premezcla a base de almidones y vegetales deshidratados para dietas especiales.

              </Typography>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                CARACTERÍSTICAS:
              </Typography>
              <Box
                sx={{
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • 100% vegetal

                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Bajo contenido proteico

                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Muy rico sabor


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Fácil de preparar


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Versátil


                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Facilita la adherencia al tratamiento

                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "2%",
                mt: 2,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Box textAlign={"center"}>
                <img height={"300px"} src="/miBurger.png" alt="" />
              </Box>

              <Box m={"auto"}>
                <Button
                  sx={{
                    bgcolor: "#007E48",
                    fontFamily: "Lato",
                    textTransform: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    width: "100%",

                    "&:hover": {
                      color: "#007E48",
                    },
                  }}
                  onClick={handleDownloadPDF}
                >
                  Descargar PDF
                </Button>
              </Box>
            </Box>
          </Box>

          <Box width={"100%"}>
            <Box mt={3}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                INDICACIONES:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
              Puede utilizarse en el tratamiento nutricional de pacientes con errores congénitos del metabolismo, mal de Parkinson (en tratamiento con Levodopa) que requieren dietas restringidas en el aporte de proteínas y aminoácidos. Precaución: Producto con alto contenido de sodio. Su uso en pacientes renales debe ser consultado previamente con el médico/nutricionista.

              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                FORMA DE PREPARACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
               Colocar en un bowl 35 g de Mi Burger, agregar 1 cucharada de té de aceite y 30 cc de agua. Mezclar hasta obtener una pasta. Armar la hamburguesa y cocinar en una sartén aceitada de 2 a 3 minutos por lado o hasta que se dore.

              </Typography> 
            </Box>
            <Box mt={3} width={"100%"}>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                ADMINISTRACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Vía oral.
              </Typography>
              <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                FORMA DE PRESENTACIÓN:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                {" "}
                Envase por 500 g.
              </Typography>
              {/*  <Typography
                sx={{
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontWeight: "800",
                  fontSize: "15px",
                  mt: 2,
                }}
              >
                SABOR:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Sin sabor.
              </Typography> */}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Hidden>
    </>
  );
};

export default MiBurger;
