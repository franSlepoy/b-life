import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Boton = ({ texto, linkTo }) => {
  return (
    <>
      <Button
      component={Link} // Usa Link como el componente de Button
      to={linkTo} // 
        variant="contained"
        sx={{
          bgcolor: "white",
          border: "solid 1px #00D947",
          height: "35px",
          width: "138px",
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
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "regular",
            fontSize: "12px",
            
          }}
        >
          {texto}
        </Typography>
      </Button>
    </>
  );
};

export default Boton;
