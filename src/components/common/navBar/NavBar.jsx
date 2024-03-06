import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom"; // Importa el componente Link si estás utilizando react-router-dom

const NavBar = () => {
  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: "white", width: "100%", height:"10vh", boxShadow:"none",  }}>
        <Toolbar>
          <Box width={"37%"} ml={"14%"}>
            <Button component={Link} 
              to="/" > 
              <img width={"34%"} src="/logoverde.png" alt="" />
            </Button>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"31%"}>
            <Button
              component={Link} // Usa el componente Link para hacer que el botón sea un enlace
              to="/nosotros" // Ruta a la que se enlaza el botón
              sx={{
                fontFamily: "Lato",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#007E48",
                textTransform: "none", // Evita la transformación de mayúsculas a minúsculas
              }}
            >
              Nosotros
            </Button>
            <Button
              component={Link}
              to="/productos"
              sx={{
                fontFamily: "Lato",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#007E48",
                textTransform: "none",
              }}
            >
              Productos
            </Button>
            <Button
              component={Link}
              to="/area"
              sx={{
                fontFamily: "Lato",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#007E48",
                textTransform: "none",
              }}
            >
              Área
            </Button>
            <Button
              component={Link}
              to="/contacto"
              sx={{
                fontFamily: "Lato",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#007E48",
                textTransform: "none",
              }}
            >
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    
  );
};

export default NavBar;
