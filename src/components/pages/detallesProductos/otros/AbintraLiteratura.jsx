import { Box, Button, Hidden, Typography } from "@mui/material";
import Footer from "../../../common/footer/Footer";

const AbintraLiteratura = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/Abintra-Literatura.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Abintra-Literatura.pdf"; // Nombre del archivo a descargar

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
                Abintra
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
                Abintra es un alimento para propósitos médicos específicos a
                base de Arginina, Glutamina, proteínas y vitaminas para apoyar
                la reparación de tejidos en personas adultas que presenten
                heridas de difícil cicatrización.
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
                  • Arginina: Precursor del colágeno que promueve la
                  cicatrización de heridas.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Glutamina: Alimenta a las células de rápida replicación y
                  estimula la síntesis proteica.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Proteínas de alto valor biológico: Permiten alcanzar el
                  elevado requerimiento proteico.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Zinc: Esencial para la reparación tisular, la síntesis de
                  colágeno, la proliferación y el crecimiento celular.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Vitamina B6: Participa como cofactor en el metabolismo de
                  los aminoácidos y en la síntesis proteica.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Vitamina A: Promueve la diferenciación de fibroblastos y la
                  síntesis de colágeno.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Vitamina C: Cofactor esencial en la síntesis de colágeno y
                  protector del nuevo tejido por su función antioxidante.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Vitamina E: Facilita la cicatrización mejorando la respuesta
                  inmune.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Selenio: Protege la membrana celular del nuevo tejido.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "regular",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Lato",
                  }}
                >
                  • Cobre: Esencial como cofactor en la síntesis de colágeno.
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
                <img height={"300px"} src="/abintra.jpg" alt="" />
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
                Abintra está especialmente diseñado para apoyar la reparación de
                tejidos en personas adultas que presenten heridas de difícil
                cicatrización como: úlceras por presión, úlceras por
                insuficiencia venosa, pie diabético, heridas por quemaduras y/o
                cirugías.
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
                <strong>Oral:</strong> Mezclar un sobre de Abintra con 210 ml de agua. Agitar
                hasta que el polvo se disuelva completamente. Si la porción no
                fuera administrada completamente, refrigerar y consumir dentro
                de las 24 horas. <strong>Enteral:</strong> Mezclar 1 sobre de Abintra con 60 ml
                de agua y agitar hasta que el polvo se disuelva completamente.
                Infundir con una jeringa por sonda de alimentación. Lavar la
                sonda con 30 ml de agua antes y después de la administración. No
                mezclar con otras fórmulas enterales.
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
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Sobres individuales de 27 g de polvo.
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
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                {" "}
                Naranja.
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
                Abintra
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
                Abintra es un alimento para propósitos médicos específicos a base de Arginina, Glutamina, proteínas y vitaminas para apoyar la reparación de tejidos en personas adultas que presenten heridas de difícil cicatrización.


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
                  • Arginina: Precursor del colágeno que promueve la cicatrización de heridas.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Glutamina: Alimenta a las células de rápida replicación y estimula la síntesis proteica.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Proteínas de alto valor biológico: Permiten alcanzar el elevado requerimiento proteico.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Zinc: Esencial para la reparación tisular, la síntesis de colágeno, la proliferación y el crecimiento celular.


                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Vitamina B6: Participa como cofactor en el metabolismo de los aminoácidos y en la síntesis proteica.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Vitamina A: Promueve la diferenciación de fibroblastos y la síntesis de colágeno.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Vitamina C: Cofactor esencial en la síntesis de colágeno y protector del nuevo tejido por su función antioxidante.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Vitamina E: Facilita la cicatrización mejorando la respuesta inmune.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Selenio: Protege la membrana celular del nuevo tejido.
                </Typography>
                <Typography sx={{ fontWeight: "regular", fontSize: "14px" }}>
                  • Cobre: Esencial como cofactor en la síntesis de colágeno. 
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
                <img height={"300px"} src="/abintra.jpg" alt="" />
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
                Abintra está especialmente diseñado para apoyar la reparación de tejidos en personas adultas que presenten heridas de difícil cicatrización como: úlceras por presión, úlceras por insuficiencia venosa, pie diabético, heridas por quemaduras y/o cirugías.
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
                <strong>Oral: </strong> Mezclar un sobre de Abintra con 210 ml de agua. Agitar hasta que el polvo se disuelva completamente. Si la porción no fuera administrada completamente, refrigerar y consumir dentro de las 24 horas. <strong>Enteral: </strong> Mezclar 1 sobre de Abintra con 60 ml de agua y agitar hasta que el polvo se disuelva completamente. Infundir con una jeringa por sonda de alimentación. Lavar la sonda con 30 ml de agua antes y después de la administración. No mezclar con otras fórmulas enterales.
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
              <Typography sx={{
                  fontWeight: "regular",
                  fontSize: "14px",
                  color: "black",
                  fontFamily: "Lato",
                }}>
                Sobres individuales de 27 g de polvo.
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
                  color: "black",
                  fontFamily: "Lato",
                }}
              >
                Naranja.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Hidden>
    </>
  );
};

export default AbintraLiteratura;
