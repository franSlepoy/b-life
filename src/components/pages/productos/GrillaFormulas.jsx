import { Box, Grid, Typography } from "@mui/material";
import { productosFormulaData } from "../../../productosData/ProductosFormulasData";
import CardProducto from "./CardProducto";

const GrillaFormulas = () => {
  // Aquí podrías incluir lógica para obtener los productos de la subcategoría "FÓRMULAS"

  return (
    <Box display="flex" flexWrap="wrap">
      {productosFormulaData.map((producto) => (
        <CardProducto
          key={producto.id}
          imagen={producto.imagen}
          categoria={producto.categoria}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          link={producto.link}
        />
      ))}
    </Box>
  );
};

export default GrillaFormulas;
