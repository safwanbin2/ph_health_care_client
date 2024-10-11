import { TResponse } from "@/interfaces";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SpecialtyCard from "./SpecialtyCard";

const Specialties = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/specialties`, {
    next: {
      revalidate: 30,
    },
  });
  const specialties: TResponse = await res.json();

  return (
    <>
      <Container>
        <Box
          sx={{
            marginY: 4,
          }}
        >
          <Box
            sx={{
              margin: "24px 0",
            }}
          >
            <Typography component="h2" variant="h4" fontWeight={600} my={1}>
              Explore Treatments Across Specialties
            </Typography>
            <Typography component="p" color="gray" my={1}>
              Find experienced doctors across all specialties
            </Typography>
          </Box>
          <Stack direction="row" gap={4}>
            {specialties?.data?.length &&
              specialties?.data.map((specialty) => (
                <SpecialtyCard key={specialty.id} specialty={specialty} />
              ))}
          </Stack>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              sx={{
                marginTop: "24px",
              }}
              variant="outlined"
            >
              View All
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Specialties;
