import { Box, Hidden, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Boton from "../button/Boton";

const Footer = () => {
  return (
    <>
      <Hidden smDown>
        <Box>
          <Box pt={8} width={"100%"} height={"40vh"}>
            <Box
              display={"flex"}
              width={"60%"}
              m={"auto"}
              justifyContent={"space-between"}
            >
              <Box mt={5}>
                <Box>
                  <img width={"50%"} src="/logoCarrusel.png" alt="" />
                </Box>
                <Box display={"flex"} mt={2}>
                  <CallIcon fontSize="small" sx={{ color: "#007E48" }} />
                  <Typography
                    sx={{ ml: 1, fontSize: "14px", color: "#007E48" }}
                  >
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
                  <Typography sx={{ fontSize: "15px", color: "#007E48" }}>
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
                      sx={{ color: "#007E48", ml: 3 }}
                    />

                    <Typography
                      sx={{ ml: 1, fontSize: "15px", color: "#007E48" }}
                    >
                      info@b-life.com.ar
                    </Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box textAlign={"center"}>
          <Box pt={4} pb={4} width={"100%"}>
            <Box>
              <Box mt={2}>
                <Box>
                  <img width={"50%"} src="/logoCarrusel.png" alt="" />
                </Box>

                <Box mt={1} display={"flex"} justifyContent={"center"}>
                  <Box display={"flex"}>
                    <CallIcon fontSize="small" sx={{ color:"#007E48" }} />
                    <Typography sx={{ fontSize: "14px", color: "#007E48" }}>
                      4932 4816
                    </Typography>
                  </Box>
                  <Box>
                    <a
                      href="mailto:info@b-life.com.ar"
                      style={{ textDecoration: "none" }}
                    >
                      <Box display={"flex"} ml={2}>
                        <MailOutlineIcon
                          fontSize="small"
                          sx={{ color: "#007E48" }}
                        />

                        <Typography sx={{ fontSize: "15px", color: "#007E48" }}>
                          info@b-life.com.ar
                        </Typography>
                      </Box>
                    </a>
                  </Box>
                </Box>

                <Box>
                  <Box textAlign={"center"} mt={1}>
                    <Boton texto={"Escribinos"} linkTo={"/contacto"} />
                  </Box>
                </Box>
              </Box>

              <Box mt={1}>
                <Box>
                  <Typography sx={{ fontSize: "15px", color:"#007E48" }}>
                    Cochabamba 3643.CABA
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Footer;
