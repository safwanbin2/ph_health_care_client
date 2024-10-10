import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component="h1" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack justifyContent="space-between" direction="row" gap={4}>
          <Typography>Consultation</Typography>
          <Typography>Health plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button component={Link} href={"/login"}>
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
