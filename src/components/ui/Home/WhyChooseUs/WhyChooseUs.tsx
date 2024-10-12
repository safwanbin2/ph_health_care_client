import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import choose_us_image from "@/assets/choose-us.png";

const WhyChooseUs = () => {
  return (
    <Container
      sx={{
        py: 5,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography color="primary.main" fontWeight={600}>
          Why Us
        </Typography>
        <Typography fontSize={30} fontWeight={600}>
          Why Choose Us
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid md={6} item>
          left
        </Grid>
        <Grid md={6} item>
          <Image src={choose_us_image} alt="Why choose image" width={1000} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
