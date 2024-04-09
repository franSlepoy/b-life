import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";

const BotonIG = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://www.instagram.com/b_life.dieta.cetogenica/ "
      >
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
          <InstagramIcon fontSize="small" />
        </Button>
      </a>
    </>
  );
};

export default BotonIG;
