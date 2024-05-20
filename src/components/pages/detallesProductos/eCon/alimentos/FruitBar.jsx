import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../../common/footer/Footer";

const FruitBar = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/brochureMetax.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "brochureMetax.pdf"; // Nombre del archivo a descargar

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
                Fruit Bar
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
                Barrita a base de almidón de trigo con relleno a base de
                frutilla ideal para el tratamiento nutricional de patologías que
                requieren dietas restringidas en el aporte de proteínas y
                aminoácidos. 
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
                  • Ingredientes: Relleno de frutilla (puré de frutilla, jarabe
                  de glucosa-fructosa, azúcar, aceite de palma, fibra de bambú,
                  jugo de zanahoria concentrado, edulcorante: glicerina,
                  gelificante: pectina, regulador de acidez: ácido cítrico,
                  saborizantes), almidón de trigo, aceite de palma, azúcar,
                  fécula de papa, jarabe de arroz, harina de papa, almidón de
                  arroz, huevo, extracto de manzana, almidón de mandioca
                  modificado, fibra de remolacha, almidón de maíz modificado,
                  sal, extracto de cártamo, saborizantes naturales, EMU:
                  INS472e, LEU: INS503ii, INS500ii.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Contiene huevo y derivados de trigo. Puede contener soja.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Su envase individual permite consumirlas en
                cualquier momento y lugar. Fruit bar es tu snack ideal
                </Typography>
                
                para dietas especiales.
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
                <img height={"300px"} src="/fruitBar.png" alt="" />
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
                mal de Parkinson (en tratamiento con Levodopa) o cualquier
                patología que requiera una dieta restringida en el aporte de
                proteínas y/o aminoácidos.
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
              {/*  <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                no tiene
              </Typography> */}
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
                Envase x 125 g (5 x 25 g).{" "}
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
                FRUIT BAR
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
                Barrita a base de almidón de trigo con relleno a base de
                frutilla ideal para el tratamiento nutricional de patologías que
                requieren dietas restringidas en el aporte de proteínas y
                aminoácidos. Su envase individual permite consumirlas en
                cualquier momento y lugar. Fruit bar es tu snack ideal. Alimento
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
                  • Ingredientes: Relleno de frutilla (puré de frutilla, jarabe
                  de glucosa-fructosa, azúcar, aceite de palma, fibra de bambú,
                  jugo de zanahoria concentrado, edulcorante: glicerina,
                  gelificante: pectina, regulador de acidez: ácido cítrico,
                  saborizantes), almidón de trigo, aceite de palma, azúcar,
                  fécula de papa, jarabe de arroz, harina de papa, almidón de
                  arroz, huevo, extracto de manzana, almidón de mandioca
                  modificado, fibra de remolacha, almidón de maíz modificado,
                  sal, extracto de cártamo, saborizantes naturales, EMU:
                  INS472e, LEU: INS503ii, INS500ii.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Contiene huevo y derivados de trigo. Puede contener soja.
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
                <img height={"300px"} src="/fruitBar.png" alt="" />
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
                Puede utilizarse en el tratamiento nutricional de pacientes con
                errores congénitos del metabolismo, insuficiencia renal crónica,
                mal de Parkinson (en tratamiento con Levodopa) o cualquier
                patología que requiera una dieta restringida en el aporte de
                proteínas y/o aminoácidos.
              </Typography>
            </Box>
            <Box width={"100%"}>
              {/*  <Typography
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
                Mezclar 35 g de la premezcla con 45 ml de agua, una cucharada de
                té de aceite y sal y pimienta a gusto y según recomendación.
                Armar las hamburguesas y cocinar en la plancha o freír. Con el
                mismo preparado pueden realizarse albóndigas o rellenos de
                empanadas, tartas o pastas.
              </Typography> */}
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
              <Typography> Envase x 125 g (5 x 25 g). </Typography>
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

export default FruitBar;
