import { useState } from "react";
import { Box, Typography } from "@mui/material";
import GrillaFormulas from "./GrillaFormulas";
import GrillaAlimentos from "./GrillaAlimentos";
import GrillaSuplementos from "./GrillaSuplementos";
import GrillaModulos from "./GrillaModulos";

const ProductosFiltros = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] =
    useState(null);

  const categorias = [
    "Terapia Cetogénica",
    "Errores congénitos del metabolismo",
    "Alergia a la proteína de la leche de vaca",
    "Otros",
  ];

  const subcategoriasTerapiaCetogenica = [
    "FÓRMULAS",
    "ALIMENTOS",
    "SUPLEMENTOS",
    "MÓDULOS",
  ];
  const subcategoriasOtros = ["FONTUP", "GLUTAPAK R", "ABINTRA"];

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setSubcategoriaSeleccionada(null); // Restablecer la subcategoría seleccionada
  };

  const handleSubcategoriaSeleccionada = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria);
    // Lógica para mostrar productos según la subcategoría seleccionada
  };

  return (
    <>
      {/* NavBar horizontal */}
      <Box bgcolor={"#007E48"} mt={"-1px"}>
        <Box
          width={"60%"}
          m={"auto"}
          display="flex"
          justifyContent={"space-evenly"}
        >
          {categorias.map((categoria) => (
            <Box
              key={categoria}
              onClick={() => handleCategoriaSeleccionada(categoria)}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  categoria === categoriaSeleccionada
                    ? "#8893f7"
                    : "transparent",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  maxWidth: "195px",
                  lineHeight: "20px",
                  pl: 3,
                  pr: 3,
                  pt: 1,
                  pb: 1,
                }}
              >
                {categoria}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display={"flex"}>
        {/* NavBar vertical */}
        {categoriaSeleccionada === "Terapia Cetogénica" && (
          <Box
            width={"20%"}
            display="flex"
            flexDirection="column"
            bgcolor={"white"}
            p={1}
          >
            {subcategoriasTerapiaCetogenica.map((subcategoria) => (
              <Box
                key={subcategoria}
                onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "end",
                    color: "#007E48",
                    fontFamily: "Lato",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    mt: 1,
                    "&:hover": {
                      color: "#8893f7", // Cambiar color al hacer hover
                    },
                  }}
                >
                  {subcategoria}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Grilla de productos */}
        {subcategoriaSeleccionada === "FÓRMULAS" && (
          <Box ml={2} width={"65%"} bgcolor={"white"}>
            <GrillaFormulas />
          </Box>
        )}
        {/* Grilla de productos */}
        {subcategoriaSeleccionada === "ALIMENTOS" && (
          <Box width={"80%"} bgcolor={"white"}>
            <GrillaAlimentos />
          </Box>
        )}
        {/* Grilla de productos */}
        {subcategoriaSeleccionada === "SUPLEMENTOS" && (
          <Box width={"80%"} bgcolor={"white"}>
            <GrillaSuplementos />
          </Box>
        )}
        {/* Grilla de productos */}
        {subcategoriaSeleccionada === "MÓDULOS" && (
          <Box width={"80%"} bgcolor={"white"}>
            <GrillaModulos />
          </Box>
        )}
      </Box>

      {/* Grilla de productos */}
      {categoriaSeleccionada === "Errores congénitos del metabolismo" && (
        <Box mt={2} bgcolor={"white"}>
          Grilla de productos para Errores congénitos del metabolismo
        </Box>
      )}

      {categoriaSeleccionada ===
        "Alergia a la proteína de la leche de vaca" && (
        <Box mt={2}>
          Grilla de productos para Alergia a la proteína de la leche de vaca
        </Box>
      )}

      {categoriaSeleccionada === "Otros" && (
        <Box
          width={"19%"}
          display="flex"
          flexDirection="column"
          bgcolor={"white"}
          p={1}
        >
          {subcategoriasOtros.map((subcategoria) => (
            <Box
              key={subcategoria}
              onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
              sx={{
                cursor: "pointer",
                fontWeight:
                  subcategoria === subcategoriaSeleccionada ? "bold" : "normal",
              }}
            >
              <Typography
                sx={{
                  textAlign: "end",
                  color: "#007E48",
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#8893f7", // Cambiar color al hacer hover
                  },
                }}
              >
                {subcategoria}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default ProductosFiltros;
