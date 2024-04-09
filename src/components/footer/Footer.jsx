import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Boton from "../common/button/Boton";

const Footer = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"30vh"}
        style={{
          backgroundImage: "linear-gradient(to  top , #478547,#FFFFFF)",
        }}
      >
        <Box
          display={"flex"}
          width={"60%"}
          m={"auto"}
          justifyContent={"space-between"}
        >
          <Box mt={5}>
            <Box>
              <img width={"80%"} src="/logofooter.png" alt="" />
            </Box>
            <Box display={"flex"} mt={2}>
              <CallIcon fontSize="small" sx={{ color: "white" }} />
              <Typography sx={{ ml: 1, fontSize: "14px", color: "white" }}>
                4932 4816
              </Typography>
            </Box>
            <Box>
              <Box mt={2}>
                <Boton texto={"Escribinos"} linkTo={"/contacto"} />
              </Box>
            </Box>
          </Box>

          <Box mt={6}>
            <Box display={"flex"}>
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                Cochabamba 3643.CABA
              </Typography>
            </Box>

            <a
              href="mailto:info@b-life.com.ar"
              style={{ textDecoration: "none" }}
            >
              <Box display={"flex"} mt={2}>
                <MailOutlineIcon
                  fontSize="small"
                  sx={{ color: "white", ml: 3 }}
                />

                <Typography sx={{ ml: 1, fontSize: "15px", color: "white" }}>
                  info@b-life.com.ar
                </Typography>
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
