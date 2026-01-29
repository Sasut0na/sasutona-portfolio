import { Container, Grid, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./accounts.css";


const Accounts = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          color: "#fff",
          minHeight: { xs: "auto", md: "100vh" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "center"
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 4, md: 0 }}
          columnSpacing={{ xs: 0, md: 8 }}
          sx={{ px: { xs: 2, sm: 4, md: 10 }, py: { xs: 6, md: 14 } }}
          
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h1"
              color="#ffff"
              sx={{ fontFamily: "cursive", fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" } }}
            >
              Accounts
            </Typography>
            <Typography
              variant="h6"
              color="#ffff"
              sx={{ mt: { xs: 2, md: 6 }, letterSpacing: { xs: 1, md: 2 }, maxWidth: 520 }}
            >
              You can contact me on the following platforms:
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                size={{ xs: 12 }}
                className="account-card"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: "12px",
                  px: { xs: 2, sm: 2.5, md: 3 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  minHeight: { xs: 80, sm: 96, md: 110 },
                  width: "100%",
                  maxWidth: { xs: 340, sm: 420, md: 520 },
                }}
              >
                <Link
                  href="https://github.com/Sasut0na"
                  target="_blank"
                  className="account-link delay-1"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "10px", sm: "14px" },
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "clamp(2rem, 7vw, 3.2rem)" }} />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                      letterSpacing: 1,
                    }}
                  >
                    GITHUB
                  </Typography>
                </Link>
              </Grid>

              <Grid
                size={{ xs: 12 }}
                className="account-card"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: "12px",
                  px: { xs: 2, sm: 2.5, md: 3 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  minHeight: { xs: 80, sm: 96, md: 110 },
                  width: "100%",
                  maxWidth: { xs: 340, sm: 420, md: 520 },
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/jhon-ace-sasutona-44a026339/"
                  target="_blank"
                  className="account-link delay-2"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "10px", sm: "14px" },
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "clamp(2rem, 7vw, 3.2rem)" }} />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                      letterSpacing: 1,
                    }}
                  >
                    LINKEDIN
                  </Typography>
                </Link>
              </Grid>

              <Grid
                size={{ xs: 12 }}
                className="account-card"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: "12px",
                  px: { xs: 2, sm: 2.5, md: 3 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  minHeight: { xs: 80, sm: 96, md: 110 },
                  width: "100%",
                  maxWidth: { xs: 340, sm: 420, md: 520 },
                }}
              >
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpddFTjsQCZDTsmDVpMKBPqgtFcGbPXxnHlMFjQZsHvJBJNhkMTdRjstZvCBMVCplBDsDL"
                  target="_blank"
                  className="account-link delay-3"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "10px", sm: "14px" },
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "clamp(2rem, 7vw, 3.2rem)" }} />
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      fontFamily: "roboto",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                      letterSpacing: 1,
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
