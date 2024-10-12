import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 5,
            boxShadow: 1,
            borderRadius: 1,
          }}
        >
          <form>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box>
                <Image
                  src={assets.svgs.logo}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Box>
              <Box>
                <Typography component="h6" variant="h6" fontWeight={600}>
                  Login PH HealthCare
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Email"
                    type="email"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Password"
                    type="password"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  textAlign: "end",
                  width: "100%",
                }}
              >
                <Link href="/forgot-password" className="text-sm text-gray-600">
                  Forgot Password?
                </Link>
              </Box>
              <Button fullWidth={true}>LOGIN</Button>
              <Typography fontWeight={400} color="gray">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-400 font-semibold">
                  Create an account
                </Link>
              </Typography>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
