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
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [emailDestino, setEmailDestino] = useState("slepoyfrancisco@gmail.com"); // Estado para almacenar el valor seleccionado del correo electrónico
  const sendEmail = (e) => {
    e.preventDefault();
  
    // Verificar si emailDestino tiene un valor definido
    if (!emailDestino) {
      console.error("El campo de correo electrónico de destino está vacío.");
      return;
    } 
  
    // Configurar los parámetros para enviar el correo electrónico
    const templateParams = {
      to: emailDestino,
      // Otros parámetros del correo electrónico si es necesario
      user_name: form.current.user_name.value,
      user_lastName: form.current.user_lastName.value,
      user_email: form.current.user_email.value,
      user_tel: form.current.user_tel.value,
      message: form.current.message.value,
    }; 
  
    // Envío del correo electrónico utilizando Email.js
    emailjs
      .sendForm(
        "service_igs9bgw", // Reemplaza esto con tu ID de servicio
        "template_q7cla0k", // Reemplaza esto con tu ID de plantilla
        templateParams,   // Usar los parámetros del formulario en lugar de form.current
        form.current,
        "drwJl6gRse08FJjO-" // Reemplaza esto con tu ID de usuario
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
  

 const handleEmailChange = (event) => {
    setEmailDestino(event.target.value);
    console.log("Nuevo valor de emailDestino:", event.target.value); // Agrega este console.log para depurar
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
            ref={form}
            onSubmit={sendEmail}
            width={"85%"}
            sx={{
              alignItems: "center", // Centrar verticalmente el contenido
              display: "flex",
              flexDirection: "column",
            }}
          >
         <label htmlFor="email">Área con la que querés contactarte</label>
            <select
              id="email"
              value={emailDestino}
              onChange={handleEmailChange}
            >
              <option value="slepoyfrancisco@gmail.com">
                Errores congénitos del metabolismo
              </option>
              <option value="fernando.bernardo@b-life.com.ar">
                Alergia a la proteína de leche de vaca
              </option>
              <option value="constanza.boga@b-life.com.ar">
                Terapia Cetogénica
              </option>
              <option value="fernando.bernardo@b-life.com.ar">
                Otros productos
              </option>
              <option value="cotizaciones@b-life.com.ar">
                Consultas comerciales
              </option>
            </select> 

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
