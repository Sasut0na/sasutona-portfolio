import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { keyframes } from "@mui/system";

import profileImage from "../../assets/profile.jpg";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const index = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Grid container sx={{ minHeight: "100vh" }}>
            {/* Left Side - Full Image */}
            <Grid item xs={12} md={6}>
              <Container
                sx={{
                  width: "100%",
                  height: { xs: "50vh", md: "100vh" },
                  overflow: "hidden",
                  p: 5,
                  animation: `${fadeIn} 900ms ease-out 100ms both`,
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Jhon Ace Sasutona"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Container>
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: "50vh", md: "100vh" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  px: { xs: 3, md: 8 },
                 
                }}
              >
                <Box sx={{ width: "100%", mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "34px", md: "52px" },
                        fontWeight: "800",
                        color: "white",
                        lineHeight: "1.05",
                        textTransform: "capitalize",
                        flexShrink: 0,
                         animation: `${fadeUp} 900ms ease-out 500ms both`,
                      }}
                    >
                      Jhon Ace
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        ml: 2,
                        mr: { xs: -3, md: -40 },
                        minWidth: 0,
                         animation: `${fadeUp} 900ms ease-out 1000ms both`,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "34px", md: "52px" },
                      fontWeight: "800",
                      color: "white",
                      lineHeight: "1.05",
                       animation: `${fadeUp} 900ms ease-out 1500ms both`,
                    }}
                  >
                    Sasutona
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    color: "#FFFFFF",
                    animation: `${fadeUp} 900ms ease-out 2000ms both`,
                  }}
                >
                  FRONT-END WEB DEVELOPER
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default index;
