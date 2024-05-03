import { Parallax } from "react-scroll-parallax";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Hidden, Typography } from "@mui/material";
import BotonWS from "../../common/button/BotonWS";
import Boton from "../../common/button/Boton";

const Otros = () => {
  return (
    <>
      <Hidden smDown>
        <Parallax speed={-12}>
          <Box mt={8}>
            <img
            style={{objectFit:"cover"}}
              width={"100%"}
              height={"500px"}
              src="/foto01otros.png"
              alt=""
            />
          </Box>
        </Parallax>

        <Box position={"absolute"} left={"20%"} top={"24%"} zIndex={100}>
          <img width={"8%"} src="/logoBlancoBi.png" alt="" />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",
              width: "310px",
              fontSize: "60px",
              lineHeight: "55px",
              color: "white",
              mt: 2,
            }}
          >
            Productos
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",
              width: "310px",
              fontSize: "60px",
              lineHeight: "55px",
              color: "white",
              mt: 2,
            }}
          >
            Terapéuticos
          </Typography>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "60px",
              lineHeight: "81px",
              color: "white",
            }}
          >
            Nutricionales Esenciales
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "regular",
              width: "380px",
              fontSize: "16px",
              lineHeight: "17px",
              color: "white",

              mt: 0,
            }}
          >
            Dentro de las posibilidades terapéuticas actuales para los EIM, el
            tratamiento nutricional es el pilar más importante en el manejo
            global de estos trastornos.
          </Typography>
        </Box>

        <Box
          mt={-2}
          width={"100%"}
          bgcolor={"#004ed7"}
          /* style={{
          backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
        }} */
        >
          <Box width={"100%"} pt={0} height={"26vh"} p={"3%"}>
            <Typography
              sx={{
                pt: 10,
                width: "70%",
                m: "auto",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "30px",
                fontWeight: "light", // Debería ser "normal" en lugar de "regular"
                fontStyle: "italic",
                lineHeight: "30px",
                color: "white",
              }}
            >
              TALES COMO {""}
              <strong>
                reparación de tejidos en personas adultas que presenten heridas
                de difícil cicatrización (Abintra), restauración de la
                superficie y flora intestinal (Glutapak R) y mejora cognitiva en
                personas con síndrome de Down (Font Up)
              </strong>{" "}
            </Typography>
          </Box>

          <Box mt={10} textAlign={"center"}>
            <Boton texto={"Productos"} linkTo={"/productos"} />
            <Box mt={1}>
              <BotonWS />
            </Box>
          </Box>

          <Box mt={6}>
            <Box width={"100%"} height={"30vh"}>
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
                    <Typography
                      sx={{ ml: 1, fontSize: "14px", color: "white" }}
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

                      <Typography
                        sx={{ ml: 1, fontSize: "15px", color: "white" }}
                      >
                        info@b-life.com.ar
                      </Typography>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box mt={8}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"500px"}
            src="/foto01otros.png"
            alt=""
          />
        </Box>

        <Box position={"absolute"} left={"6%"} top={"150px"} zIndex={100}>
          <img width={"18%"} src="/logoBlancoBi.png" alt="" />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",
              width: "110px",
              fontSize: "50px",
              lineHeight: "45px",
              color: "white",
              mt: 1,
            }}
          >
            Productos
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",
              width: "310px",
              fontSize: "50px",
              lineHeight: "45px",
              color: "white",
              mt: 1,
            }}
          >
            Terapéuticos
          </Typography>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "50px",
              lineHeight: "51px",
              color: "white",
              mt: 2,
            }}
          >
            Nutricionales Esenciales
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "regular",
              width: "90%",
              fontSize: "16px",
              lineHeight: "17px",
              color: "white",

              mt: 4,
            }}
          >
            Dentro de las posibilidades terapéuticas actuales para los EIM, el
            tratamiento nutricional es el pilar más importante en el manejo
            global de estos trastornos.
          </Typography>
        </Box>

        <Box
          mt={-2}
          width={"100%"}
          bgcolor={"#004ed7"}
          /* style={{
          backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
        }} */
        >
          <Box pt={6} textAlign={"center"}>
            <Boton texto={"Productos"} linkTo={"/productos"} />
            <Box mt={1}>
              <BotonWS />
            </Box>
          </Box>
          <Box width={"100%"}>
            <Typography
              sx={{
                pt: 4,
                width: "90%",
                m: "auto",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "30px",
                fontWeight: "light", // Debería ser "normal" en lugar de "regular"
                fontStyle: "italic",
                lineHeight: "30px",
                color: "white",
              }}
            >
              TALES COMO {""}
              <strong>
                reparación de tejidos en personas adultas que presenten heridas
                de difícil cicatrización (Abintra), restauración de la
                superficie y flora intestinal (Glutapak R) y mejora cognitiva en
                personas con síndrome de Down (Font Up)
              </strong>{" "}
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <Box pt={4} pb={4} width={"100%"}>
              <Box>
                <Box mt={2}>
                  <Box>
                    <img width={"200px"} src="/logofooter.png" alt="" />
                  </Box>

                  <Box mt={1} display={"flex"} justifyContent={"center"}>
                    <Box display={"flex"}>
                      <CallIcon fontSize="small" sx={{ color: "white" }} />
                      <Typography sx={{ fontSize: "14px", color: "white" }}>
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
                            sx={{ color: "white" }}
                          />

                          <Typography sx={{ fontSize: "15px", color: "white" }}>
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
                    <Typography sx={{ fontSize: "15px", color: "white" }}>
                      Cochabamba 3643.CABA
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Otros;
