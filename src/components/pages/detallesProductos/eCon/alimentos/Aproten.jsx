import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../../common/footer/Footer";

const Aproten = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/Aproten.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Aproten.pdf"; // Nombre del archivo a descargar

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
                ANELLINI
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
                Pasta tipo Ave María para sopa, de bajo contenido proteico para
                el tratamiento nutricional de patologías que requieren dietas
                restringidas en el aporte de proteínas y aminoácidos. Alimento
                para dietas especiales.
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
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • ngredientes: Almidón de maíz, fécula de papa, inulina,
                  cártamo, EMU: INS471.
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
                <img height={"300px"} src="/aprotenAnellini.png" alt="" />
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

          <Box width={"70%"} display={"flex"}>
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
                Puede utilizarse en el tratamiento nutricional de pacientes con
                errores congénitos del metabolismo, insuficiencia renal crónica,
                mal de Parkinson (en tratamiento con Levodopa) que requieren
                dietas restringidas en el aporte de proteínas y aminoácidos.
              </Typography>
            </Box>
            <Box ml={3} width={"33.3%"}>
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
                La dilución recomendada es del 13 % P/V (3 medidas de Comida GAc
                A Fórmula = 13 g de polvo + 90cc de agua). Se recomienda
                distribuir la cantidad diaria indicada por el profesional en
                varias tomas a lo largo del día. TIEMPO DE COCCIÓN: 4 a 6
                minutos.
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
              <Typography>  Envase por 500 g.</Typography>
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
                Comida GAc A Fórmula
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
                Comida GAc A Fórmula es una fórmula infantil en polvo libre de
                lisina y de bajo contenido en triptófano para el tratamiento
                nutricional de la Aciduria Glutárica Tipo I en lactantes de 0 a
                1 año edad. Alimento para propósitos médicos específicos.
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
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Aporta aminoácidos de alto valor biológico.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Contiene lactosa.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Contiene ácidos grasos poliinsaturados de cadena larga (LCP)
                  particularmente importantes para un adecuado desarrollo
                  cognitivo y visual.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Suplementada con vitaminas, minerales y oligoelementos.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Fácil de preparar, buena solubilidad.
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
                <img height={"300px"} src="/aprotenAnellini.png" alt="" />
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
                Comida GAc A Fórmula está indicado en el tratamiento nutricional
                de lactantes de 0 a 1 año de edad con Aciduria Glutárica Tipo I.
                EQUIVALENTE PROTEICO: 12 g de equivalente proteico por 100 g de
                polvo.
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
                La dilución recomendada es del 13 % P/V (3 medidas de Comida GAc
                A Fórmula = 13 g de polvo + 90cc de agua). Se recomienda
                distribuir la cantidad diaria indicada por el profesional en
                varias tomas a lo largo del día.
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
                Vía oral y/o enteral. No apto para uso parental.
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
              <Typography>Lata por 400 g de polvo.</Typography>
              <Typography
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
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Hidden>
    </>
  );
};

export default Aproten;
