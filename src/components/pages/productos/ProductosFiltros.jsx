import { useState, useEffect } from "react";
import { Box, Hidden, Typography } from "@mui/material";

import CardProducto from "./CardProducto";
import { productosData } from "../../../productosData/ProductosData";

const ProductosFiltros = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]); // Estado para almacenar los productos filtrados

  useEffect(() => {
    // Filtrar los productos según la categoría y subcategoría seleccionadas
    if (categoriaSeleccionada && subcategoriaSeleccionada) {
      const productosFiltradosCategoria = productosData.filter(
        (producto) =>
          producto.categoria === categoriaSeleccionada &&
          producto.subCategoria === subcategoriaSeleccionada
      );
      setProductosFiltrados(productosFiltradosCategoria);
    } else if (categoriaSeleccionada && !subcategoriaSeleccionada) {
      const productosFiltradosCategoria = productosData.filter(
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
    "Alergia a la proteína de leche de vaca",
    "Otros productos nutricionales",
  ];

  const subcategoriasAPLV = ["Alergia a la proteína de leche de vaca"];

  const subcategoriasTerapiaCetogenica = [
    "FÓRMULAS",
    "ALIMENTOS",
    "SUPLEMENTOS",
    "MÓDULOS",
  ];

  const subcategoriasErrores = ["FÓRMULAS", "ALIMENTOS"];

  const subcategoriasOtros = ["Otros productos nutricionales"];

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setSubcategoriaSeleccionada(null); // Restablecer la subcategoría seleccionada
  };

  const handleSubcategoriaSeleccionada = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria);
  };

  return (
    <>
      <Hidden smDown>
        {/* NavBar horizontal */}
        <Box bgcolor={"#007E48"}>
          <Box
            width={"60%"}
            height={"100%"}
            m={"auto"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            {/* Renderiza las categorías */}
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
                    color: categoria === categoriaSeleccionada ? "#007E48" : "white",
                    fontStyle: categoria === categoriaSeleccionada ? "normal" : "italic",
                  }}
                >
                  {categoria}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box display={"flex"}>
          {/* Renderiza el menú de subcategorías si corresponde */}
          {categoriaSeleccionada && (
            <Box
              width={"19%"}
              display="flex"
              flexDirection="column"
              bgcolor={"white"}
              p={1}
            >
              {/* Renderiza las subcategorías según la categoría seleccionada */}
              {categoriaSeleccionada === "Terapia Cetogénica" ? (
                subcategoriasTerapiaCetogenica.map((subcategoria) => (
                  <Box
                    key={subcategoria}
                    onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "end",
                        color: "#007E48",
                        fontFamily: "Lato",
                        fontStyle: subcategoria === subcategoriaSeleccionada ? "normal" : "italic",
                        fontWeight: subcategoria === subcategoriaSeleccionada ? "bold" : "regular",
                        mt: 1,
                        "&:hover": { color: "#00D447" },
                      }}
                    >
                      {subcategoria}
                    </Typography>
                  </Box>
                ))
              ) : categoriaSeleccionada === "Alergia a la proteína de leche de vaca" ? (
                subcategoriasAPLV.map((subcategoria) => (
                  <Box
                    key={subcategoria}
                    onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "end",
                        color: "#007E48",
                        fontFamily: "Lato",
                        fontStyle: subcategoria === subcategoriaSeleccionada ? "normal" : "italic",
                        fontWeight: subcategoria === subcategoriaSeleccionada ? "bold" : "regular",
                        mt: 1,
                        "&:hover": { color: "#00D447" },
                      }}
                    >
                      {subcategoria}
                    </Typography>
                  </Box>
                ))
              ) : categoriaSeleccionada === "Errores congénitos del metabolismo" ? (
                subcategoriasErrores.map((subcategoria) => (
                  <Box
                    key={subcategoria}
                    onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "end",
                        color: "#007E48",
                        fontFamily: "Lato",
                        fontStyle: subcategoria === subcategoriaSeleccionada ? "normal" : "italic",
                        fontWeight: subcategoria === subcategoriaSeleccionada ? "bold" : "regular",
                        mt: 1,
                        "&:hover": { color: "#00D447" },
                      }}
                    >
                      {subcategoria}
                    </Typography>
                  </Box>
                ))
              ) : categoriaSeleccionada === "Otros productos nutricionales" ? (
                subcategoriasOtros.map((subcategoria) => (
                  <Box
                    key={subcategoria}
                    onClick={() => handleSubcategoriaSeleccionada(subcategoria)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "end",
                        color: "#007E48",
                        fontFamily: "Lato",
                        fontStyle: subcategoria === subcategoriaSeleccionada ? "normal" : "italic",
                        fontWeight: subcategoria === subcategoriaSeleccionada ? "bold" : "regular",
                        mt: 1,
                        "&:hover": { color: "#00D447" },
                      }}
                    >
                      {subcategoria}
                    </Typography>
                  </Box>
                ))
              )  : null}
            </Box>
          )}

          {/* Grilla de productos */}
          <Box
            width={"64%"}
            bgcolor={"white"}
            display={"flex"}
            flexWrap={"wrap"}
          >
            {/* Renderiza los productos filtrados */}
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
      </Hidden>

      <Hidden smUp>
        {/* NavBar horizontal */}
        <Box bgcolor={"#007E48"}>
          <Box width={"100%"} m={"auto"} display="flex">
            {/* Renderiza las categorías */}
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
                    fontSize: "12px",
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    pl: 1,
                    pr: 1,
                    pt: 1,
                    pb: 1,
                    color: categoria === categoriaSeleccionada ? "#007E48" : "white",
                    fontStyle: categoria === categoriaSeleccionada ? "normal" : "italic",
                  }}
                >
                  {categoria}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box display={"flex"}>
          {/* Renderiza el menú de subcategorías si corresponde */}
          {categoriaSeleccionada && (
            <Box
              width={"25%"}
              display="flex"
              flexDirection="column"
              bgcolor={"white"}
              p={1}
            >
              {/* Renderiza las subcategorías según la categoría seleccionada */}
              {categoriaSeleccionada === "Terapia Cetogénica" &&
                subcategoriasTerapiaCetogenica.map((subcategoria) => (
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
                        fontSize: "10px",
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
              {/* Renderiza las subcategorías para la categoría "Errores congénitos del metabolismo" */}
              {categoriaSeleccionada === "Errores congénitos del metabolismo" &&
                subcategoriasErrores.map((subcategoria) => (
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
                        fontSize: "10px",
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
                {/* Renderiza las subcategorías para la categoría "Otros" */}
              {categoriaSeleccionada === "Otros productos nutricionales" &&
                subcategoriasOtros.map((subcategoria) => (
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
                        fontSize: "10px",
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
          <Box width={"100%"} bgcolor={"white"}>
            {/* Renderiza los productos filtrados */}
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
      </Hidden>
    </>
  );
};

export default ProductosFiltros;
