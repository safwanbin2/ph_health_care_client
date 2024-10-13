"use client";

import { getUserInfo, removeUser } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component={Link} href={"/"} fontWeight={600}>
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
        {userInfo?.userId ? (
          <Button
            onClick={() => {
              removeUser();
              router.refresh();
              return toast.success("Logged out successfully");
            }}
            variant="outlined"
            color="error"
          >
            Logout
          </Button>
        ) : (
          <Button component={Link} href={"/login"}>
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
