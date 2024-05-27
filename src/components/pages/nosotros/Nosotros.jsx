import { Box, Button, Hidden, Typography } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Boton from "../../common/button/Boton";
const Nosotros = () => {
  return (
    <>
      <Hidden smDown>
        <Parallax speed={-6}>
          <Box mt={8}>
            <img
              width={"100%"}
              height={"472vh"}
              src="/foto01nosotros.png"
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
            B-Life es
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "60px",
              lineHeight: "61px",
              color: "white",
            }}
          >
            Better
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "60px",
              lineHeight: "61px",
              color: "white",
            }}
          >
            Life
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "regular",
              width: "290px",
              fontSize: "14px",
              lineHeight: "17px",
              color: "white",
              mt: 1,
            }}
          >
            Nos centramos en brindar atención personalizada a los pacientes,
            cuidadores, familiares y profesionales, colocando siempre en primer
            lugar el factor humano, aportando a una mejor calidad de vida.
          </Typography>
        </Box>

        <Box
          mt={-2}
          width={"100%"}
          style={{
            backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
          }}
        >
          <Box
            display={"flex"}
            width={"62%"}
            m={"auto"}
            textAlign={"justify"}
            pt={"15vh"}
            sx={{
              fontFamily: "Lato",
              fontStyle: "regular",
              fontSize: "22px",
              color: "white",
            }}
          >
            <Box width={"48%"} ml={2}>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                }}
              >
                B-Life es una empresa argentina con más de 12 años de actividad
                ininterrumpida en el país, que provee alimentos para propósitos
                médicos específicos de alta calidad destinados a patologías que
                requieren un tratamiento nutricional especializado. La Empresa
                está dirigida por profesionales de la salud que cuentan con
                vasta experiencia en el área, profesionalismo y dedicación. Esto
                nos permite proporcionar no sólo el mejor producto, sino también
                brindar asesoramiento a profesionales y familias y contención a
                los pacientes desde el inicio del tratamiento.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                  mt: 1,
                }}
              >
                La marca de B-LIFE surge como abreviatura de Better Life, lo
                cual intenta graficar una “mejor calidad de vida”. En 2012, se
                pone en marcha B-Life como empresa argentina dedicada a la
                importación y a la comercialización de alimentos muy bajos en
                proteínas. Luego, incorporó fórmulas para el tratamiento
                nutricional de Errores Congénitos del Metabolismo, pasando a ser
                una de las empresas más reconocidas en el país para la provisión
                de este tipo de productos.
              </Typography>
            </Box>

            <Box width={"48%"} ml={"2%"}>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                }}
              >
                Poco a poco, B-Life fue sumando a su cartera de productos
                fórmulas para el tratamiento nutricional de otras patologías,
                como ser Alergia a la Proteína de Leche de Vaca (2015) y Terapia
                Cetogénica para el tratamiento de Epilepsia Refractaria (2016).
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                  mt: 1,
                }}
              >
                En paralelo, B-Life comenzó a desarrollar productos nacionales
                (como ser alimentos bajos en proteínas, harina cetogénica,
                suplementos multivitamínico y mineral, TCM, entre otros)
                convirtiéndose en la primera empresa de Latinoamérica
                desarrolladora de este tipo de insumos.
              </Typography>

              <Box mt={5} display={"flex"} justifyContent={"flex-end"}>
                <Button
                  component={Link}
                  to={"/productos"}
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    border: "solid 1px #00D947",
                    height: "35px",
                    width: "188px",
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
                    Conocé nuestros productos
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box width={"100%"} pt={0} height={"26vh"} p={"3%"}>
            <Typography
              sx={{
                pt: 6,
                width: "70%",
                m: "auto",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "30px",
                fontWeight: "light", // Debería ser "normal" en lugar de "regular"
                fontStyle: "italic",
                lineHeight: "28px",
                color: "white",
              }}
            >
              <strong>
                Nuestra misión es MEJORAR LA CALIDAD DE VIDA de los pacientes,
                ofreciendo alternativas terapéuticas superiores
              </strong>{" "}
              AL ALCANCE DE LOS PROFESIONALES DE LA SALUD.
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"64%"}
            m={"auto"}
            pt={12}
            pb={8}
          >
            <Box textAlign={"center"}>
              <Box pb={2}>
                <img width={"60px"} src="/botiquin.png" alt="" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "#007E48",
                  width: "160px",
                  m: "auto",
                  mt: -2,
                }}
              >
                COMPROMISO CON EL PACIENTE
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "#007E48",
                  width: "235px",
                }}
              >
                {" "}
                Priorizar las necesidades y la seguridad de los pacientes en
                todas nuestras actividades, desde la investigación y desarrollo
                hasta la comercialización y el uso de nuestros productos.
              </Typography>
            </Box>

            <Box textAlign={"center"}>
              <Box pb={2} textAlign={"center"}>
                <img width={"60px"} src="/frasco.png" alt="" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "#007E48",
                  width: "190px",
                  m: "auto",
                }}
              >
                CALIDAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "#007E48",
                  width: "215px",
                }}
              >
                {" "}
                Compromiso con la excelencia en la importación y desarrollo de
                alimentos para propósito médico seguros, eficaces y de alta
                calidad.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Box pb={2}>
                <img width={"60px"} src="/diamante.png" alt="" />
              </Box>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "#007E48",
                  width: "150px",
                  m: "auto",
                }}
              >
                RESPETO
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "#007E48",
                  width: "210px",
                }}
              >
                {" "}
                B-Life considera el respeto uno de sus principales valores,
                demostrándolo en cada contacto y en cada lugar en el que está
                presente.
              </Typography>
            </Box>
          </Box>
          <Box>
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
        </Box>
      </Hidden>

      <Hidden smUp>
        <Parallax speed={-6}>
          <Box mt={12}>
            <img
              width={"100%"}
              height={"402px"}
              style={{ objectFit: "cover" }}
              src="/fotonosotros-inicio.png"
              alt=""
            />
          </Box>
        </Parallax>

        <Box position={"absolute"} left={"6%"} top={"150px"} zIndex={100}>
          <img width={"8%"} src="/logoBlancoBi.png" alt="" />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "light",
              width: "80%",
              fontSize: "60px",
              lineHeight: "55px",
              color: "white",
              mt: 2,
            }}
          >
            B-Life es
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "60px",
              lineHeight: "61px",
              color: "white",
            }}
          >
            Better
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "bold",
              fontStyle: "italic",

              fontSize: "60px",
              lineHeight: "61px",
              color: "white",
            }}
          >
            Life
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: "regular",
              width: "80%",
              fontSize: "14px",
              lineHeight: "17px",
              color: "white",
              mt: 1,
            }}
          >
            Nos centramos en brindar atención personalizada a los pacientes,
            cuidadores, familiares y profesionales, colocando siempre en primer
            lugar el factor humano, aportando a una mejor calidad de vida.
          </Typography>
        </Box>

        <Box
          mt={-2}
          width={"100%"}
          style={{
            backgroundImage: "linear-gradient(to  top, #00d647 , #007e48)",
          }}
        >
          <Box
            width={"88%"}
            m={"auto"}
            textAlign={"justify"}
            pt={8}
            sx={{
              fontFamily: "Lato",
              fontStyle: "regular",
              fontSize: "22px",
              color: "white",
            }}
          >
            <Box width={"100%"}>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                }}
              >
                B-Life es una empresa argentina con más de 12 años de actividad
                ininterrumpida en el país, que provee alimentos para propósitos
                médicos específicos de alta calidad destinados a patologías que
                requieren un tratamiento nutricional especializado. La Empresa
                está dirigida por profesionales de la salud que cuentan con
                vasta experiencia en el área, profesionalismo y dedicación. Esto
                nos permite proporcionar no sólo el mejor producto, sino también
                brindar asesoramiento a profesionales y familias y contención a
                los pacientes desde el inicio del tratamiento.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                  mt: 1,
                }}
              >
                La marca de B-LIFE surge como abreviatura de Better Life, lo
                cual intenta graficar una “mejor calidad de vida”. En 2012, se
                pone en marcha B-Life como empresa argentina dedicada a la
                importación y a la comercialización de alimentos muy bajos en
                proteínas. Luego, incorporó fórmulas para el tratamiento
                nutricional de Errores Congénitos del Metabolismo, pasando a ser
                una de las empresas más reconocidas en el país para la provisión
                de este tipo de productos.
              </Typography>
            </Box>

            <Box width={"100%"} mt={1}>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                }}
              >
                Poco a poco, B-Life fue sumando a su cartera de productos
                fórmulas para el tratamiento nutricional de otras patologías,
                como ser Alergia a la Proteína de Leche de Vaca (2015) y Terapia
                Cetogénica para el tratamiento de Epilepsia Refractaria (2016).
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontStyle: "regular",
                  fontSize: "15px",
                  color: "white",
                  lineHeight: "19px",
                  mt: 1,
                }}
              >
                En paralelo, B-Life comenzó a desarrollar productos nacionales
                (como ser alimentos bajos en proteínas, harina cetogénica,
                suplementos multivitamínico y mineral, TCM, entre otros)
                convirtiéndose en la primera empresa de Latinoamérica
                desarrolladora de este tipo de insumos.
              </Typography>

              <Box mt={5} display={"flex"} justifyContent={"center"}>
                <Button
                  component={Link}
                  to={"/productos"}
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    border: "solid 1px #00D947",
                    height: "35px",
                    width: "188px",
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
                    Conocé nuestros productos
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box width={"100%"} p={"3%"}>
            <Typography
              sx={{
                pt: 6,
                width: "90%",
                m: "auto",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "30px",
                fontWeight: "light", // Debería ser "normal" en lugar de "regular"
                fontStyle: "italic",
                lineHeight: "28px",
                color: "white",
              }}
            >
              <strong>
                Nuestra misión es MEJORAR LA CALIDAD DE VIDA de los pacientes,
                ofreciendo alternativas terapéuticas superiores
              </strong>{" "}
              AL ALCANCE DE LOS PROFESIONALES DE LA SALUD.
            </Typography>
          </Box>

          <Box width={"80%"} m={"auto"} pt={5} pb={2}>
            <Box textAlign={"center"}>
              <Box>
                <img width={"40px"} src="/botiquin.png" alt="" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "white",

                  m: "auto",
                  pt: 2,
                }}
              >
                COMPROMISO CON EL PACIENTE
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "white",
                }}
              >
                {" "}
                Priorizar las necesidades y la seguridad de los pacientes en
                todas nuestras actividades, desde la investigación y desarrollo
                hasta la comercialización y el uso de nuestros productos.
              </Typography>
            </Box>

            <Box mt={2} textAlign={"center"}>
              <Box textAlign={"center"}>
                <img width={"50px"} src="/frasco.png" alt="" />
              </Box>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "white",

                  m: "auto",
                }}
              >
                CALIDAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "18px",
                  color: "white",
                }}
              >
                {" "}
                Compromiso con la excelencia en la importación y desarrollo de
                alimentos para propósito médico seguros, eficaces y de alta
                calidad.
              </Typography>
            </Box>
            <Box mt={2} textAlign={"center"}>
              <Box>
                <img width={"50px"} src="/diamante.png" alt="" />
              </Box>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "white",

                  m: "auto",
                }}
              >
                RESPETO
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textAlign: "center",
                  lineHeight: "22px",
                  color: "white",
                }}
              >
                {" "}
                B-Life considera el respeto uno de sus principales valores,
                demostrándolo en cada contacto y en cada lugar en el que está
                presente.
              </Typography>
            </Box>
          </Box>

          <Box textAlign={"center"}>
            <Box pt={4} pb={14} width={"100%"}>
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

export default Nosotros;
