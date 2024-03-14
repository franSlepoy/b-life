import { Box, Button, Hidden, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Formulario from "./Formulario";

const Contacto = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/fondodisclaimer.png')", // Ruta de la imagen de fondo
          backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el contenedor
          backgroundPosition: "center",
        }}
      >
        <Box display={"flex"} width={"62%"} m={"auto"} pt={20} pb={20}>
          <Box bgcolor={"#007E48"} width={"40%"} pl={"4%"} pt={"4%"}>
            <Box>
              <img width={"19%"} src="/logoBlancoBi.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "37px",
                  color: "white",
                }}
              >
                Contactanos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "regular",
                  fontSize: "15px",
                  color: "white",
                  width: "250px",
                }}
              >
                Estamos para ayudarte. Nuestro equipo está a disposición para
                resolver tus consultas.
              </Typography>
            </Box>
            <Box>
              <Formulario />
            </Box>
          </Box>
          <Box width={"60%"}>
            <img
              width={"100%"}
              height={"100%"}
              src="/seccionotros.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacto;
