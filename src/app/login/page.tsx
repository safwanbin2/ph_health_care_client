"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { loginUser } from "@/services/actions/loginUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import PHForm from "@/components/form/PHForm/PHForm";
import PHInput from "@/components/form/PHForm/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const logInValidationSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLoginUser = async (values: FieldValues) => {
    setLoading(true);
    try {
      const res = await loginUser(values);
      if (res.success) {
        toast.success(res?.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
      } else {
        setErrorMessage(res?.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message);
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
            resolver={zodResolver(logInValidationSchema)}
            onSubmit={handleLoginUser}
            defaultValues={{
              email: "",
              password: "",
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
                  Login PH HealthCare
                </Typography>
              </Box>
              {errorMessage && (
                <Box
                  sx={{
                    borderBottom: "2px solid red",
                    px: 1,
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      color: "red",
                      fontWeight: 600,
                    }}
                  >
                    {errorMessage}
                  </Typography>
                </Box>
              )}
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    fullWidth={true}
                    label="Email"
                    type="email"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
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
              {loading ? (
                <LoadingButton loading fullWidth={true} variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button type="submit" fullWidth={true}>
                  LOGIN
                </Button>
              )}

              <Typography fontWeight={400} color="gray">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-400 font-semibold">
                  Create an account
                </Link>
              </Typography>
            </Stack>
          </PHForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
