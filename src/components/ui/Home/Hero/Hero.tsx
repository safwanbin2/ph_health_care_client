import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "600px",
            top: "-40px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid image" />
        </Box>
        <Typography component="h1" variant="h2" sx={{ fontWeight: "500" }}>
          Healthier Hearts
        </Typography>
        <Typography component="h1" variant="h2" sx={{ fontWeight: "500" }}>
          Come From
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          sx={{ fontWeight: "500", color: "primary.main" }}
        >
          Prevention Care
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            width: "50%",
          }}
          component="p"
          variant="h6"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          libero quae est laudantium magnam sequi aperiam itaque doloribus, quod
          eum! Lorem, ipsum.
        </Typography>
        <Box>
          <Button>Make Appointment</Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "12px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box>Left</Box>
    </Container>
  );
};

export default Hero;
