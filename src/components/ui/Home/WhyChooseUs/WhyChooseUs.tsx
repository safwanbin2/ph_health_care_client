import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import choose_us_image from "@/assets/choose-us.png";
import awardImage from "@/assets/svgs/award-icon.svg";

const WhyChooseUs = () => {
  const whyChooseUsConent = [
    {
      title: "Award Winning Service",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in repellat numquam! in repellat numquam!",
      image: awardImage,
    },
    {
      title: "Award Winning Service",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in repellat numquam! in repellat numquam!",
      image: awardImage,
    },
    {
      title: "Award Winning Service",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in repellat numquam! in repellat numquam!",
      image: awardImage,
    },
    {
      title: "Award Winning Service",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in repellat numquam! in repellat numquam!",
      image: awardImage,
    },
  ];
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
      <Grid container spacing={5} alignItems="center">
        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "rgba(25, 25, 25, .1)",
              padding: "30px 20px",
              gap: 2,
              borderRadius: "20px 20px 100px 20px",
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <Image
                src={whyChooseUsConent[0].image}
                alt="award image"
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h6" mb={1}>
                {whyChooseUsConent[0].title}
              </Typography>
              <Typography color="gray" fontSize={14} fontWeight={300}>
                {whyChooseUsConent[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "rgba(25, 25, 25, .1)",
              padding: "30px 20px",
              gap: 2,
              borderRadius: "20px 100px 20px 20px",
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <Image
                src={whyChooseUsConent[0].image}
                alt="award image"
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h6" mb={1}>
                {whyChooseUsConent[0].title}
              </Typography>
              <Typography color="gray" fontSize={14} fontWeight={300}>
                {whyChooseUsConent[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "rgba(25, 25, 25, .1)",
              padding: "30px 20px",
              gap: 2,
              borderRadius: "20px 20px 100px 20px",
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <Image
                src={whyChooseUsConent[0].image}
                alt="award image"
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h6" mb={1}>
                {whyChooseUsConent[0].title}
              </Typography>
              <Typography color="gray" fontSize={14} fontWeight={300}>
                {whyChooseUsConent[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "rgba(25, 25, 25, .1)",
              padding: "30px 20px",
              gap: 2,
              borderRadius: "20px 100px 20px 20px",
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <Image
                src={whyChooseUsConent[0].image}
                alt="award image"
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h6" mb={1}>
                {whyChooseUsConent[0].title}
              </Typography>
              <Typography color="gray" fontSize={14} fontWeight={300}>
                {whyChooseUsConent[0].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} item>
          <Image src={choose_us_image} alt="Why choose image" width={1000} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
