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
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(21,8,222,1) 0%, rgba(138,138,246,1) 49%, rgba(0,212,255,1) 100%)",
            p: 6,
            borderRadius: 5,
            display: "flex",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              180+
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Expert Doctors
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              26+
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Expert Services
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              10K+
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Happy Patients
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              150+
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Best Award Winners
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HowItWorks;
