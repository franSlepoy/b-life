import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const EnConstruccion = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#007E48",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "52%",
            borderRadius: "20px",
            backgroundImage: `url("/fondodisclaimer.png")`, // Cambiar la ruta por la ruta de tu imagen
          }}
        >
          <Box textAlign={"center"} pt={4}>
            <img width={"12%"} src="/logoBlancoBi.png" alt="" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "77px",
              lineHeight: "69px",
              color: "white",
              textAlign: "center",
              mt: 4,
            }}
          >
            Nos estamos renovando
          </Typography>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "100",
              fontSize: "23px",
              color: "white",
              textAlign: "center",
              lineHeight: "28px",
              width: "39%",
              m: "auto",
              mt: 3,
            }}
          >
            ESPECIALISTAS EN NUTRICIÓN <strong>CLÍNICA.</strong>
          </Typography>

          <Box
            width={"60%"}
            m={"auto"}
            display={"flex"}
            mt={4}
            pb={5}
            justifyContent={"space-evenly"}
          >
            <Box display={"flex"}>
              <CallIcon fontSize="small" sx={{ color: "white" }} />
              <Typography sx={{ ml: 1, fontSize: "14px", color: "white" }}>
                4932 4816
              </Typography>
            </Box>
            <a
              href="mailto:info@b-life.com.ar"
              style={{ textDecoration: "none" }}
            >
              <Box display={"flex"}>
                <MailOutlineIcon
                  fontSize="small"
                  sx={{ color: "white", ml: 6 }}
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

export default EnConstruccion;
