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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.service";
import PHForm from "@/components/form/PHForm/PHForm";
import PHInput from "@/components/form/PHForm/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerPatientValidationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email("Please enter a valid email"),
    contactNumber: z
      .string()
      .regex(/^\d{11}$/, "Please provide a valid contact number"),
    address: z.string().min(1, "Please enter your address"),
  }),
});

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCreatePatient = async (values: FieldValues) => {
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
          router.push("/dashboard");
        }
      }
    } catch (error: any) {
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
          <PHForm
            onSubmit={handleCreatePatient}
            resolver={zodResolver(registerPatientValidationSchema)}
            defaultValues={{
              password: "",
              patient: {
                name: "",
                email: "",
                contactNumber: "",
                address: "",
              },
            }}
          >
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
                  <PHInput name="patient.name" label="Name" fullWidth={true} />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Email"
                    type="email"
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Password"
                    type="password"
                    size="small"
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Contact Number"
                    type="tel"
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Address"
                    size="small"
                    name="patient.address"
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
          </PHForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
