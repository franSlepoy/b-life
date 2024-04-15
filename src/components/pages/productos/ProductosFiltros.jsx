import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import CardProducto from "./CardProducto";
import { productosFormulaData } from "../../../productosData/ProductosData";

const ProductosFiltros = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] =
    useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]); // Estado para almacenar los productos filtrados

  useEffect(() => {
    // Filtrar los productos según la categoría y subcategoría seleccionadas
    if (categoriaSeleccionada && subcategoriaSeleccionada) {
      const productosFiltradosCategoria = productosFormulaData.filter(
        (producto) =>
          producto.categoria === categoriaSeleccionada &&
          producto.subCategoria === subcategoriaSeleccionada
      );
      setProductosFiltrados(productosFiltradosCategoria);
    } else if (categoriaSeleccionada && !subcategoriaSeleccionada) {
      const productosFiltradosCategoria = productosFormulaData.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      );
      setProductosFiltrados(productosFiltradosCategoria);
    } else {
      setProductosFiltrados([]); // Restablecer los productos filtrados si no hay categoría seleccionada
    }
  }, [categoriaSeleccionada, subcategoriaSeleccionada]);

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

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setSubcategoriaSeleccionada(null); // Restablecer la subcategoría seleccionada
  };

  const handleSubcategoriaSeleccionada = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria);
  };

  return (
    <>
      {/* NavBar horizontal */}
      <Box bgcolor={"#007E48"}>
        <Box
          width={"60%"}
          height={"100%"}
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
                  categoria === categoriaSeleccionada ? "white" : "transparent",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",

                  fontFamily: "Lato",

                  fontWeight: "bold",
                  maxWidth: "195px",
                  lineHeight: "20px",
                  pl: 3,
                  pr: 3,
                  pt: 1,
                  pb: 1,
                  color:
                    categoria === categoriaSeleccionada ? "#007E48" : "white",
                  fontStyle:
                    categoria === categoriaSeleccionada ? "normal" : "italic",
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
            width={"19%"}
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

                    fontStyle:
                      subcategoria === subcategoriaSeleccionada
                        ? "normal"
                        : "italic",
                    fontWeight:
                      subcategoria === subcategoriaSeleccionada
                        ? "bold"
                        : "regular",
                    mt: 1,

                    "&:hover": {
                      color: "#00D447",
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
        <Box width={"64%"} bgcolor={"white"} display={"flex"} flexWrap={"wrap"}>
          {productosFiltrados.map((producto) => (
            <CardProducto
              key={producto.id}
              titulo={producto.titulo}
              categoria={producto.categoria}
              imagen={producto.imagen}
              descripcion={producto.descripcion}
              link={producto.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductosFiltros;
