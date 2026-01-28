import { Container, Grid, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@mui/system";


import React from "react";

const floatIcon = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.04);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const Accounts = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          color: "#fff",
        }}
      >
        <Grid container spacing="60vh" sx={{ p: "20vh" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              color="#ffff"
              sx={{ fontFamily: "cursive" }}
            >
              Accounts
            </Typography>
            <Typography
              variant="h6"
              color="#ffff"
              sx={{ mt: "5vh", letterSpacing: 2 }}
            >
              You can contact me on the following platforms:
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderRadius: "8px",
                  paddingInline: "40vh",
                  paddingBlock: "3vh",
                  gap: "0px",
                }}
              >
                <Link
                  href="https://github.com/Sasut0na"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    "& svg": {
                      animation: `${floatIcon} 2.6s ease-in-out infinite`,
                      transformOrigin: "center",
                      transition: "transform 200ms ease",
                    },
                    "&:hover svg": {
                      transform: "translateY(-6px) scale(1.08)",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} size="5x" />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    GITHUB
                  </Typography>
                </Link>
              </Grid>

              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderRadius: "8px",
                  paddingInline: "40vh",
                  paddingBlock: "5vh",
                  gap: "20px",
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/jhon-ace-sasutona-44a026339/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    "& svg": {
                      animation: `${floatIcon} 2.6s ease-in-out infinite`,
                      animationDelay: "0.2s",
                      transformOrigin: "center",
                      transition: "transform 200ms ease",
                    },
                    "&:hover svg": {
                      transform: "translateY(-6px) scale(1.08)",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="5x" />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    LINKEDIN
                  </Typography>
                </Link>
              </Grid>
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderRadius: "8px",
                  paddingInline: "40vh",
                  paddingBlock: "5vh",
                  gap: "20px",
                }}
              >
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpddFTjsQCZDTsmDVpMKBPqgtFcGbPXxnHlMFjQZsHvJBJNhkMTdRjstZvCBMVCplBDsDL"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    "& svg": {
                      animation: `${floatIcon} 2.6s ease-in-out infinite`,
                      animationDelay: "0.4s",
                      transformOrigin: "center",
                      transition: "transform 200ms ease",
                    },
                    "&:hover svg": {
                      transform: "translateY(-6px) scale(1.08)",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="5x" />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    GMAIL
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Accounts;
