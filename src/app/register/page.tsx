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
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.service";

const RegisterPage = () => {
  const router = useRouter();
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
  const [loading, setLoading] = useState(false);

  const handleCreatePatient: SubmitHandler<IPatientData> = async (values) => {
    setLoading(true);
    const patientData = modifyPayload(values);
    try {
      const res = await registerPatient(patientData);
      if (res.success) {
        toast.success(res?.message);
        const result = await loginUser({
          email: values.patient.email,
          password: values.password,
        });
        if (result.success) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
      }
    } catch (error) {
      toast.error(error?.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
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
                    {...register("patient.name", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Email"
                    type="email"
                    size="small"
                    {...register("patient.email", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Password"
                    type="password"
                    size="small"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Contact Number"
                    type="tel"
                    size="small"
                    {...register("patient.contactNumber", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth={true}
                    label="Address"
                    type="text"
                    size="small"
                    {...register("patient.address", {
                      required: true,
                    })}
                  />
                </Grid>
              </Grid>
              {loading ? (
                <LoadingButton loading fullWidth={true} variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button type="submit" fullWidth={true}>
                  REGISTER
                </Button>
              )}

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
