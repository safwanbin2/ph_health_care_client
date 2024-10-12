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
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { loginUser } from "@/services/actions/loginUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

const LoginPage = () => {
  interface IUserLoginPayload {
    email: string;
    password: string;
  }
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm<IUserLoginPayload>();

  const handleLoginUser: SubmitHandler<IUserLoginPayload> = async (values) => {
    setLoading(true);
    try {
      const res = await loginUser(values);
      if (res.success) {
        toast.success(res?.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
      }
    } catch (error) {
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
          <form onSubmit={handleSubmit(handleLoginUser)}>
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
                    {...register("email", {
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
