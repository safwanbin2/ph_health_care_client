import { TResponse } from "@/interfaces";
import { Box, Container, Typography } from "@mui/material";

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
        <Box>
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
          <Box>
            {specialties?.data?.length &&
              specialties?.data.map((specialty) => (
                <div key={specialty.id} specialty={specialty}>
                  {specialty.title}
                </div>
              ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Specialties;
