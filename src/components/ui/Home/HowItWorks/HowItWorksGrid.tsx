import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import doctor from "@/assets/how-it-works-img.png";
import searchIcon from "@/assets/svgs/doctorSearch.svg";

const HowItWorksGrid = () => {
  const howItWorksContent = [
    {
      title: "Search Doctor",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, distinctio.",
      image: searchIcon,
    },
    {
      title: "Search Doctor",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, distinctio.",
      image: searchIcon,
    },
    {
      title: "Search Doctor",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, distinctio.",
      image: searchIcon,
    },
    {
      title: "Search Doctor",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, distinctio.",
      image: searchIcon,
    },
  ];
  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item md={6}>
        <Image src={doctor} alt="doctor image on how it works" width={1000} />
      </Grid>
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            sx={{
              p: 2,
              border: "1px solid rgba(25, 25, 25, .1)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Image
                src={howItWorksContent[0].image}
                alt="search image"
                width={40}
              />
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 1,
                }}
              >
                {howItWorksContent[0].title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "gray",
                }}
              >
                {howItWorksContent[0].description}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              p: 2,
              border: "1px solid rgba(25, 25, 25, .1)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Image
                src={howItWorksContent[0].image}
                alt="search image"
                width={40}
              />
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 1,
                }}
              >
                {howItWorksContent[0].title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "gray",
                }}
              >
                {howItWorksContent[0].description}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              p: 2,
              border: "1px solid rgba(25, 25, 25, .1)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Image
                src={howItWorksContent[0].image}
                alt="search image"
                width={40}
              />
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 1,
                }}
              >
                {howItWorksContent[0].title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "gray",
                }}
              >
                {howItWorksContent[0].description}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              p: 2,
              border: "1px solid rgba(25, 25, 25, .1)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Image
                src={howItWorksContent[0].image}
                alt="search image"
                width={40}
              />
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 1,
                }}
              >
                {howItWorksContent[0].title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "gray",
                }}
              >
                {howItWorksContent[0].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowItWorksGrid;
