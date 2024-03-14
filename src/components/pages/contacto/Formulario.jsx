import {
  Box,
  Button,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Formulario = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [emailDestino, setEmailDestino] = useState(""); // Estado para almacenar el valor seleccionado del correo electrónico
  const sendEmail = (e) => {
    e.preventDefault();

    // Envío del correo electrónico utilizando Email.js
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Reemplaza esto con tu ID de servicio
        "YOUR_TEMPLATE_ID", // Reemplaza esto con tu ID de plantilla
        e.target, // El formulario que estás enviando
        "YOUR_USER_ID" // Reemplaza esto con tu ID de usuario
      )
      .then(
        (result) => {
          console.log(result.text);
          setMensajeEnviado(true); // Cambiar el estado a true cuando se envía el mensaje
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Hidden>
        {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es true
          <Typography
            width={"100%"}
            mt={30}
            variant="h5"
            color="success"
            align="center"
            fontFamily={"Lato"}
          >
            ¡Mensaje enviado!
          </Typography>
        ) : (
          <Box
            component="form"
            /* ref={ form } */
            onSubmit={sendEmail}
            width={"85%"}
            sx={{
              alignItems: "center", // Centrar verticalmente el contenido
              display: "flex",
              flexDirection: "column",
            }}
          >
             <Typography sx={{fontFamily:"Lato", fontSize:"14px",color:"black", mt:5, mb:-7,ml:-2, zIndex:100}} >Área con la que querés contactarte</Typography>
            <Select
              
              value={emailDestino} // emailDestino es el estado que contendrá el valor seleccionado
              onChange={(e) => setEmailDestino(e.target.value)} // Manejar el cambio de valor
              variant="filled"
              sx={{
                mt: 2,
                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",
              }}
            >
              <Box width={"60%"} >
                <MenuItem value={"daniela.korman@b-life.com.ar"}>
                  Errores congénitos del metabolismo
                </MenuItem>
                <MenuItem value={"fernando.bernardo@b-life.com.ar"}>
                  Alergia a la proteína de leche de vaca
                </MenuItem>
                <MenuItem value={"constanza.boga@b-life.com.ar"}>
                  Terapia Cetogénica
                </MenuItem>
                <MenuItem value={"fernando.bernardo@b-life.com.ar"}>
                  Otros productos
                </MenuItem>
                <MenuItem value={"cotizaciones@b-life.com.ar"}>
                  Consultas comerciales
                </MenuItem>
              </Box>
            </Select>

            <TextField
              type="text"
              name="user_name"
              label="Nombre"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,
                color: "black",
                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",

                display: "flex",
                flexDirection: "column",

                "& .MuiInputBase-input": {},
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
              }}
            />
            <TextField
              type="text"
              name="user_lastName"
              label="Apellido"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,
                fontFamily: "Lato",
                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",

                alignItems: "center",
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
              }}
            />
            <TextField
              type="email"
              name="user_email"
              label="Mail"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,

                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",
              }}
            />

            <TextField
              type="tel"
              name="user_tel"
              label="Teléfono"
              id="standard-size-normal"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                mt: 2,

                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",
              }}
            />

            <TextField
              type="text"
              name="message"
              label="Mensaje"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,

                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                width: "100%",
                bgcolor: "white",
                borderRadius: "28px",
                height: "100px",
              }}
            />

            <Box sx={{ mt: 5, mb: 4, ml: "40%" }}>
              <Button
                type="submit"
                value="Send"
                variant="contained"
                sx={{
                  bgcolor: "white",
                  border: "solid 1px #00D947",
                  height: "45px",
                  width: "158px",
                  color: " #007E48",
                  textTransform: "none",
                  "&:hover": {
                    color: "white",
                    bgcolor: "#007E48",
                    borderColor: "#00D947",
                  },
                  "&:active": {
                    color: "#007E48",
                    bgcolor: "#00D947",
                    borderColor: "#007E48",
                  },
                }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        )}
      </Hidden>
    </>
  );
};

export default Formulario;
