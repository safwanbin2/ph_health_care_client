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
          flex: 1,
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            top: "-40px",
            zIndex: -1,
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
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-40px",
            left: "150px",
          }}
        >
          <Image width={100} height={100} src={assets.svgs.arrow} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              marginTop: "30px",
            }}
          >
            <Image
              height={250}
              width={220}
              src={assets.images.doctor1}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              height={230}
              width={220}
              src={assets.images.doctor2}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              left: "90px",
            }}
          >
            <Image
              height={230}
              width={210}
              src={assets.images.doctor3}
              alt="doctor3"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-50px",
              right: "0px",
              zIndex: "-1",
            }}
          >
            <Image
              height={150}
              width={150}
              src={assets.images.stethoscope}
              alt="stethoscope"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
