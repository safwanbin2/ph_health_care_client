import { Box, Container, Grid, Typography } from "@mui/material";

const HowItWorks = () => {
  return (
    <>
      <Container className="space-y-10">
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
        <Grid container spacing={5}>
          <Grid item md={6}>
            left
          </Grid>
          <Grid item md={6}>
            right
          </Grid>
        </Grid>
        <Box>3</Box>
      </Container>
    </>
  );
};

export default HowItWorks;
