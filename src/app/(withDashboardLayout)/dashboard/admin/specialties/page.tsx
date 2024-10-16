"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";
import React from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialty.api";

const SpecialtiesPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  console.log(data);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={() => setModalOpen(true)}>Create Specialty</Button>
          <SpecialtyModal open={modalOpen} setOpen={setModalOpen} />
          <Box>
            <TextField size="small" placeholder="Search specialty" />
          </Box>
        </Stack>
        <Box>
          <Typography>All Specialties:</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
