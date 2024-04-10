import { Grid, Typography } from "@mui/material";

const GrillaSuplementos = () => {
  // Aquí podrías incluir lógica para obtener los productos de la subcategoría "FÓRMULAS"

  return (
    <Grid container spacing={2}>
      {/* Aquí deberías incluir los elementos de la grilla de productos */}
      <Grid item xs={12}>
        <Typography variant="h6">Grilla de productos para Suplementos</Typography>
        {/* Aquí podrías incluir los productos */}
      </Grid>
    </Grid>
  );
};

export default GrillaSuplementos;