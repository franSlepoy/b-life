import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
              <Typography sx={{ ml: 1, fontSize: "14px", color:"white" }}>
                4932 4816
              </Typography>
            </Box>
            <Box>
              <Box>
                <Box mt={2}>
                  <img width={"128px"} src="/botonVerdeBlanco.png" alt="" />
                  <Box mt={-8} ml={4}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: "regular",
                        fontSize: "12px",
                        lineHeight: "81px",
                        color: " #007E48",
                      }}
                    >
                      Escribinos
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box mt={5}>
            <Box display={"flex"}>
              <WhatsAppIcon sx={{ color: "white", ml: 2 }} />
              <InstagramIcon sx={{ color: "white", ml: 2 }} />
              <YouTubeIcon sx={{ color: "white", ml: 2 }} />
              <LinkedInIcon sx={{ color: "white", ml: 2 }} />
              <FacebookIcon sx={{ color: "white", ml: 2 }} />
            </Box>
            <Box display={"flex"} mt={3}>
              <MailOutlineIcon
                fontSize="small"
                sx={{ color: "white", ml: 6 }}
              />
              <Typography sx={{ ml: 1, fontSize: "15px", color: "white" }}>
                info@b-life.com.ar
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
     
    </>
  );
};

export default Footer;
