import { Box, Container, Grid, Typography } from "@mui/material";
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorks = () => {
  return (
    <>
      <Container
        className="space-y-10"
        sx={{
          my: 5,
        }}
      >
        <Box
          className="space-y-2"
          sx={{
            width: "50%",
          }}
        >
          <Typography component="h2" variant="h6" color="primary.main">
            How it Works
          </Typography>
          <Typography component="h2" variant="h4" fontWeight={600}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              color: "gray",
            }}
          >
            Access to expert physicians and surgeons, advanced technologies and
            top-quality surgery facilities right here.
          </Typography>
        </Box>
        <HowItWorksGrid />
        <Box>3</Box>
      </Container>
    </>
  );
};

export default HowItWorks;
