"use client";

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
import { useForm, SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  interface IPatientData {
    password: string;
    patient: {
      name: string;
      email: string;
      address: string;
      contactNumber: string;
    };
  }

  const { register, handleSubmit, watch } = useForm<IPatientData>();

  const handleCreatePatient: SubmitHandler<IPatientData> = (data) => {
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(handleCreatePatient)}>
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
                  Patient Register
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <TextField
                    fullWidth={true}
                    label="Name"
                    type="text"
                    size="small"
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Email"
                    type="email"
                    size="small"
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Password"
                    type="password"
                    size="small"
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Contact Number"
                    type="tel"
                    size="small"
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Address"
                    type="text"
                    size="small"
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth={true}>
                REGISTER
              </Button>
              <Typography fontWeight={400} color="gray">
                Do you already have an account?{" "}
                <Link href="/login" className="text-blue-400 font-semibold">
                  Login
                </Link>
              </Typography>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
