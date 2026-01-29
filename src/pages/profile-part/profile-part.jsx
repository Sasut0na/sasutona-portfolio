import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

import profileImage from "../../assets/profile.jpg";

import "./profile-part.css";

const ProfilePart = () => {
  const sectionRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) {
      return undefined;
    }

    let lastEntryWasIntersecting = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !lastEntryWasIntersecting) {
          setAnimationKey((prev) => prev + 1);
        }
        lastEntryWasIntersecting = entry.isIntersecting;
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <React.Fragment>
      <Box
        ref={sectionRef}
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Grid container sx={{ minHeight: { xs: "auto", md: "100vh" } }}>
            {/* Left Side - Full Image */}
            <Grid item xs={12} md={6}>
                <Container
                  key={`profile-image-${animationKey}`}
                sx={{
                  width: "100%",
                  height: { xs: "40vh", sm: "45vh", md: "100vh" },
                  overflow: "hidden",
                  p: { xs: 2, sm: 3, md: 5 },
                  pb: { xs: 3, sm: 6, md: 10 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="profile-image-container"
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Jhon Ace Sasutona"
                  sx={{
                    width: { xs: "80%", sm: "100%", md: "100%" },
                    height: { xs: "auto", sm: "100%", md: "100%" },
                    objectFit: "cover",
                    display: "block",
                  }}
                  className="profile-image"
                />
              </Container>
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  minHeight: { xs: "auto", md: "100vh" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                  px: { xs: 2.5, sm: 4, md: 8 },
                  py: { xs: 3.5, sm: 5, md: 0 },
                 
                }}
              >
                <Box key={`profile-title-${animationKey}`} sx={{ width: "100%", mb: { xs: 1.5, md: 2 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      width: "100%",
                      minWidth: 0,
                      flexWrap: { xs: "wrap", sm: "nowrap" },
                    }}
                  >
                    <Typography
                      key={`profile-first-name-${animationKey}`}
                      sx={{
                        fontSize: { xs: "30px", sm: "38px", md: "52px" },
                        fontWeight: "800",
                        color: "#ffffff",
                        lineHeight: "1.05",
                      }}
                      className="profile-fade-up delay-1"
                    >
                      Jhon Ace
                    </Typography>
                    <Box
                      key={`profile-divider-${animationKey}`}
                      sx={{
                        flexGrow: 1,
                        height: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        ml: { xs: 1.5, sm: 2 },
                        mr: { xs: 0, md: -40 },
                        minWidth: 0,
                        display: { xs: "none", sm: "block" },
                        transformOrigin: "left center",
                      }}
                      className="profile-line-grow"
                    />
                  </Box>
                  <Typography
                    key={`profile-last-name-${animationKey}`}
                    sx={{
                      fontSize: { xs: "30px", sm: "38px", md: "52px" },
                      fontWeight: "800",
                      color: "#ffffff",
                      lineHeight: "1.05",
                    }}
                    className="profile-fade-up delay-2"
                  >
                    Sasutona
                  </Typography>
                </Box>

                <Typography
                  key={`profile-title-role-${animationKey}`}
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontWeight: "600",
                    letterSpacing: { xs: "1.5px", md: "2px" },
                    color: "#FFFFFF",
                  }}
                  className="profile-fade-up delay-3"
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

export default ProfilePart;
