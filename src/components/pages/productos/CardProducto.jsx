import { Box, Button, Hidden, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CardProducto = ({ imagen, categoria, titulo, descripcion, link }) => {
  return (
    <>
      <Hidden smDown>
        <Box
          sx={{ boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)" }}
          mt={2}
          p={2}
          ml={2}
          width={"30%"}
          borderRadius={"15px"}
        >
          <Box textAlign={"center"} height={"150px"}>
            <img width={"150px"} src={imagen} alt="" />
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
                height: "188px",
              }}
            >
              {descripcion}
            </Typography>
          </Box>
          <Box>
            <Button
              component={Link}
              to={link}
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
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
      </Hidden>

      <Hidden smUp>
        <Box
          sx={{ boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)" }}
          mt={2}
          p={2}
          ml={2}
          width={"90%"}
          borderRadius={"15px"}
        >
          <Box textAlign={"center"} height={"150px"}>
            <img width={"150px"} src={imagen} alt="" />
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
                height: "198px",
              }}
            >
              {descripcion}
            </Typography>
          </Box>
          <Box>
            <Button
              component={Link}
              to={link}
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
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
      </Hidden>
    </>
  );
};

export default CardProducto;
