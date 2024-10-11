import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TopRatedDoctorCard from "./TopRatedDoctorCard";
import { TDoctor } from "@/interfaces";

const TopRatedDoctors = async () => {
  const res = await fetch(
    `http://localhost:5000/api/v1/doctor?page=1&limit=3`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: doctors, meta } = await res.json();

  return (
    <Box
      sx={{
        my: 5,
        py: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        bgcolor: "rgba(25, 25, 25, .1)",
        clipPath: "polygon(0 0, 0 75%, 100% 100%, 100% 25%)",
      }}
    >
      <Typography component="h1" variant="h4" fontWeight={500}>
        Our Top Rated Doctors
      </Typography>
      <Typography
        sx={{
          color: "gray",
          width: "40%",
          textAlign: "center",
        }}
      >
        Access to expert physical and surgeons, advanced technologies and
        top-quality surgery facilities right here.
      </Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {doctors?.length &&
              doctors.map((doctor: TDoctor) => (
                <TopRatedDoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Button variant="outlined">View All Doctors</Button>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;
