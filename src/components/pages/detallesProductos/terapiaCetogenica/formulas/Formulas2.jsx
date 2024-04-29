import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../../common/footer/Footer";

const Formulas2 = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/ketoVie41Peptide.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "ketoVie41Peptide.pdf"; // Nombre del archivo a descargar

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
                KetoVie 4:1 Peptide
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
                Fórmula líquida 4:1 nutricionalmente completa con 15% de
                calorías como TCM y 100% de proteína de suero extensamente
                hidrolizada para terapia cetogénica.
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • 100% proteína de suero extensamente hidrolizada para
                  pacientes con disfunciones GI o intolerancia a la proteína
                  entera.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • 15% del VCT como TCM (6 g TCM/brick): favorece la motilidad
                  intestinal y optimiza la cetosis.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Suplementado con DHA, taurina e inositol: promueven el
                  desarrollo cerebral y visual.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Nutrientes esenciales: 50 mg de Carnitina y 23 μg de Selenio
                  por brick.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Mayor contenido de vitaminas y minerales para la salud ósea.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Sales de citrato: previene la formación de cálculos renales.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Listo para usar: previene errores de dosificación y
                  contaminación.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ml: 2,
                mt: 1,
                height: "350px",
                borderRadius: "3%",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Box textAlign={"center"}>
                <img height={"300px"} src="/ketovie4.1Peptide.png" alt="" />
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                KetoVie 4:1 Peptide puede ser utilizado en niños mayores de 1
                año de edad y adultos que tienen indicación de terapia
                cetogénica como tratamiento nutricional de la epilepsia
                refractaria y en otras patologías que requieran terapia
                cetogénica y que presenten alteraciones gastrointestinales o
                intolerancia a la proteína entera. Optimizada para alimentación
                por sonda y pacientes críticos.
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                Listo para usar. Se recomienda agitar bien antes de su uso.
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                }}
              >
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
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "#0B3A25",
                  fontFamily: "Lato",
                }}
              >
                Caja por 30 bricks de 250 ml c/u.
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
                SABOR:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "#0B3A25",
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

      <Hidden smUp>
        <Box width={"85%"} m={"auto"}>
          <Box  mt={"150px"}>
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
                KetoVie 4:1 Peptide
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
                Fórmula líquida 4:1 nutricionalmente completa con 15% de
                calorías como TCM y 100% de proteína de suero extensamente
                hidrolizada para terapia cetogénica.
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • 100% proteína de suero extensamente hidrolizada para
                  pacientes con disfunciones GI o intolerancia a la proteína
                  entera.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • 15% del VCT como TCM (6 g TCM/brick): favorece la motilidad
                  intestinal y optimiza la cetosis.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Suplementado con DHA, taurina e inositol: promueven el
                  desarrollo cerebral y visual.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Nutrientes esenciales: 50 mg de Carnitina y 23 μg de Selenio
                  por brick.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Mayor contenido de vitaminas y minerales para la salud ósea.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Sales de citrato: previene la formación de cálculos renales.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Listo para usar: previene errores de dosificación y
                  contaminación.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                
                borderRadius: "2%",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Box textAlign={"center"}>
                <img height={"300px"} src="/ketovie4.1Peptide.png" alt="" />
              </Box>

              <Box m={"auto"} >
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
            <Box mt={3} >
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                KetoVie 4:1 Peptide puede ser utilizado en niños mayores de 1
                año de edad y adultos que tienen indicación de terapia
                cetogénica como tratamiento nutricional de la epilepsia
                refractaria y en otras patologías que requieran terapia
                cetogénica y que presenten alteraciones gastrointestinales o
                intolerancia a la proteína entera. Optimizada para alimentación
                por sonda y pacientes críticos.
              </Typography>
            </Box>
            <Box  width={"100%"}>
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                Listo para usar. Se recomienda agitar bien antes de su uso.
              </Typography>
            </Box>
            <Box  mt={3} width={"100%"}>
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
                  color: "#0B3A25",
                  fontFamily: "Lato",
                }}
              >
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
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "#0B3A25",
                  fontFamily: "Lato",
                }}
              >
                Caja por 30 bricks de 250 ml c/u.
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
                SABOR:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "#0B3A25",
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

export default Formulas2;
