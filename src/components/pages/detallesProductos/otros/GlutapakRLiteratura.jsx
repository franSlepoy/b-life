import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../common/footer/Footer";

const GlutapakRLiteratura = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/FontUp-Literatura.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "FontUp-Literatura.pdf"; // Nombre del archivo a descargar

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
                GLUTAPAK R
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
                Glutapak R es un alimento para propósitos médicos específicos
                con una combinación única de L-Glutamina y Lactobacillus Reuteri
                que restaura la superficie y la flora intestinal.
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
                  • L- GLUTAMINA:
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Nutre las células del tracto gastrointestinal y ayuda a
                  reparar el daño de la superficie intestinal causado por
                  enfermedades, infecciones y/o estrés.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Reduce el malestar y mejora la absorción de nutrientes.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • LACTOBACILLUS REUTERI:
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Es un probiótico que restaura la flora intestinal.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Disminuye el crecimiento de microorganismos dañinos.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Coloniza el intestino e inhibe el crecimiento de
                  microorganismos patógenos, ayudando a mantener y mejorar las
                  funciones propias del sistema inmunológico intestinal.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Reduce la diarrea y restaura el equilibrio intestinal.
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
                <img height={"300px"} src="/glutapak.jpg" alt="" />
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
                Síndrome diarreico. Efectos gastrointestinales secundarios a la
                antibiotecoterapia y/o medicamentos. Infecciones
                gastrointestinales. Terapia coadyuvante para el tratamiento de
                Helicobacter Pylori.
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
                {" "}
                Mezclar 1 sobre de Glutapak R con 60-120 ml de agua, bebida o
                alimento a temperatura ambiente y consumir inmediatamente. No
                debe mezclarse a temperaturas extremas. Es preferible su
                utilización a temperaturas entre 10 y 45°C.
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
                {" "}
                Vía oral y/o enteral. No apto para uso parenteral.
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
              <Typography>Sobres individuales de 15 g de polvo. </Typography>
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
                {" "}
                Neutro.
              </Typography>
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
                GLUTAPAK R
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
                Glutapak R es un alimento para propósitos médicos específicos
                con una combinación única de L-Glutamina y Lactobacillus Reuteri
                que restaura la superficie y la flora intestinal.
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
                  • L- GLUTAMINA:
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Nutre las células del tracto gastrointestinal y ayuda a
                  reparar el daño de la superficie intestinal causado por
                  enfermedades, infecciones y/o estrés.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Reduce el malestar y mejora la absorción de nutrientes.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • LACTOBACILLUS REUTERI:
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Es un probiótico que restaura la flora intestinal.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Disminuye el crecimiento de microorganismos dañinos.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Coloniza el intestino e inhibe el crecimiento de
                  microorganismos patógenos, ayudando a mantener y mejorar las
                  funciones propias del sistema inmunológico intestinal.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Reduce la diarrea y restaura el equilibrio intestinal.
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
                <img height={"300px"} src="/glutapak.jpg" alt="" />
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
                Síndrome diarreico. Efectos gastrointestinales secundarios a la
                antibiotecoterapia y/o medicamentos. Infecciones
                gastrointestinales. Terapia coadyuvante para el tratamiento de
                Helicobacter Pylori.
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
                Mezclar 1 sobre de Glutapak R con 60-120 ml de agua, bebida o
                alimento a temperatura ambiente y consumir inmediatamente. No
                debe mezclarse a temperaturas extremas. Es preferible su
                utilización a temperaturas entre 10 y 45°C.
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
                {" "}
                Vía oral y/o enteral. No apto para uso parenteral.
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
              <Typography> Sobres individuales de 15 g de polvo. </Typography>
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
                Neutro.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Hidden>
    </>
  );
};

export default GlutapakRLiteratura;
