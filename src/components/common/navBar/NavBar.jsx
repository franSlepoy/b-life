import {
  AppBar,
  Box,
  Button,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link si estás utilizando react-router-dom

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Hidden lgDown>
        <Box>
          <AppBar
            position="fixed"
            sx={{
              bgcolor: "white",
              width: "100%",
              height: "10vh",
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <Box width={"37%"} ml={"14%"}>
                <Button
                  sx={{
                    "&:hover": {
                      color: "white",
                      bgcolor: "transparent",
                      borderRadius: "0",
                    },
                  }}
                  component={Link}
                  to="/"
                >
                  <img width={"34%"} src="/logoverde.png" alt="" />
                </Button>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"31%"}
              >
                <Button
                  component={Link} // Usa el componente Link para hacer que el botón sea un enlace
                  to="/nosotros" // Ruta a la que se enlaza el botón
                  sx={{
                    height: "10vh",
                    pl: 2,
                    pr: 2,
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#007E48",
                    textTransform: "none", // Evita la transformación de mayúsculas a minúsculas
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Nosotros
                </Button>
                <Button
                  component={Link}
                  to="/productos"
                  sx={{
                    height: "10vh",
                    pl: 2,
                    pr: 2,
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#007E48",
                    textTransform: "none",
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Productos
                </Button>
                <Box>
                  <Button
                    aria-controls="menu-lines"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                      height: "10vh",
                      pl: 2,
                      pr: 2,
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#007E48",
                      textTransform: "none",
                      "&:hover": {
                        color: "white",
                        bgcolor: "#007E48",
                        borderRadius: "0",
                      },
                      "&:active": {
                        bgcolor: "#00D947",
                      },
                    }}
                  >
                    Líneas
                  </Button>

                  <Menu
                    id="menu-lines"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{ borderRadius: 0 }}
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/TC"
                    >
                      Terapia cetogénica.
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: 0 - 1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/ECM"
                    >
                      Errores congénitos del metabolismo
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: -1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/APLV"
                    >
                      Alergia a la proteína de leche de vaca.
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: 0 - 1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/Otros"
                    >
                      Otros
                    </MenuItem>
                  </Menu>
                </Box>

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
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Contacto
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>

      <Hidden lgUp>
        <Box>
          <AppBar
            position="fixed"
            sx={{
              bgcolor: "white",
              width: "100%",

              boxShadow: "none",
            }}
          >
            <Box m={"auto"}>
              <Button
                sx={{
                  "&:hover": {
                    color: "white",
                    bgcolor: "transparent",
                    borderRadius: "0",
                  },
                }}
                component={Link}
                to="/"
              >
                <img width={"34%"} src="/logoverde.png" alt="" />
              </Button>
            </Box>
            <Toolbar>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <Button
                  component={Link} // Usa el componente Link para hacer que el botón sea un enlace
                  to="/nosotros" // Ruta a la que se enlaza el botón
                  sx={{
                    pl: 2,
                    pr: 2,
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#007E48",
                    textTransform: "none", // Evita la transformación de mayúsculas a minúsculas
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Nosotros
                </Button>
                <Button
                  component={Link}
                  to="/productos"
                  sx={{
                    height: "10vh",
                    pl: 2,
                    pr: 2,
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#007E48",
                    textTransform: "none",
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Productos
                </Button>
                <Box>
                  <Button
                    aria-controls="menu-lines"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                      height: "10vh",
                      pl: 2,
                      pr: 2,
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#007E48",
                      textTransform: "none",
                      "&:hover": {
                        color: "white",
                        bgcolor: "#007E48",
                        borderRadius: "0",
                      },
                      "&:active": {
                        bgcolor: "#00D947",
                      },
                    }}
                  >
                    Líneas
                  </Button>

                  <Menu
                    id="menu-lines"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{ borderRadius: 0 }}
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/TC"
                    >
                      Terapia Cetogénica
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: 0 - 1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/ECM"
                    >
                      Errores congénitos del metabolismo
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: -1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/APLV"
                    >
                      Alergia a la proteína de a leche de vaca
                    </MenuItem>
                    <MenuItem
                      sx={{
                        mt: 0 - 1,
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#007E48",
                        textTransform: "none",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#007E48",
                          borderRadius: "0",
                        },
                        "&:active": {
                          bgcolor: "#00D947",
                        },
                      }}
                      onClick={handleClose}
                      component={Link}
                      to="/Otros"
                    >
                      Otros
                    </MenuItem>
                  </Menu>
                </Box>

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
                    "&:hover": {
                      color: "white",
                      bgcolor: "#007E48",
                      borderRadius: "0",
                    },
                    "&:active": {
                      bgcolor: "#00D947", // Cambio de color al hacer clic
                    },
                  }}
                >
                  Contacto
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>
    </>
  );
};

export default NavBar;
