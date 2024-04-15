import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CardProducto = ({ imagen, categoria, titulo, descripcion, link }) => {
  return (
    <>
      <Box
        sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        mt={2}
        p={2}
        ml={2}
        width={"30%"}
      >
        <Box textAlign={"center"} height={"150px"}>
          <img width={"65px"}  src={imagen} alt="" />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#007E48",
              fontFamily: "Lato",
              fontStyle: "italic",
              fontWeight: "light",
              fontSize: "15px",
              height: "38px",
            }}
          >
            {categoria}
          </Typography>
          <Typography
            sx={{
              color: "#007E48",
              fontFamily: "Lato",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "16px",
              height: "48px",
            }}
          >
            {titulo}
          </Typography>
          <Typography
            sx={{
              color: "#0B3A25",
              fontFamily: "Lato",
              fontWeight: "regular",
              fontSize: "14px",
              fontStyle: "italic",
              height: "148px",
            }}
          >
            {descripcion}
          </Typography>
        </Box>
        <Box>
          <Button
           component={Link}
           to={link}
           target="_blank"  // Abre el enlace en una nueva pestaña
           rel="noopener noreferrer"  // Mejora la seguridad
            sx={{
              bgcolor: "#007E48",
              fontFamily: "Lato",
              textTransform: "none",
              color: "white",
              width: "98%",

              "&:hover": {
                color: "#007E48",
              },
            }}
          >
            Leer más
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CardProducto;
