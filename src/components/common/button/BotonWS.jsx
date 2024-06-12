
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";

const BotonWS = ({ link }) => {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            border: "solid 1px #00D947",

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
          <WhatsAppIcon fontSize="small" />
        </Button>
      </a>
    </>
  );
};

export default BotonWS;
