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
        width={"25%"}
      >
        <Box textAlign={"center"}>
          <img width={"60px"} src={imagen} alt="" />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#007E48",
              fontFamily: "Lato",
              fontStyle: "italic",
              fontWeight: "light",
              fontSize: "15px",
              mt: 2,
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
              mt: 2,
            }}
          >
            {titulo}
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontFamily: "Lato",
              fontWeight: "regular",
              fontSize: "14px",
              fontStyle: "italic",
              mt: 2,
            }}
          >
            {descripcion}
          </Typography>
        </Box>
        <Box>
          <Button
            component={Link}
            to={link}
            sx={{
              bgcolor: "#007E48",
              fontFamily: "Lato",
              textTransform: "none",
              color: "white",
              width: "98%",
              mt: 2,
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
